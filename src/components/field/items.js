import React from 'react'
import { Col, Tooltip, Image } from '../'

export default ({
  items,
  stats,
  attributes,
  setSelectedItemToUse,
  onUseItem,
  selectedItemToUse
}) => {
  const renderItemTooltip = (life, mana) => {
    if (!!life && !mana)
      return (
        <div>
          <b>Vida:</b> {life}
        </div>
      )

    if (!life && !!mana)
      return (
        <div>
          <b>Chakra:</b> {mana}
        </div>
      )

    return (
      <>
        <div>
          <b>Vida:</b> {life}
        </div>
        <div>
          <b>Chakra:</b> {mana}
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Meus Itens</h3>
      <div>
        {items.map(item => {
          const isDisabled =
            (attributes.life >= stats.maxLife &&
              attributes.mana >= stats.maxMana) ||
            +item.code !== selectedItemToUse

          return (
            <Col key={item._id} sm={2}>
              <Tooltip
                html={renderItemTooltip(item.lifeRecovery, item.manaRecovery)}
              >
                <Image
                  isDisabled={isDisabled}
                  width="30"
                  src={item.image}
                  onClick={() =>
                    isDisabled
                      ? setSelectedItemToUse(item.code)
                      : onUseItem(item)
                  }
                />
              </Tooltip>
            </Col>
          )
        })}
      </div>
    </>
  )
}
