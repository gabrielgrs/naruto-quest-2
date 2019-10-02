import styled, { keyframes } from 'styled-components'

const shakeEffect = keyframes`
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
`

// Original: 60vh
const horizontalTransition = keyframes`
    0%   { opacity: 1; left:0px; }
    25%  { opacity: 0.5; left: 100vh; }
    50%  { opacity: 0.5; left: 100vh; }
    75%  { opacity: 0; left:0px; }
    100% { opacity: 0; left:0px; }
`

const verticalTransition = keyframes`
    0%   { opacity: 1; top:0px; }
    25%  { opacity: 0.5; top: 100vh; }
    50%  { opacity: 0.5; top: 100vh; }
    75%  { opacity: 0; top:0px; }
    100% { opacity: 0; top:0px; }
`

const horizontalTransitionReverse = keyframes`
    0%   { opacity: 1; right:0px; }
    25%  { opacity: 0.5; right: 100vh; }
    50%  { opacity: 0.5; right: 100vh; }
    75%  { opacity: 0; right:0px; }
    100% { opacity: 0; right:0px; }
`

const verticalTransitionReverse = keyframes`
    0%   { opacity: 1; bottom:0px; }
    25%  { opacity: 0.5; bottom: 100vh; }
    50%  { opacity: 0.5; bottom: 100vh; }
    75%  { opacity: 0; bottom:0px; }
    100% { opacity: 0; bottom:0px; }
`

export const StyledAttackEffect = styled.div`
  position: relative;

  @media screen and (min-width: 721px) {
    animation: ${horizontalTransition} 2s;
  }

  @media screen and (max-width: 720px) {
    animation: ${verticalTransition} 2s;
  }
`

export const StyledAttackEffectReverse = styled.div`
  position: relative;

  @media screen and (min-width: 721px) {
    animation: ${horizontalTransitionReverse} 2s;
  }

  @media screen and (max-width: 720px) {
    animation: ${verticalTransitionReverse} 2s;
  }
`

export const StyledDamageEffect = styled.div`
  position: relative;

  animation-name: ${shakeEffect};
  animation-duration: 3s;
  animation-delay: 0.5s;
`

export const bloodEffect = keyframes`
  0% {
    opacity: 0.1;
    top: -100px;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    top: 0;
    transform: scale(1);
  }
`

export const StyledDamage = styled.div`
  position: relative;
  background: url('https://www.ninjamanager.com/img/gfx/battle_blood_1.png');
  background-size: 120px 120px;
  background-repeat: no-repeat;
  height: 100px;
  padding-top: 35px;
  padding-left: 60px;
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.white};
  animation: ${bloodEffect} 3s;
`

export const StyledSkill = styled.div`
  position: relative;

  & > div {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.black};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.7em;
    padding: ${({ isDisabled }) => (isDisabled ? '2px 5px 2px 5px' : null)};
    opacity: 0.4;
  }
`

export const StyledLeaveButton = styled.span`
  float: right;
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export const StyledTimer = styled.div`
  text-align: center;
  margin: 0 30% 0;
`
