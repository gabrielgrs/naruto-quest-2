import React from 'react'
import { Row } from '../../components'
import labels from '../../config/labels'

export default ({ character, language }) => {
  return (
    <Row>
      <Row>
        <b>Name:</b> {character.name}
      </Row>
      <Row>
        <b>{labels.level}:</b> {character.level}
      </Row>
      <Row>
        <b>{labels.life}:</b> {character.stats.maxLife}
      </Row>
      <Row>
        <b>{labels.mana}:</b> {character.stats.maxMana}
      </Row>
      <Row>
        <b>{labels.attack.name}: </b>
        {character.attributes.attack}
      </Row>
      <Row>
        <b>{labels.intelligence.name}: </b>
        {character.attributes.intelligence}
      </Row>
      <Row>
        <b>{labels.vitality.name}: </b>
        {character.attributes.vitality}
      </Row>
    </Row>
  )
}
