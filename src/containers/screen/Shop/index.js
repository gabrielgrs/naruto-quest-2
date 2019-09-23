import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Page,
  Image,
  Tooltip,
  Button,
  Col,
  Row,
  TabWrapper,
  TabContent
} from '../../../components'
import { buyItem } from '../../../redux/characters'
import { getAll } from '../../../redux/items'
import { getAll as getAllequipments } from '../../../redux/equipments'
import { getUsageType } from './helpers'

export default () => {
  const [selectedItem, setSelectedItem] = useState(undefined)
  const [currentGold, setCurrentGold] = useState(0)
  const dispatch = useDispatch()
  const { selectedCharacter, itemsList, equipmentsList } = useSelector(
    ({ user, items, equipments }) => {
      return {
        ...user,
        ...items,
        ...equipments
      }
    }
  )

  useEffect(() => {
    setCurrentGold(selectedCharacter.gold)
  }, [selectedCharacter.gold])

  useEffect(() => {
    if (itemsList && !itemsList.length) dispatch(getAll())
  }, [dispatch, itemsList])

  useEffect(() => {
    if (equipmentsList && !equipmentsList.length) dispatch(getAllequipments())
  }, [dispatch, equipmentsList])

  const onBuyItem = () => {
    if (currentGold > 0) {
      setSelectedItem(undefined)
      dispatch(buyItem(selectedCharacter._id, selectedItem, 1))
    }
  }

  const renderItemTooltip = ({ name, price, lifeRecovery, manaRecovery }) => {
    return (
      <div style={{ letterSpacing: '1px' }}>
        <b>{name}</b>
        <div>
          <b>Preço: </b>
          {price}
        </div>
        <div>
          <b>Recuperaçãp de Vida: </b>
          {lifeRecovery}
        </div>
        <div>
          <b>Rcuperação de Mana: </b>
          {manaRecovery}
        </div>
      </div>
    )
  }

  const renderEquipmentTooltip = equipment => {
    const { name, price, value, usageType } = equipment

    return (
      <div style={{ letterSpacing: '1px' }}>
        <b>{name}</b>
        <div>
          <b>Tipo: </b>
          {getUsageType(usageType).name}
        </div>
        <div>
          <b>Aumenta: </b>
          {value}
          {` de ${getUsageType(usageType).increase}`}
        </div>
        <div>
          <b>Preço: </b>
          {price}
        </div>
      </div>
    )
  }

  return (
    <Page
      title="Loja"
      description="Compre itens para seu personagem"
      returnPath="/village"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Madara.png"
    >
      <Row>
        <TabWrapper onChangeTab={() => setSelectedItem(undefined)}>
          <TabContent title="Itens">
            {itemsList &&
              itemsList.map(
                ({ _id, image, price, name, lifeRecovery, manaRecovery }) => (
                  <Col key={_id} sm={1}>
                    <Tooltip
                      html={renderItemTooltip({
                        price,
                        name,
                        lifeRecovery,
                        manaRecovery
                      })}
                    >
                      <Image
                        isDisabled={!selectedItem || _id !== selectedItem._id}
                        key={_id}
                        canBeBlocked={
                          selectedCharacter.gold &&
                          selectedCharacter.gold < price
                        }
                        onClick={() =>
                          setSelectedItem({ _id, price, type: 'item' })
                        }
                        src={image}
                      />
                    </Tooltip>
                  </Col>
                )
              )}
          </TabContent>
          <TabContent title="Armas">
            {equipmentsList &&
              equipmentsList.map(e => {
                const { _id, price } = e
                return (
                  e.usageType === 'weapon' && (
                    <Col key={e._id} sm={1}>
                      <Tooltip html={renderEquipmentTooltip(e)}>
                        <Image
                          isDisabled={
                            !selectedItem || e._id !== selectedItem._id
                          }
                          canBeBlocked={
                            selectedCharacter.gold &&
                            selectedCharacter.gold < price
                          }
                          onClick={() =>
                            setSelectedItem({ _id, price, type: 'equipment' })
                          }
                          src={e.image}
                        />
                      </Tooltip>
                    </Col>
                  )
                )
              })}
          </TabContent>
          <TabContent title="Equipamentos">
            {equipmentsList &&
              equipmentsList.map(e => {
                const { _id, price } = e
                return (
                  e.usageType !== 'weapon' && (
                    <Col key={e._id} sm={1}>
                      <Tooltip html={renderEquipmentTooltip(e)}>
                        <Image
                          isDisabled={
                            !selectedItem || e._id !== selectedItem._id
                          }
                          canBeBlocked={
                            selectedCharacter.gold &&
                            selectedCharacter.gold < price
                          }
                          onClick={() =>
                            setSelectedItem({ _id, price, type: 'equipment' })
                          }
                          src={e.image}
                        />
                      </Tooltip>
                    </Col>
                  )
                )
              })}
          </TabContent>
        </TabWrapper>
      </Row>
      <Row>
        <Col sm={12}>
          <Button isDisabled={!selectedItem} onClick={() => onBuyItem()}>
            Comprar
          </Button>
        </Col>
      </Row>
    </Page>
  )
}
