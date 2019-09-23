import React, { useState } from 'react'
import OnBoardingModal from 'react-modal'
import styled from 'styled-components'
import { steps } from './helpers'

const StyledOnBoardingModal = styled(OnBoardingModal)``

const OnBoardingCard = styled.div`
  width: 800px;
  height: 400px;
  background-color: var(--primary-color);
  position: absolute; /*it can be fixed too*/
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  border-radius: 7px;
  color: var(--white);
  /* margin-top: 100px; */
`

const StyledTitle = styled.div`
  font-size: 1.3em;
`

const StyledDescription = styled.div`
  padding: 12px;
  font-size: 0.7em;
`

const StyledIllustration = styled.div`
  & img {
    object-fit: cover;
    width: 100%;
    height: 190px;
  }
`

const StyledContent = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.5em;
  border: solid black 2px;
  height: 130px;
`

const StyledFooter = styled.div`
  float: right;
`

const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  margin-top: 5px;
  margin-right: 5px;
  padding: 10px 20px 10px 20px;

  border: solid black 2px;
  background-color: ${({ isLastStep, theme }) =>
    isLastStep ? `${theme.colors.darkPrimary}` : `${theme.colors.white}`};
  color: ${({ isLastStep, theme }) =>
    isLastStep ? `${theme.colors.white}` : `${theme.colors.black}`};
`

const OnBoarding = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const lastStep = steps.length - 1

  const { title, description } = steps[currentStep]

  const leftButtonAction = () => {
    setCurrentStep(currentStep - 1)
  }

  const rightButtonAction = () => {
    if (currentStep !== lastStep) {
      return setCurrentStep(currentStep + 1)
    } else if (currentStep === lastStep) {
      onClose()
    }
  }

  const illustration = (
    <img
      src="https://besthqwallpapers.com/Uploads/4-5-2019/90283/thumb2-naruto-uzumaki-blue-neon-lights-battle-manga-artwork.jpg"
      alt="Banner"
    />
  )

  return (
    <StyledOnBoardingModal isOpen={isOpen}>
      <OnBoardingCard>
        <StyledIllustration>{illustration}</StyledIllustration>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
        <StyledFooter>
          <StyledButton
            hidden={currentStep === 0}
            onClick={() => leftButtonAction()}
          >
            Anterior
          </StyledButton>
          <StyledButton
            isLastStep={currentStep === lastStep}
            onClick={() => rightButtonAction()}
          >
            {currentStep === lastStep ? 'Entendi!' : 'Próximo'}
          </StyledButton>
        </StyledFooter>
      </OnBoardingCard>
    </StyledOnBoardingModal>
  )
}

export default OnBoarding
