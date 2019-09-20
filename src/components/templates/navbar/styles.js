import styled from 'styled-components'

export const StyledNavBar = styled.nav`
  font-size: 1.2em;
  padding: 5px 24px 5px 24px;
  background-color: ${({ theme }) => theme.colors.navbar};
  outline: none;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 6px 0px rgba(255, 255, 255, 0.2);
`

export const StyledNavItem = styled.div`
  cursor: pointer;
  text-align: center;
  margin: ${({ isBrand }) =>
    isBrand ? '0px 10px 0px 10px' : '0px 10px 0px 10px'};

  opacity: 0.8;

  font-weight: ${({ isBrand }) => (isBrand ? '600' : 'inherit')};

  &:hover {
    opacity: 1;
  }

  & img {
    max-width: 30px;
  }

  & a {
    font-size: 0.8em;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1px;
  }

  & div {
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 720px) {
    width: 100px;
    display: ${({ isToggle }) => (isToggle ? 'none' : null)};
  }

  @media only screen and (max-width: 720px) {
    padding: 10px 0px 10px 0px;
  }
`

export const StyledHamburger = styled.div`
  @media screen and (max-width: 719px) {
    position: fixed;
    cursor: pointer;
    right: 30px;
    top: 30px;
    transform: translate(-5%, -50%);
    z-index: 10;

    & div {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }
  }
`
