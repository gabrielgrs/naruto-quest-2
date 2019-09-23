import React from 'react'
import { Row } from '../../components'
import labels from '../../config/labels'
import texts from '../../helpers/texts'

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
        {texts.training.taijutsu.tooltip[language]}
      </Row>
      <Row>
        <b>{labels.intelligence.name}: </b>
        {texts.training.ninjutsu.tooltip[language]}
      </Row>
      <Row>
        <b>{labels.vitality.name}: </b>
        {texts.training.genjutsu.tooltip[language]}
      </Row>
    </Row>
  )
}
