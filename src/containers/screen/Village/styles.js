import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 100%;
  opacity: 0.5;
  cursor: pointer;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  img {
    margin: 0 auto;
    width: 100%;
  }

  &:hover {
    opacity: 1;
    transition: opacity 1s ease-out;
    -moz-transition: opacity 1s ease-out;
    -webkit-transition: opacity 1s ease-out;
    -o-transition: opacity 1s ease-out;
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
`

// export const StyledCardTitle = styled.div`
//   margin-left: 20px;
//   font-size: 1.3em;
//   font-weight: 600;
//   letter-spacing: 1px;
// `
