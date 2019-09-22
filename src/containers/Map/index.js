import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { moveCharacter } from '../../redux/characters'
import { enterInBattle } from '../../redux/battle'
// import { texts } from '../../helpers/texts'

import { getMap } from '../../api/map'

const StyledWrapper = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.lightPrimary};
  padding: 10px;
`

const StyledMap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const getWidth = itemsPerRow => `${100 / itemsPerRow}%`

const StyledMapPart = styled.div`
  position: relative;
  border: solid black 1px;
  padding: 10px;
  height: 100px;
  width: ${({ itemsPerRow }) => getWidth(itemsPerRow)};
  box-sizing: border-box;
  opacity: ${({ isBlocked }) => (isBlocked ? 0.5 : 1)};
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHTKXFkoS6Ye0h0916XwIDh6ppfq1bfcpLaG7faU3i_0jt7n1');
`

const StyledControls = styled.div`
  margin: 0 auto;

  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`

const getOpacity = (isDisabled, isInvisible) => {
  if (isInvisible) return 0

  if (isDisabled) return 0.5

  return 1
}

const StyledControlButton = styled.div`
  opacity: ${({ isDisabled, isInvisible }) =>
    getOpacity(isDisabled, isInvisible)};
  cursor: ${({ isDisabled, isInvisible }) =>
    isDisabled || isInvisible ? 'default' : 'pointer'};

  color: ${({ theme }) => theme.colors.white};
  width: 70px;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  margin: 3px;
  padding: 5px 0 5px 0;
`

const StyledCharacter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Character = () => {
  return (
    <StyledCharacter>
      <img
        src="https://cdn140.picsart.com/286553534052211.png?r1024x1024"
        alt="personagem"
        height={50}
        width={50}
      />
    </StyledCharacter>
  )
}

const MapPart = ({ isCharacterHere, coordX, coordY, content, itemsPerRow }) => {
  const renderContent = content => {
    if (content.type === 'village') {
      return <div>{content.data.name} Village</div>
    }

    if (content.type === 'enemy') {
      return <div>inimigo</div>
    }
  }

  const isBlocked = coordX === undefined || coordY === undefined

  return (
    <StyledMapPart isBlocked={isBlocked} itemsPerRow={itemsPerRow}>
      {!isBlocked && <span>x: {coordX}</span>}
      {!isBlocked && <span>y: {coordY}</span>}
      {content && renderContent(content)}
      {isCharacterHere && <Character />}
    </StyledMapPart>
  )
}

const Map = ({ isLoading, ...props }) => {
  const dispatch = useDispatch()
  const [accessAction, setAccessAction] = useState(undefined)
  const { selectedCharacter } = useSelector(({ user }) => ({ ...user }))
  const [map, setMap] = useState([])

  const mapSize = 9
  const itemsPerRow = Math.sqrt(mapSize)

  useEffect(() => {
    if (!map.length) {
      fetchMap()
    }
  }, [map.length])

  const fetchMap = async () => {
    const { data } = await getMap()
    setMap(data)
  }

  // document.addEventListener('keydown', ({ key }) => {
  //   const actions = {
  //     ArrowUp: {
  //       action: () => setPosition(0, -1),
  //       isDisabled: selectedCharacter.coordinate.y === 0 || !canExecuteAction
  //     },
  //     ArrowRight: {
  //       action: () => setPosition(1, 0),
  //       isDisabled: selectedCharacter.coordinate.x === itemsPerRow - 1 || !canExecuteAction
  //     },
  //     ArrowDown: {
  //       action: () => setPosition(0, 1),
  //       isDisabled: selectedCharacter.coordinate.y === itemsPerRow - 1 || !canExecuteAction
  //     },
  //     ArrowLeft: {
  //       action: () => setPosition(-1, 0),
  //       isDisabled: selectedCharacter.coordinate.x === 0 || !canExecuteAction
  //     }
  //   }

  //   const currentAction = actions[key]

  //   if (currentAction && !currentAction.isDisabled) {
  //     currentAction.action()
  //   }
  // })

  const setPosition = (x, y) => {
    if (!isLoading) {
      dispatch(
        moveCharacter(x, y, (nextX, nextY) => {
          onAccessArea(nextX, nextY)
          fetchMap()
        })
      )
    }
  }

  const onAccessArea = (x, y) => {
    const actions = {
      village: '/vila',
      enemy: '/campo'
    }

    const currentArea = map.find(m => {
      return m.coordinate.x === x && m.coordinate.y === y
    })

    if (currentArea && currentArea.content) {
      if (currentArea.content.type === 'enemy') {
        dispatch(
          enterInBattle(selectedCharacter, { ...currentArea.content.data })
        )
      }

      const current = actions[currentArea.content.type]
      setAccessAction(current)
      props.history.push(current)
    } else {
      setAccessAction(undefined)

      // TODO
      if (
        currentArea &&
        currentArea.content &&
        currentArea.content.type !== 'enemy'
      ) {
        props.history.push('/')
      }
    }
  }

  const renderAccessButton = () => {
    return accessAction ? (
      <Link to={accessAction}>
        <StyledControlButton>Acessar</StyledControlButton>
      </Link>
    ) : (
      <StyledControlButton>Acessar</StyledControlButton>
    )
  }

  return (
    <StyledWrapper>
      {/* <h3>{texts.mapTitle[language]}</h3>
      <div>{texts.mapDescription[language]}</div> */}
      <>
        <StyledMap>
          {map.map(({ coordinate, content, type }) => {
            return (
              <MapPart
                itemsPerRow={itemsPerRow}
                isCharacterHere={
                  coordinate.x === selectedCharacter.coordinate.x &&
                  coordinate.y === selectedCharacter.coordinate.y
                }
                coordX={coordinate.x}
                coordY={coordinate.y}
                content={content}
              />
            )
          })}
          {/* <div>
            Coordenadas atuais
            <div>X: {selectedCharacter.coordinate.x}</div>
            <div>Y: {selectedCharacter.coordinate.y}</div>
          </div> */}
          <StyledControls>
            <div>
              <StyledControlButton isInvisible />
              <StyledControlButton
                onClick={() => setPosition(0, -1)}
                isDisabled={selectedCharacter.coordinate.y === 0 || isLoading}
              >
                Norte
              </StyledControlButton>
              <StyledControlButton isInvisible />
            </div>
            <div>
              <StyledControlButton
                isDisabled={selectedCharacter.coordinate.x === 0 || isLoading}
                onClick={() => setPosition(-1, 0)}
              >
                Oeste
              </StyledControlButton>
              {renderAccessButton()}
              <StyledControlButton
                isDisabled={
                  // selectedCharacter.coordinate.x === itemsPerRow - 1 ||
                  isLoading
                }
                onClick={() => setPosition(1, 0)}
              >
                Leste
              </StyledControlButton>
            </div>
            <div>
              <StyledControlButton isInvisible />
              <StyledControlButton
                isDisabled={
                  // selectedCharacter.coordinate.y === itemsPerRow - 1 ||
                  isLoading
                }
                onClick={() => setPosition(0, 1)}
              >
                Sul
              </StyledControlButton>
              <StyledControlButton isInvisible />
            </div>
          </StyledControls>
        </StyledMap>
      </>
    </StyledWrapper>
  )
}

export default withRouter(Map)
