import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Col } from '../../../components'
import { getRanking, clearState } from '../../../redux/characters'
import styled from 'styled-components'
import { getVillage } from '../../../helpers/villages'
import { getNinjaRank } from '../../../helpers/ninjaRankings'
import { differenceInMinutes } from 'date-fns'
import texts from '../../../helpers/texts'

export const StyledRankingCard = styled.div`
  font-size: 1.5em;
`

export const StyledImage = styled.img`
  height: 100px;
  width: 20vh;
  object-fit: cover;
  object-position: 2px 40%;
`

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  font-size: 1.2em;
`

export const StyledTr = styled.tr`
  & > th,
  & > td {
    min-width: 100px;
    padding-left: 10px;
  }
`

export const StyledStatus = styled.div`
  margin-top: 5px;
  border-radius: 100px;
  color: ${({ isOnline, theme }) =>
    isOnline ? theme.colors.success : theme.colors.danger};
  z-index: 2;
`

export const StyledCard = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.darkPrimary}, ${theme.colors.primary})`};
  padding: 11px 7px 11px 7px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9em;
  letter-spacing: 1px;
  height: 220px;

  & img {
    margin: 5px 0 5px 0;
    object-fit: none;
    object-position: 50% 50%; /* default value: image is centered*/
    width: 100%;
  }
`

export default () => {
  const dispatch = useDispatch()

  const { ranking, selectedCharacter, language } = useSelector(
    ({ character, user, common }) => {
      return {
        language: common.language,
        ...character,
        selectedCharacter: user.selectedCharacter
      }
    }
  )

  useEffect(() => {
    return () => {
      dispatch(clearState())
    }
  }, [dispatch])

  useEffect(() => {
    if (!ranking.length) dispatch(getRanking())
  }, [dispatch, ranking.length])

  const verifyIfUserIsOnline = lastSessionTime => {
    if (!lastSessionTime) return false

    const difference = differenceInMinutes(Date.now(), lastSessionTime)

    return difference <= 3
  }

  return (
    <Page
      title={texts.ranking.title[language]}
      description={texts.ranking.description[language]}
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Itachi.png"
    >
      <Row>
        {ranking.map((char, index) => {
          return (
            <Col key={index} sm={3}>
              <StyledCard>
                <Row>
                  #{index + 1} - {char.name}
                </Row>
                <Row>
                  {char.selectedJob && (
                    <StyledImage src={char.selectedJob.image} alt={char.name} />
                  )}
                </Row>
                <Row>
                  <div>
                    {`${getNinjaRank(char.ninjaRank).label} da Vila da
                    ${getVillage(char.village).label}`}
                  </div>
                  <div>
                    <b>{texts.ranking.level[language]}: </b> {char.level}
                  </div>
                </Row>
                <Row>
                  {verifyIfUserIsOnline(char.lastSessionTime) ||
                  selectedCharacter._id === char._id ? (
                    <StyledStatus isOnline> Online </StyledStatus>
                  ) : (
                    <StyledStatus isOnline={false}> Offline </StyledStatus>
                  )}
                </Row>
              </StyledCard>
            </Col>
          )
        })}
      </Row>
    </Page>
  )
}
