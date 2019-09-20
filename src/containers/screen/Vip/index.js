import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  Page,
  Container,
  Button,
  Row,
  Col,
  TextField
} from '../../../components'
import {
  resetAttributes,
  resetJutsus,
  changeName,
  changeVillage,
  addCharacterSlot,
  buyRyous,
  recoveryStamina,
  recoveryStatus
} from '../../../redux/vip'
import Villages from '../../../components/villages'
import { getVillage } from '../../../helpers/villages'

const StyledButton = styled(Button)`
  margin-right: 10px;
`

export default () => {
  const [dispatchIsActive, setDispatchIsActive] = useState(false)
  const [currentValue, setCurrentValue] = useState(undefined)
  const [action, setAction] = useState(undefined)
  const [vipFormIsOpen, setVipFormIsOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(undefined)
  const dispatch = useDispatch()

  const { isVip, vipCredits } = useSelector(({ user }) => {
    return {
      ...user
    }
  })

  useEffect(() => {
    console.log(isVip)
    return () => {
      // dispatch(clearState())
    }
  }, [dispatch, isVip])

  useEffect(() => {}, [])

  const renderNotVipScreen = () => (
    <div>
      <StyledButton onClick={() => setVipFormIsOpen(!vipFormIsOpen)}>
        Adquirir VIP
      </StyledButton>
      {vipFormIsOpen && renderFormToBeVIP()}
    </div>
  )

  const vipOptions = [
    {
      name: 'Genin',
      cost: 10,
      credits: 10
    },
    {
      name: 'Chuunin',
      cost: 20,
      credits: 22
    },
    {
      name: 'Jounin',
      cost: 30,
      credits: 36
    },
    {
      name: 'ANBU',
      cost: 40,
      credits: 52
    },
    {
      name: 'Sannin',
      cost: 50,
      credits: 70
    },
    {
      name: 'Kage',
      cost: 100,
      credits: 150
    }
  ]

  const pagSeguroOptions = {
    Genin: 'https://pag.ae/7VfkQEnr2',
    Chuunin: 'https://pag.ae/7VfkRu2r6',
    Jounin: 'https://pag.ae/7VfkR-QNM',
    ANBU: 'https://pag.ae/7VfkTxDNH',
    Sanin: 'https://pag.ae/7VfkTAYpr',
    Kage: 'https://pag.ae/7VfkTDgM2'
  }

  const actionsList = [
    {
      name: 'Resetar Atributos',
      cost: 1,
      action: () => {
        setDispatchIsActive(true)
        dispatch(resetAttributes(() => setDispatchIsActive(false)))
      }
    },
    {
      name: 'Resetar Jutsus',
      cost: 1,
      action: () => {
        setDispatchIsActive(true)
        dispatch(resetJutsus(() => setDispatchIsActive(false)))
      }
    },
    {
      name: 'Alterar o nome',
      cost: 1,
      action: () => {
        setCurrentValue(undefined)
        setAction('changeName')
      }
    },
    {
      name: 'Mudar de Vila',
      cost: 1,
      action: () => {
        setCurrentValue(undefined)
        setAction('changeVillage')
      }
    },
    {
      name: 'Adicionar novo slot de Personagem',
      cost: 1,
      action: () => {
        setDispatchIsActive(true)
        dispatch(addCharacterSlot(() => setDispatchIsActive(false)))
      }
    },
    {
      name: 'Comprar Ryous',
      action: () => {
        setCurrentValue(undefined)
        setAction('buyRyous')
      }
    },
    {
      name: 'Recuperar Estamina',
      cost: 1,
      action: () => {
        setDispatchIsActive(true)
        dispatch(recoveryStamina(() => setDispatchIsActive(false)))
      }
    },
    {
      name: 'Recuperar Vida e Chakra',
      cost: 1,
      action: () => {
        setDispatchIsActive(true)
        dispatch(recoveryStatus(() => setDispatchIsActive(false)))
      }
    }
  ]

  const renderDataForm = () => {
    const planToPay = vipOptions.find(x => x.name === selectedPlan)
    return (
      <>
        <Container>
          Plano {planToPay.name} - {planToPay.credits} créditos por R${' '}
          {planToPay.cost}
        </Container>
        <a
          href={pagSeguroOptions[selectedPlan]}
          target="_blank"
          title="Pagar com PagSeguro"
          rel="noopener noreferrer"
        >
          <img
            src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif"
            alt="Pague com PagSeguro - é rápido, grátis e seguro!"
          />
        </a>
      </>
    )
  }

  const renderFormToBeVIP = () => {
    return (
      <>
        {
          <div>
            {vipOptions.map(v => (
              <StyledButton onClick={() => setSelectedPlan(v.name)}>
                <div>Plano {v.name}</div>
                <div>R$ {v.cost}</div>
                <div>Créditos {v.credits}</div>
              </StyledButton>
            ))}
          </div>
        }
        {!!selectedPlan && renderDataForm()}
      </>
    )
  }

  const getCost = cost => {
    if (!cost) return null

    if (cost === 1) return `- ${cost} crédito`

    return `- ${cost} créditos`
  }

  const renderVipScreen = () =>
    actionsList.map(a => (
      <div>
        <Button
          isDisabled={dispatchIsActive}
          fullWidth
          onClick={() => a.action()}
        >
          {a.name} {getCost(a.cost)}
        </Button>
      </div>
    ))

  const vipBeneficies = [
    'Resetar atributos',
    'Resetar jutsus',
    'Troca de nome',
    'Slot adicional de personagem',
    'Compra de Ryous',
    'Trocar de Vila',
    'Recuperação de Stamina',
    'Sala VIP (Hospital grátis'
  ]

  const ryousOptions = [
    {
      quantity: 1000,
      credits: 1
    },
    {
      quantity: 2000,
      credits: 2
    },
    {
      quantity: 3000,
      credits: 3
    },
    {
      quantity: 4000,
      credits: 4
    }
  ]

  const renderActionScreen = () => {
    if (!action) return null

    if (action === 'changeName') {
      return (
        <>
          <h3>Digite seu novo nome</h3>
          <TextField
            value={currentValue}
            onChange={({ target }) => setCurrentValue(target.value)}
            placeholder="Nome"
          />
          <Container>
            {currentValue ? (
              <div>
                Você irá mudar seu nome para <b>{currentValue}</b>
              </div>
            ) : (
              <div> Digite o nome </div>
            )}
          </Container>
          <Button
            isDisabled={!currentValue || dispatchIsActive}
            onClick={() => {
              setDispatchIsActive(true)
              dispatch(
                changeName(currentValue, () => setDispatchIsActive(false))
              )
            }}
          >
            Alterar Nome
          </Button>
        </>
      )
    }

    if (action === 'changeVillage') {
      return (
        <>
          <h3>Escolha sua nova vila</h3>
          <Villages onChange={e => setCurrentValue(e)} />
          <Container>
            {currentValue ? (
              <div>
                Você irá mudar para a vila da
                <b> {getVillage(currentValue).label}</b>
              </div>
            ) : (
              <div>Escolha a vila</div>
            )}
          </Container>
          <Button
            isDisabled={!currentValue || dispatchIsActive}
            onClick={() => {
              setDispatchIsActive(true)
              dispatch(
                changeVillage(currentValue, () => setDispatchIsActive(false))
              )
            }}
          >
            Alterar Vila
          </Button>
        </>
      )
    }

    if (action === 'buyRyous') {
      return (
        <>
          <h3>Escolha a quantidade de Ryous</h3>
          <Row>
            {ryousOptions.map(o => (
              <Button onClick={() => setCurrentValue(o.quantity)}>
                {`${o.quantity} Ryous por ${
                  o.credits > 1 ? 'Créditos' : 'Crédito'
                }`}
              </Button>
            ))}
          </Row>
          <Container>
            {currentValue ? (
              <div>
                Você irá comprar <b>{+currentValue} Ryous</b>
              </div>
            ) : (
              <div> Escolha a quantidade </div>
            )}
          </Container>
          <Button
            isDisabled={!currentValue || dispatchIsActive}
            onClick={() => {
              setDispatchIsActive(true)
              dispatch(
                buyRyous(+currentValue, () => setDispatchIsActive(false))
              )
            }}
          >
            Comprar
          </Button>
        </>
      )
    }

    return null
  }

  return (
    <Page
      title="VIP"
      description="Sala VIP para você desfrutar dos benefícios!"
    >
      <div>
        <b>Créditos: </b> {vipCredits || 0}
      </div>
      <Container>
        <h3>Benefícios VIP</h3>
        {vipBeneficies.map((b, index) => (
          <div key={index}>{b}</div>
        ))}
      </Container>
      <Row>
        <Col sm={6}>{renderVipScreen()}</Col>
        <Col sm={6}>{renderNotVipScreen()}</Col>
      </Row>
      <Row>
        <Container>{renderActionScreen()}</Container>
      </Row>
    </Page>
  )
}
