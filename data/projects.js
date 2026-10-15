// Fonte única dos projetos e das coleções. Compatível com Nuxt 2 / JavaScript.
export const projects = [
  {
    id: 'projeto-galeria-bootstrap',
    title: 'Galeria com Bootstrap',

    type: 'curso',
    source: 'web-moderno',
    featured: false,

    category: 'Interface Web',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Bootstrap',

    icon: 'logos:bootstrap',
    image: '/images/projetos/galeria-bootstrap.png',

    shortDescription:
      'Projeto prático de construção de uma interface de galeria utilizando Bootstrap.',

    description:
      'Atividade desenvolvida durante o módulo de Bootstrap do curso Web Moderno, voltada à construção de uma interface de galeria. O projeto permite apresentar a aplicação de recursos de estilização e organização visual em uma página web.',

    technologies: [
      'Bootstrap',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Ver galeria',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/BOOTSTRAP/projeto-galeria'
  },
  {
    id: 'calculadora-vue',
    featured: false,
    title: 'Calculadora com Vue.js',
    type: 'curso',
    source: 'web-moderno',
    origin: 'Web Moderno · Cod3r',
    primaryTechnology: 'Vue.js 2',
    shortDescription: 'Calculadora interativa com componentes reutilizáveis e lógica de operações matemáticas básicas.',
    category: 'Aplicação Web',
    status: 'Concluído',
    icon: 'logos:vue',
    image: '/images/projetos/vue/calculadora.png',

    description:
      'Calculadora interativa desenvolvida com Vue.js, utilizando componentes reutilizáveis para o visor e os botões. O projeto explora comunicação entre componentes, manipulação de eventos e implementação da lógica de operações matemáticas básicas.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Ver demonstração',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/VUEJS/calculator'
  },
  {
    id: 'monty-hall',
    source: 'web-moderno',
    featured: false,
    title: 'Monty Hall',
    primaryTechnology: 'Vue.js 2',
    shortDescription: 'Jogo interativo das três portas que aplica componentização e lógica de programação.',
    type: 'curso',
    category: 'Jogo Interativo',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    icon: 'material-symbols:casino-outline-rounded',
    image: '/images/projetos/vue/monty-hall.png',

    description:
      'Jogo interativo desenvolvido com Vue.js, inspirado no problema de probabilidade de Monty Hall. O projeto explora componentização, gerenciamento de estado, renderização dinâmica e lógica de programação para representar a interação do jogador com as portas e a identificação do prêmio.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Jogar',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/VUEJS/montyhall'
  },
  {
    id: 'qr-code-generator',
    source: 'web-moderno',
    featured: false,
    title: 'Gerador de QR Code',
    primaryTechnology: 'Vue.js 2',
    shortDescription: 'Aplicação que transforma textos e endereços de sites em QR Codes dinamicamente.',
    type: 'curso',
    category: 'Aplicação Web',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    icon: 'material-symbols:qr-code-2-rounded',
    image: '/images/projetos/vue/gerador-qr-code.png',

    description:
      'Aplicação web desenvolvida com Vue.js para transformar textos e endereços de sites em QR Codes. O projeto explora entrada de dados, vinculação reativa e geração dinâmica de códigos visuais, aplicando conceitos fundamentais do desenvolvimento de interfaces interativas.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Gerar QR Code',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/VUEJS/qrcode'
  },
  {
    id: 'sales',
    source: 'web-moderno',
    featured: false,
    title: 'Painel de Vendas',
    primaryTechnology: 'Vue.js 2',
    shortDescription: 'Interface Vue.js para organização e apresentação de informações comerciais.',
    type: 'curso',
    category: 'Dashboard',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    icon: 'material-symbols:monitoring-rounded',
    image: '/images/projetos/vue/painel-vendas.png',

    description:
      'Projeto de interface para apresentação de informações comerciais, desenvolvido durante o curso Web Moderno. A aplicação utiliza Vue.js para explorar a organização de componentes e a estruturação de uma interface voltada à visualização de dados de vendas.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Ver painel',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/VUEJS/sales'
  },
  {
    id: 'calculadora-react',
    title: 'Calculadora com React',
    type: 'curso',
    source: 'web-moderno',
    featured: false,
    origin: 'Web Moderno · Cod3r',
    primaryTechnology: 'React',
    shortDescription: 'Calculadora interativa desenvolvida com React.',
    category: 'Aplicação Web',
    status: 'Concluído',
    icon: 'logos:react',
    image: '/images/projetos/react/calculadora.png',
    description: 'Projeto prático de calculadora desenvolvido durante o curso Web Moderno, utilizando React para construir uma interface interativa.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    demoLabel: 'Abrir calculadora',
    demoUrl: '',
    repositoryUrl: 'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/REACT/calculadora'
  },
  {
    id: 'knowledge',
    title: 'Knowledge — Base de Conhecimento',

    type: 'curso',
    source: 'web-moderno',
    featured: true,

    category: 'Aplicação Full Stack',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Full Stack',

    icon: 'material-symbols:menu-book-rounded',
    image: '/images/projetos/knowledge-vue.png',

    shortDescription:
      'Aplicação Full Stack que integra frontend e backend em uma plataforma de gerenciamento de conhecimento.',

    description:
      'Projeto integrador desenvolvido durante o curso Web Moderno, reunindo os conhecimentos adquiridos na construção de uma aplicação completa. O Knowledge contempla o desenvolvimento de um frontend e de um backend, permitindo explorar a integração entre a interface da aplicação e sua camada de servidor.',

    technologies: [
      'Frontend',
      'Backend',
      'JavaScript',
      'Full Stack'
    ],

    demoLabel: 'Acessar aplicação',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/knowledge/versao-inicial/frontend',

    backendRepositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/knowledge/versao-inicial/backend'
  },
  {
    id: 'crud-react',
    title: 'CRUD com React',

    type: 'curso',
    source: 'web-moderno',
    featured: true,

    category: 'Aplicação Full Stack',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'React',

    icon: 'logos:react',
    image: '/images/projetos/crud-react.png',

    shortDescription:
      'Aplicação de gerenciamento de usuários com React, integrando frontend e backend para operações CRUD.',

    description:
      'Projeto prático desenvolvido durante o curso Web Moderno, com frontend em React e backend separado. A aplicação explora a integração entre interface e servidor por meio das operações fundamentais de um CRUD: cadastrar, consultar, atualizar e excluir registros de usuários.',

    technologies: [
      'React',
      'JavaScript',
      'Frontend',
      'Backend',
      'CRUD'
    ],

    demoLabel: 'Acessar aplicação',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/REACT/crud/frontend',

    backendRepositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/REACT/crud/backend'
  },
  {
    id: 'crud-angular',
    title: 'CRUD com Angular',

    type: 'curso',
    source: 'web-moderno',
    featured: true,

    category: 'Aplicação Full Stack',
    origin: 'Web Moderno · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Angular',

    icon: 'logos:angular-icon',
    image: '/images/projetos/crud-angular.png',

    shortDescription:
      'Aplicação de gerenciamento de registros com Angular, integrando uma interface administrativa a um backend.',

    description:
      'Projeto prático desenvolvido durante o curso Web Moderno, com frontend em Angular e backend separado. A aplicação aborda a construção de uma interface administrativa e a integração com a camada de dados para realizar as operações fundamentais de um CRUD: cadastrar, consultar, atualizar e excluir registros.',

    technologies: [
      'Angular',
      'TypeScript',
      'Frontend',
      'Backend',
      'CRUD'
    ],

    demoLabel: 'Acessar aplicação',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/ANGULAR/crud/frontend',

    backendRepositoryUrl:
      'https://github.com/bruno-b-neves/curso-web-morderno/tree/master/ANGULAR/crud/backend'
  },

  // Projetos VUE 2 - Guia definitivo
  {
    id: 'matador-de-monstros',
    title: 'Matador de Monstros',

    type: 'curso',
    source: 'vue-2',
    featured: false,

    category: 'Jogo Interativo',
    origin: 'Vue.js 2 · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Vue.js 2',

    icon: 'mdi:sword-cross',
    image: '/images/projetos/matador-de-monstros.png',

    shortDescription:
      'Jogo de batalha desenvolvido com Vue.js, explorando interatividade e atualização dinâmica da interface.',

    description:
      'Projeto prático desenvolvido durante o curso de Vue.js 2 da Cod3r. O Matador de Monstros apresenta uma experiência de batalha entre jogador e monstro, permitindo exercitar conceitos de reatividade, manipulação de eventos, renderização condicional e atualização dinâmica dos elementos da interface.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Jogar',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/projeto-01-monstro'
  },
  {
    id: 'gerenciador-de-tarefas-vue',
    title: 'Gerenciador de Tarefas',

    type: 'curso',
    source: 'vue-2',
    featured: false,

    category: 'Aplicação Web',
    origin: 'Vue.js 2 · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Vue.js 2',

    icon: 'mdi:checkbox-marked-circle-outline',
    image: '/images/projetos/gerenciador-de-tarefas.png',

    shortDescription:
      'Aplicação interativa para organizar tarefas e acompanhar atividades do dia a dia.',

    description:
      'Projeto prático desenvolvido durante o curso de Vue.js 2 da Cod3r, voltado à criação de uma interface de gerenciamento de tarefas. A atividade permite exercitar conceitos de reatividade, manipulação de eventos, renderização dinâmica e organização da interface em uma aplicação interativa.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Ver aplicação',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/projeto-02-tarefas'
  },
  {
    id: 'stock-trader-vue',
    title: 'Stock Trader',

    type: 'curso',
    source: 'vue-2',
    featured: false,

    category: 'Simulador Financeiro',
    origin: 'Vue.js 2 · Cod3r',
    status: 'Em revisão',

    primaryTechnology: 'Vue.js 2',

    icon: 'mdi:chart-line',
    image: '/images/projetos/stock-trader.png',

    shortDescription:
      'Simulador de negociação de ações com acompanhamento de saldo e carteira de investimentos.',

    description:
      'Projeto prático do curso Vue.js 2 da Cod3r, voltado à construção de um simulador de negociação de ações. A proposta envolve operações fictícias de compra e venda, acompanhamento da carteira e atualização dinâmica das informações financeiras, permitindo exercitar conceitos de reatividade, gerenciamento de estado e interação com o usuário.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Abrir simulador',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/projeto-03-acoes/stock-trader'
  },
  {
    id: 'monty-hall-curso-vue2',
    title: 'Monty Hall — Vue.js 2',

    type: 'curso',
    source: 'vue-2',
    featured: false,

    category: 'Jogo Interativo',
    origin: 'Vue.js 2 · Cod3r',
    status: 'Concluído',

    primaryTechnology: 'Vue.js 2',

    icon: 'mdi:door',
    image: '/images/projetos/monty-hall-vue2.png',

    shortDescription:
      'Jogo interativo inspirado no problema de probabilidade de Monty Hall, utilizando portas e seleção dinâmica.',

    description:
      'Projeto prático desenvolvido durante o curso de Vue.js 2 da Cod3r, inspirado no problema matemático de Monty Hall. A aplicação apresenta uma experiência interativa baseada na escolha entre portas, explorando a construção de componentes visuais, manipulação de eventos e atualização reativa da interface.',

    technologies: [
      'Vue.js 2',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    demoLabel: 'Jogar Monty Hall',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/projeto-05-monty-hall'
  },

  // Projeto TodoList - Java + Spring Boot
  {
    id: 'todolist-api-spring-boot',
    title: 'TodoList API — Spring Boot',

    type: 'curso',
    source: 'rocketseat-java',
    featured: true,

    category: 'API REST · Backend',
    origin: 'Java com Spring Boot · Rocketseat',
    status: 'Concluído',

    primaryTechnology: 'Spring Boot',

    icon: 'logos:spring-icon',
    image: '/images/projetos/todolist-spring-boot.png',

    shortDescription:
      'Backend de gerenciamento de tarefas desenvolvido com Java e Spring Boot.',

    description:
      'Projeto desenvolvido durante o curso introdutório de Java com Spring Boot da Rocketseat. Consiste em uma API REST voltada ao gerenciamento de tarefas, permitindo aplicar conceitos fundamentais de desenvolvimento backend, organização de rotas HTTP e integração entre as camadas de uma aplicação.',

    technologies: [
      'Java',
      'Spring Boot',
      'API REST',
      'Maven'
    ],

    demoLabel: 'Ver API',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/todolist-course'
  },

  // Projetos acadêmicos da UNIP
  {
    id: 'banco-de-dados-relacional',
    title: 'Banco de Dados Relacional',

    type: 'academico',
    source: 'unip',
    featured: false,

    category: 'Atividade Acadêmica · Banco de Dados',
    origin: 'UNIP · Ciência da Computação',
    status: 'Concluído',

    primaryTechnology: 'SQL',

    icon: 'mdi:database-outline',
    image: '/images/projetos/banco-de-dados-relacional.png',

    shortDescription:
      'Estudos práticos sobre a estrutura e a utilização de bancos de dados relacionais.',

    description:
      'Repositório acadêmico desenvolvido no contexto da graduação em Ciência da Computação da UNIP, dedicado ao estudo de bancos de dados relacionais. O trabalho reúne atividades práticas relacionadas à organização e à manipulação de dados, contribuindo para o desenvolvimento dos fundamentos de persistência de informações.',

    technologies: [
      'Banco de Dados Relacional',
      'SQL'
    ],

    demoLabel: 'Ver repositório',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/Banco_de_Dados_Relacional'
  },
  {
    id: 'lpoo-java',
    title: 'Linguagem de Programação Orientada a Objetos com Java',
    type: 'academico',
    source: 'unip',
    featured: false,
    category: 'Atividade Acadêmica · Laboratório',
    origin: 'UNIP · Ciência da Computação',
    status: 'Concluído',

    primaryTechnology: 'Java',

    icon: 'mdi:language-java',
    image: '/images/projetos/lpoo-java.png',

    shortDescription:
      'Sete roteiros de laboratório dedicados à aplicação prática dos fundamentos da programação orientada a objetos com Java.',

    description:
      'Repositório acadêmico da disciplina de Linguagem de Programação Orientada a Objetos da UNIP, organizado em sete roteiros de laboratório. Reúne atividades práticas com Java voltadas ao estudo de abstração, encapsulamento, herança, polimorfismo, interfaces, classes abstratas, coleções e tratamento de exceções. O material documenta a evolução dos conhecimentos adquiridos durante a graduação em Ciência da Computação.',

    technologies: [
      'Java',
      'POO',
      'Collections',
      'Tratamento de Exceções'
    ],

    demoLabel: 'Ver roteiros',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/LPOO-Java'
  },
  {
    id: 'pratica-poo-java',
    title: 'Prática de Programação Orientada a Objetos com Java',

    type: 'academico',
    source: 'unip',
    featured: false,

    category: 'Projeto Acadêmico · Aplicação Desktop',
    origin: 'UNIP · Ciência da Computação',
    status: 'Em desenvolvimento',

    primaryTechnology: 'Java',

    icon: 'mdi:application-brackets-outline',
    image: '/images/projetos/pratica-poo-java.png',

    shortDescription:
      'Desenvolvimento de uma aplicação desktop com Java e interface gráfica construída utilizando JFrame.',

    description:
      'Projeto acadêmico desenvolvido na disciplina de Prática de Programação Orientada a Objetos com Java, da UNIP. O trabalho consiste na construção de um software desktop, aplicando os fundamentos da orientação a objetos e utilizando Java Swing, por meio de JFrame, para desenvolver a interface gráfica da aplicação.',

    technologies: [
      'Java',
      'Java Swing',
      'JFrame',
      'Programação Orientada a Objetos'
    ],

    demoLabel: 'Ver projeto',
    demoUrl: '',

    repositoryUrl:
      'https://github.com/bruno-b-neves/pratica-programacao-orientada-objetos'
  },
]

export const collections = [
  {
    slug: 'web-moderno',
    title: 'Web Moderno Completo',
    institution: 'Cod3r',
    icon: 'mdi:language-javascript',
    description: 'Exercícios e aplicações organizados por tecnologia, desenvolvidos durante o curso.',
    repositoryUrl: 'https://github.com/bruno-b-neves/curso-web-morderno'
  },
  {
    slug: 'vue-2',
    title: 'Vue.js 2 — O Guia Completo',
    institution: 'Cod3r',
    icon: 'logos:vue',
    description: 'Atividades e projetos práticos da formação em Vue.js 2.',
    repositoryUrl: ''
  },
  {
    slug: 'unip',
    title: 'Ciência da Computação',
    institution: 'UNIP',
    icon: 'material-symbols:school-outline-rounded',
    description: 'Atividades de laboratório e projetos acadêmicos organizados por disciplina.',
    repositoryUrl: ''
  },
]
