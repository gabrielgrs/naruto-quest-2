import styled from 'styled-components'

export const StyledSlot = styled.div`
  cursor: default;
  border: ${({ hasEquipment }) => (hasEquipment ? null : 'dashed 2px black')};
  opacity: ${({ hasEquipment }) => (hasEquipment ? 1 : 0.7)};
  height: 60px;
  width: 60px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`

export const StyledCharacter = styled.div`
  position: relative;
  height: 600px;

  & img {
    height: 600px;
    position: absolute;
    opacity: 0.7;
  }
`

export const StyledHead = styled.div`
  position: absolute;
  margin-left: 50px;

  & img {
    position: relative;
    height: 60px;
  }
`

export const StyledTrunk = styled.div`
  position: absolute;
  margin-top: 170px;
  margin-left: 30px;

  & img {
    position: relative;
    height: 60px;
  }
`

export const StyledArm = styled.div`
  position: absolute;
  margin-top: 220px;
  margin-left: 110px;

  & img {
    position: relative;
    height: 60px;
  }
`

export const StyledLegs = styled.div`
  position: absolute;
  margin-top: 430px;
  margin-left: 20px;

  & img {
    position: relative;
    height: 60px;
  }
`

export const StyledFeets = styled.div`
  position: absolute;
  margin-top: 520px;
  margin-left: 100px;

  & img {
    position: relative;
    height: 60px;
  }
`

export const StyledWeapon = styled.div`
  position: absolute;
  margin-top: 300px;
  margin-left: 0px;

  & img {
    position: relative;
    height: 60px;
  }
`
