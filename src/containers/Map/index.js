import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { moveCharacter } from '../../redux/characters'
import { enterInBattle } from '../../redux/battle'
// import { texts } from '../../helpers/texts'
import { generateMap } from '../../helpers/map'

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
      return (
        <div>
          <img
            width="100%"
            height="100%"
            alt={content.name}
            src={content.image}
          />
        </div>
      )
    }

    if (content.type === 'enemy') {
      return (
        <div>
          <img
            width="100%"
            height="100%"
            alt={content.name}
            src={content.image}
          />
        </div>
      )
    }
  }

  return (
    <StyledMapPart itemsPerRow={itemsPerRow}>
      <span>x: {coordX}</span>
      <span>y: {coordY}</span>
      {content && renderContent(content)}
      {isCharacterHere && <Character />}
    </StyledMapPart>
  )
}

const Map = ({ isLoading, ...props }) => {
  const dispatch = useDispatch()
  const [accessAction, setAccessAction] = useState(undefined)
  const { selectedCharacter } = useSelector(({ user }) => ({ ...user }))
  // const language = 'pt'

  const mapSize = 9
  const itemsPerRow = Math.sqrt(mapSize)
  const generatedMap = generateMap(mapSize, itemsPerRow)

  useEffect(() => {
    if (selectedCharacter.coordinates) {
      const { x, y } = selectedCharacter.coordinates
      onAccessArea(x, y)
    }
    // eslint-disable-next-line
  }, [selectedCharacter.coordinates])

  // document.addEventListener('keydown', ({ key }) => {
  //   const actions = {
  //     ArrowUp: {
  //       action: () => setPosition(0, -1),
  //       isDisabled: selectedCharacter.coordinates.y === 0 || !canExecuteAction
  //     },
  //     ArrowRight: {
  //       action: () => setPosition(1, 0),
  //       isDisabled: selectedCharacter.coordinates.x === itemsPerRow - 1 || !canExecuteAction
  //     },
  //     ArrowDown: {
  //       action: () => setPosition(0, 1),
  //       isDisabled: selectedCharacter.coordinates.y === itemsPerRow - 1 || !canExecuteAction
  //     },
  //     ArrowLeft: {
  //       action: () => setPosition(-1, 0),
  //       isDisabled: selectedCharacter.coordinates.x === 0 || !canExecuteAction
  //     }
  //   }

  //   const currentAction = actions[key]

  //   if (currentAction && !currentAction.isDisabled) {
  //     currentAction.action()
  //   }
  // })

  const setPosition = (x, y) => {
    if (!isLoading) {
      dispatch(moveCharacter(x, y))
    }
  }

  const onAccessArea = (x, y) => {
    const actions = {
      village: '/vila',
      enemy: '/campo'
    }

    const currentArea = generatedMap.find(m => m.coordX === x && m.coordY === y)

    if (currentArea && currentArea.content) {
      const mockEnemy = {
        attributes: { attack: 0, intelligence: 0, vitality: 0 },
        inStory: false,
        _id: '5d81473dc4632e26a8f7f720',
        code: 0,
        name: 'Denka de Treinamento',
        image:
          'https://res.cloudinary.com/dbmnsavja/image/upload/v1566237351/Naruto%20Game/Characters/denka.png',
        level: 1,
        element: 'neutral',
        exp: 20,
        gold: 0,
        __v: 0
      }
      if (
        !selectedCharacter.currentBattle &&
        currentArea.content.type === 'enemy'
      ) {
        dispatch(enterInBattle(selectedCharacter, mockEnemy))
        // TODO
        setPosition(0, 1)
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
          {generatedMap.map(m => (
            <MapPart
              itemsPerRow={itemsPerRow}
              isCharacterHere={
                m.coordX === selectedCharacter.coordinates.x &&
                m.coordY === selectedCharacter.coordinates.y
              }
              coordX={m.coordX}
              coordY={m.coordY}
              content={m.content}
            />
          ))}
          {/* <div>
            Coordenadas atuais
            <div>X: {selectedCharacter.coordinates.x}</div>
            <div>Y: {selectedCharacter.coordinates.y}</div>
          </div> */}
          <StyledControls>
            <div>
              <StyledControlButton isInvisible />
              <StyledControlButton
                onClick={() => setPosition(0, -1)}
                isDisabled={selectedCharacter.coordinates.y === 0 || isLoading}
              >
                Norte
              </StyledControlButton>
              <StyledControlButton isInvisible />
            </div>
            <div>
              <StyledControlButton
                isDisabled={selectedCharacter.coordinates.x === 0 || isLoading}
                onClick={() => setPosition(-1, 0)}
              >
                Oeste
              </StyledControlButton>
              {renderAccessButton()}
              <StyledControlButton
                isDisabled={
                  selectedCharacter.coordinates.x === itemsPerRow - 1 ||
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
                  selectedCharacter.coordinates.y === itemsPerRow - 1 ||
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
