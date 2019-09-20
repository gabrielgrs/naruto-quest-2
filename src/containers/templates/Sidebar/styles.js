import styled from 'styled-components'

export const StyledSidebar = styled.div`
  margin-top: ${({ theme }) => theme.spaces.md};
  padding: ${({ theme }) => theme.spaces.sm} 0px
    ${({ theme }) => theme.spaces.sm} 0px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);

  & div {
    text-align: center;
  }

  & img {
    border-radius: 10px;
    width: 90%;
  }
`

export const StyledSidebarItem = styled.div`
  cursor: pointer;
  opacity: 0.8;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`
