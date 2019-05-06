import React from 'react'
import { Column, Container, Section } from '../components/layout'

import './Features.scss'

const Features = () => (
  <Section className='features'>
    <Container size='small'>
      <Column size={100}>
        <h2>Tecnologia</h2>
        <p>
          Trabalhar com Front-end não é somente "programar". Nesse evento você
          vai ter um aprendizado completo sobre todas as atividades e
          tecnologias que envolvem a área, como SEO, posicionamento,
          acessibilidade, etc, para que você encontre outras aplicações para o
          que mais sabe e ama fazer. Através das palestras, você vai aprender
          novos conhecimentos, direto do campo de batalha, com profissionais que
          estão no dia-a-dia à frente das tecnologias mais atuais do nosso
          mercado.
        </p>
      </Column>
      <Column size={100}>
        <h2>Desenvolvimento</h2>
        <p>
          Nesse evento você vai assistir palestras sobre: (colocar tópicos dos
          temas das palestras) Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Soluta commodi quasi ab beatae hic sed, nesciunt,
          excepturi ullam nostrum est vero tempora? Modi nostrum culpa sed nihil
          veritatis ea aliquam.
        </p>
      </Column>
      <Column size={100}>
        <h2>Networking</h2>
        <p>
          O FRONT-IN é o ambiente perfeito para você compartilhar práticas,
          dúvidas e aprender com outros profissionais do mercado. Vamos reunir
          alunos, professores, profissionais e entusiastas e até mesmo
          empreendedores. O evento estará cheio de desenvolvedores esperando uma
          oportunidade de fazer a diferença!
        </p>
      </Column>
    </Container>
  </Section>
)

export default Features
