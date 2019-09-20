import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 80px;
  margin-top: 50px;
  padding: 30px;
  width: 50%;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  border-left: 5px solid ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 720px) {
    padding: 20px 5px 20px 5px;
    width: 95%;
  }
`
export const StyledConductCode = styled.div`
  height: 300px;
  padding: 10px;
  overflow: auto;
`

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 3px;
  color: #3f3d3c;
  font-size: 2.5em;
  font-weight: 900;
  line-height: 1;
  margin: 10px 0px 10px 0px;
`
