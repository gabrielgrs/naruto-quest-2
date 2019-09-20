import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Page, Container, Button } from '../../../components'
import { listOfHelpers } from './helpers'

const StyledMessage = styled.div`
  display: flex;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 2px;
`

export default () => {
  // const [expandedSections, setExpandedSections] = useState([])
  const { isAuthenticated } = useSelector(({ user }) => {
    return {
      isAuthenticated: user.isAuthenticated
    }
  })

  return (
    <Page title="Tutorial" description="Básicos sobre o jogo">
      <Container>
        <StyledMessage>Jogo em fase Alpha</StyledMessage>
        {listOfHelpers({ isAuthenticated }).map(h => {
          if (h.canShow === undefined) {
            return (
              <div>
                - <b>{h.title}</b>: {h.description}
                {h.childs &&
                  h.childs.map(c => (
                    <div style={{ marginLeft: '20px' }}>
                      - <b>{c.title}</b>: {c.description}
                    </div>
                  ))}
              </div>
            )
          }

          if (!!h.canShow) {
            return (
              <div>
                - <b>{h.title}</b>: {h.description}
                {h.childs &&
                  h.childs.map(c => (
                    <div style={{ marginLeft: '20px' }}>
                      - <b>{c.title}</b>: {c.description}
                    </div>
                  ))}
              </div>
            )
          }

          return null
        })}
        <Button>Suporte</Button>
      </Container>
    </Page>
  )
}
