import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
// import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

const StyledLoader = styled(LoadingOverlay)`
  min-height: 100vh;
  /* padding: 20px; */
`

export default ({ loading, children }) => (
  <StyledLoader
    active={loading}
    // spinner={<RingLoader color="white" />}
    // spinner={() => {
    //   return <LoaderSpinner />
    // }}
    text=""
  >
    {children}
  </StyledLoader>
)
