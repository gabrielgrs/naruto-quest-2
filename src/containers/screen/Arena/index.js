import React from 'react'

import { Page } from '../../../components'

export default () => (
  <Page title="Areana" description="Batalhe contra outros jogadores">
    {' '}
    <ul>
      <li>
        <h3>Limites de Batalhas</h3>
      </li>
      <li>Jogadores Normais</li>
      <li>Jogadores VIPs</li>
    </ul>
    <ul>
      <li>
        <h3>Estado Atual</h3>
      </li>
      <li>Batalhas Realizadas / Total de Batalhas</li>
    </ul>
    <ul>
      <li>
        <h3>Botão para Batalhar</h3>
      </li>
    </ul>{' '}
  </Page>
)
