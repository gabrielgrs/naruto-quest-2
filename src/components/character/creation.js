import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import {
  Row,
  Col,
  Button,
  TextField,
  AttributesSelection,
  Tooltip,
  Image
} from '../'
import texts from '../../helpers/texts'

const StyledTotalPoints = styled.span`
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 2px;
`

const StyledPageShow = styled.div`
  padding-top: 5px;
`

export default ({
  jobsList,
  villages,
  name,
  setName,
  selectedJob,
  setSelectedJob,
  selectedVillage,
  setSelectedVillage,
  totalPoints,
  attributes,
  onIncreaseAttribute,
  onDecreaseAttribute,
  onCreateCharacter,
  language
}) => {
  const itemsPerPage = 12
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    if (!!jobsList.length) {
      const total = Math.ceil(jobsList.length / itemsPerPage)
      setTotalPages(total)
    }
  }, [jobsList.length])

  const renderCharactersToCreate = () => {
    const canRenderThisCharacter = characterIndex => {
      if (currentPage === 0) {
        return characterIndex < itemsPerPage
      }

      if (currentPage > 0 && currentPage < totalPages) {
        const initialIndex = itemsPerPage * currentPage
        return (
          characterIndex >= initialIndex &&
          characterIndex < initialIndex + itemsPerPage
        )
      }

      return false
    }

    return jobsList.map(
      ({ image, name, _id }, index) =>
        canRenderThisCharacter(index) && (
          <Col key={_id} sm={2}>
            <Tooltip text={`${name}`}>
              <Image
                hasGreyscale={selectedJob !== _id}
                key={_id}
                onClick={() => setSelectedJob(_id)}
                isDisabled={selectedJob !== _id}
                src={image}
              />
            </Tooltip>
          </Col>
        )
    )
  }

  const renderVillages = () => {
    return villages.map(({ name, label, image }) => {
      return (
        <Col sm={2} key={name}>
          <Tooltip text={label}>
            <Image
              hasGreyscale={name !== selectedVillage}
              isDisabled={name !== selectedVillage}
              onClick={() => setSelectedVillage(name)}
              src={image}
            />
          </Tooltip>
        </Col>
      )
    })
  }

  return (
    <Row>
      {renderCharactersToCreate()}
      <Row inline>
        <Col sm={2}>
          <Button
            isDisabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {texts.characters.previousPage[language]}
          </Button>
        </Col>
        <Col sm={1}>
          <StyledPageShow>
            {currentPage + 1} / {totalPages}
          </StyledPageShow>
        </Col>
        <Col sm={2}>
          <Button
            isDisabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {texts.characters.nextPage[language]}
          </Button>
        </Col>
      </Row>
      <Col sm={12}>
        <TextField
          label={texts.characters.name.label[language]}
          name="name"
          placeholder={texts.characters.name.placeholder[language]}
          value={name}
          onChange={({ target }) =>
            setName(target.value.replace(/[^A-Z0-9]/gi, ''))
          }
        />
      </Col>
      {renderVillages()}
      <Col sm={12}>
        <StyledTotalPoints>
          {texts.characters.totalPoints[language]} {totalPoints}
        </StyledTotalPoints>
      </Col>
      <Col sm={12}>
        <AttributesSelection
          language={language}
          onDecreaseAttribute={onDecreaseAttribute}
          onIncreaseAttribute={onIncreaseAttribute}
          attributes={attributes}
        />
        <Button onClick={() => onCreateCharacter()}>
          {texts.characters.createCharacter[language]}
        </Button>
      </Col>
    </Row>
  )
}
