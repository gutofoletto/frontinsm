const program = [
  {
    time: '8:00',
    kind: 'checkin',
    title: 'Check-in',
  },
  {
    time: '9:00',
    kind: 'talk',
    title: 'Abertura Oficial',
  },
  {
    time: '9:10',
    kind: 'talk',
    title: 'Um menino chamado JavaScripto',
    speaker: 'Juliana Negreiros',
    description:
      'Vamos fazer uma imersão na mente do javascripto e entender um pouco melhor o porquê de suas ações e, principalmente, como ter uma vida saudável com ele.',
  },
  {
    time: '9:50',
    kind: 'coffee',
    title: 'Coffee-break',
  },
  {
    time: '10:20',
    kind: 'talk',
    title: 'Tem um tipo no meu JavaScript',
    speaker: 'Matias Leidemer',
    description:
      'Com o advento das SPA (single page apps), o uso do Javascript não se limita apenas a validação de forms e chamadas ajax. Codificar regras de negócio complexas já faz parte do dia a dia de grande parte dos desenvolvedores JS. Mas, à medida que as linhas de código aumentam, como garantir que tudo está funcionando perfeitamente? Nesta talk falarei sobre tipagem estática em Javascript e como ela pode ajudar na diminuição de erros de runtime e na definição tipos específicos de negócio.',
  },
  {
    time: '11:00',
    kind: 'talk',
    title: 'CSS Animations under the hood',
    speaker: 'Rafael Dantas',
    description:
      'Tenho feito estudos profundos sobre animações com CSS e como o navegador trabalha para renderizar tudo na tela. Com uma linguagem simples e mais didática quero compartilhar minhas experiências e pretendo mostrar como o navegador entende as propriedades CSS que fazem as animações acontecerem, além disso vou falar do Composite Layer e Implicit Composite, a razão deles serem fundamentais e como isso tem impacto direto na performance das animações nos mais diferentes dispositivos. Quero também mostrar como fazer de uma maneira performática aproveitando o máximo dos navegadores, mas fazendo eles trabalharem menos, resultando em animações mais suaves e que rodam em dispositivos com menos poder computacional. Quero desmistificar as animações em CSS e mostrar que não é tão complicado e que é possível encontrar um equilíbrio entre sites/aplicações animadas e interativas com dispositivos menos potentes ou mais antigos. ',
  },
  {
    time: '12:00',
    kind: 'lunch',
    title: 'Almoço',
  },
  {
    time: '14:00',
    kind: 'talk',
    title: 'Primeiros passos com testes com Cypress',
    speaker: 'Thaiane Braga e Luine Gallois',
    description: `Uma das dores comuns em front é desenvolver testes para javascript. O Cypress é uma ferramenta que possibilita escrever testes unitários, integração e end-to-end de forma simples, rápida e legível`,
  },
  {
    time: '14:40',
    kind: 'talk',
    title: 'Design de Interfaces, entre a hibridez, os métodos e as práticas',
    speaker: 'Débora Gasparetto',
    description: `O design de interfaces é um campo interdisciplinar, que proporciona uma hibridez de profissionais, pesquisas, métodos e projetos. A proposta é abordar esse espaço comum por meio do método de projetação de interfaces 5I's, que parte do design centrado no usuário para proporcionar usabilidade, acessibilidade e adequadas experiências de usuário.`,
  },
  {
    time: '15:20',
    kind: 'talk',
    title: 'Estendendo CSS: uma intro a Houdini',
    speaker: 'Luiza Hagemann',
    description:
      'Uma talk expositiva sobre o novo conjunto de APIs do Houdini, mostrando um pouco da magia de finalmente poder interagir com a engine de renderização do browser.',
  },
  {
    time: '16:00',
    kind: 'coffee',
    title: 'Coffee-break',
  },
  {
    time: '16:30',
    kind: 'talk',
    title: 'Server Side Rendering @ globoplay',
    speaker: 'Isadora Possebon',
    description:
      'Uma talk que aborda os conceitos de Server Side Rendering vs Client Side Rendering. Vamos explorar esses pontos usando o Globoplay como caso de uso, explorando como funciona a arquitetura da famosa ferramenta de streaming de vídeos.',
  },
  {
    time: '17:10',
    kind: 'talk',
    title: 'Guia Prático para Desenvolver um Frontend Saudável',
    speaker: 'Igor Brandão',
    description:
      'O mundo todo sabe da genialidade e capacidade de improviso do povo brasileiro, e esse fato não é diferente com software - especialmente frontend - e isso é uma faca de dois gumes. Com orientação, resulta em soluções simples e elegantes; mas sem direcionamento, consolida aberrações difíceis de manter. A fim de complementar a saúde do desenvolvimento de frontend da galera, discuto nessa talk conceitos como padrões de projeto, técnicas comumente desprezadas e até mentalidades que trazem resultados positivos na prática e outros que possuem o efeito contrário (como over-engineering e code jealousy). Portanto e independente do nível técnico pessoal, chega mais que certamente há algo de produtivo para todos, de júnior a sênior.',
  },
  {
    time: '19:00',
    kind: 'happyhour',
    title: 'Happy Hour!',
  },
]

export default program
