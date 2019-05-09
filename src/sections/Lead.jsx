import React from 'react'
import { Section, Container } from '../components/layout'

import './Lead.scss'

const Lead = () => (
  <Section classname='lead'>
    <Container size='small'>
      <h1>O FRONT IN SM reúne Desenvolvimento, Design e UX de forma única</h1>
      <p>
        Após duas edições históricas em Santa Maria/RS, está de volta em 2019
        mais uma oportunidade de você se atualizar no que há de mais novo no
        universo front-end e determinar os seus próximos passos no mercado.
      </p>
      <p>
        Atualizar-se é antecipar-se. É prever tendências e se prevenir de
        urgências. É uma exigência, no cenário da tecnologia. Não perca a chance
        de aprimorar seus conhecimentos e ver de perto cases da área do
        front-end sem sair de Santa Maria/RS.
      </p>
      <p>
        Faça parte do maior evento focado em web front-end do interior do RS e
        ajudar a fortalecer o mercado de desenvolvimento Web!
      </p>
      <p>
        <a
          href='http://bit.ly/ingressosfrontinsm'
          target='_blank'
          rel='noopener noreferrer'
        >
          Garanta seu lugar!
        </a>{' '}
        Os ingressos são limitados.
      </p>
    </Container>
  </Section>
)

export default Lead
