import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharacter } from '../../../redux/users'
import {
  create,
  clearState as clearCharactersState
} from '../../../redux/characters'
import { getAll, clearState as clearJobsState } from '../../../redux/jobs'
import features from '../../../features'
import {
  Page,
  Row,
  Col,
  Button,
  Image,
  CharacterInfo
} from '../../../components'
import { getInitialAttributes } from '../../../helpers/rules'
import { villages } from '../../../helpers/villages'
import { initialValues } from './helpers'
import * as notify from '../../../helpers/notify'
import CharacterCreation from '../../../components/character/creation'

export default () => {
  const [selectedJob, setSelectedJob] = useState(undefined)
  const [selectedVillage, setSelectedVillage] = useState(undefined)
  const [creatingCharacter, setCreatingCharacter] = useState(false)
  const [totalPoints, setTotalPoints] = useState(30)
  const [name, setName] = useState('')
  const [attributes, setAttributes] = useState(initialValues)

  const dispatch = useDispatch()

  const {
    id,
    characters,
    jobsList,
    additionalCharacters,
    language
  } = useSelector(({ user, jobs, common }) => {
    return {
      language: common.language,
      ...user,
      ...jobs
    }
  })

  useEffect(() => {
    return () => {
      dispatch(clearCharactersState())
      dispatch(clearJobsState())
    }
  }, [dispatch])

  useEffect(() => {
    if (!jobsList.length) dispatch(getAll())
  }, [jobsList.length, dispatch])

  const onDecreaseAttribute = attribute => {
    if (
      totalPoints < features.INITIAL_STATS_POINTS &&
      attributes[attribute] > 0
    ) {
      setTotalPoints(totalPoints + 1)
      setAttributes({ ...attributes, [attribute]: attributes[attribute] - 1 })
    }
  }

  const onIncreaseAttribute = attribute => {
    if (totalPoints > 0) {
      setTotalPoints(totalPoints - 1)
      setAttributes({ ...attributes, [attribute]: attributes[attribute] + 1 })
    }
  }

  const onCreateCharacter = () => {
    if (!selectedJob) return notify.error('Escolha o personagem')
    if (!selectedVillage) return notify.error('Escolha a vila')
    if (name.length < 3 || name.length > 12)
      return notify.error('Nome deve ter entre 3 e 12 caracteres')
    if (totalPoints > 0) return notify.error('Utilize todos os pontos')
    const character = {
      name,
      attributes: getInitialAttributes(attributes),
      selectedJob: selectedJob
    }
    dispatch(
      create(id, { village: selectedVillage, ...character }, () => {
        setTimeout(() => {
          setCreatingCharacter(false)
          setName('')
          setSelectedJob(undefined)
          setSelectedVillage(undefined)
          setTotalPoints(30)
          setAttributes(initialValues)
        }, 500)
      })
    )
  }

  const onSelectCharacter = character => {
    dispatch(selectCharacter(id, character))
  }

  // const onClickRemoveCharacter = ({ _id }) => {
  //   dispatch(removeCharacter(_id))
  // }

  return (
    <Page
      title="Personagens"
      description={`Você poderá criar até ${features.MAX_CHARACTERS +
        additionalCharacters} personagens`}
    >
      <>
        {characters &&
          characters.length <
            features.MAX_CHARACTERS + additionalCharacters && (
            <Row>
              <Col sm={12}>
                <Button
                  onClick={() => setCreatingCharacter(!creatingCharacter)}
                >
                  {creatingCharacter ? 'Cancelar' : 'Criar personagem'}
                </Button>
              </Col>
            </Row>
          )}
        {!creatingCharacter ? (
          <Row>
            {characters &&
              characters.map(character => {
                return (
                  <Col key={character._id} sm={3}>
                    <Image src={character.selectedJob.image} />
                    <CharacterInfo name={name} character={character} />
                    <Row>
                      <Button onClick={() => onSelectCharacter(character)}>
                        Selecionar
                      </Button>
                    </Row>
                  </Col>
                )
              })}
          </Row>
        ) : (
          <CharacterCreation
            language={language}
            jobsList={jobsList || []}
            villages={villages || []}
            name={name}
            setName={setName}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            selectedVillage={selectedVillage}
            setSelectedVillage={setSelectedVillage}
            totalPoints={totalPoints}
            attributes={attributes}
            onIncreaseAttribute={onIncreaseAttribute}
            onDecreaseAttribute={onDecreaseAttribute}
            onCreateCharacter={onCreateCharacter}
          />
        )}
      </>
    </Page>
  )
}
