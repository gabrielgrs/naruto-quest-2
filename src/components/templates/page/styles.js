import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;

  margin-top: ${({ theme }) => theme.spaces.md};
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  position: relative;
`

export const StyledCharacter = styled.img`
  position: absolute;
  margin-top: -100px;
  height: 200px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const StyledTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 3px;
  color: #3f3d3c;
  font-size: 2.5em;
  font-weight: 900;
  line-height: 1;
  margin: 10px 0px 10px 0px;
`

export const StyledDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 3px;
  color: #717171;
  font-size: 0.8em;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  margin-bottom: 10px;
  text-transform: uppercase;
`

export const StyledContent = styled.div`
  padding: 20px;

  @media only screen and (max-width: 720px) {
    padding: 0px;
  }
`

export const StyledReturnButton = styled.div`
  color: #000000;
  padding: 15px 10px 0 0;
`

export const StyledLoadingPage = styled.div`
  font-size: 2em;
  margin: 0 auto;

  width: 200px;
  height: 200px;
  margin: 150px auto;
  /*border: 2px solid black;*/
  border-radius: 50%;
  background-color: darkred;
  background-image: url('https://goo.gl/3ooJyq');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  animation: round 2300ms linear 0ms infinite normal;

  @keyframes round {
    0% {
      transform: rotate(0deg) scale(1);
      background-image: url('https://goo.gl/3ooJyq');
      /*box-shadow: 5px 5px 150px 0px black;
*/
    }

    50% {
      transform: rotate(360deg) scale(1);
      background-image: url('https://goo.gl/25rE7o');
      /*box-shadow: 5px 5px 100px 50px black;
*/
    }

    100% {
      transform: rotate(0deg) scale(1);
      background-image: url('https://goo.gl/3ooJyq');
      /*box-shadow: 5px 5px 150px 0px black;
*/
    }
  }
`

export const StyledHeader = styled.div``
