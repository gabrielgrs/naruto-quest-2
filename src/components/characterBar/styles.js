import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledWrapper = styled.div`
  transition: 1s;
  font-size: 1.2em;
  background-color: ${({ theme }) => 'rgba(50, 50, 50, 0.5)'};
  margin-top: ${({ theme }) => theme.spaces.md};
  border-radius: 5px;

  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 720px) {
    margin-top: ${({ theme }) => theme.spaces.lg};
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.5);
  }

  & > img {
    float: left;
    width: 100%;
  }
`

export const StyledName = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary}, rgba(255, 255, 255, 0.1))`};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1px;
  font-size: 1.1em;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.sm};

  & > div {
    font-size: 0.8em;
  }
`

export const StyledActionButtons = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    flex-direction: row;
    display: flex;

    & > a {
      width: 33%;
    }
  }
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  border: none;
  font-size: 0.7em;
  padding: 2px 0 2px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 2px 3px 2px 3px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;

  &:hover {
    /* -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.5); */
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 720px) {
    font-size: 0.7em;
  }
`

export const StyledAvatar = styled.div`
  position: relative;

  & > div {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: black;
    text-align: center;
    color: white;
    font-size: 1em;
    padding: 2px 10px 2px 10px;
    opacity: 0.7;
  }
`

export const StyledGold = styled.div`
  text-align: center;
  font-size: 0.8em;
  color: gold;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 5px 0 5px;
`
