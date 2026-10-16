// Conteúdo editorial por coleção. Não faz parte do array de aplicações.
// Os títulos e links correspondem a diretórios do repositório de estudos.
const repositoryUrl = 'https://github.com/bruno-b-neves/curso-web-morderno'
const moduleLink = (path, label = path) => ({
  label,
  url: `${repositoryUrl}/tree/master/${path.split('/').map(encodeURIComponent).join('/')}`
})

const webModernoStudies = {
  'web-moderno': [
    {
      id: 'javascript',
      title: 'JavaScript e ESNext',
      icon: 'ph:code-bold',
      description: 'Exercícios de JavaScript e recursos da linguagem organizados em módulos de estudo.',
      topics: ['JavaScript', 'ESNext'],
      modules: [moduleLink('JAVASCRIPT', 'JavaScript'), moduleLink('ESNext')]
    },
    {
      id: 'fundamentos-web',
      title: 'HTML, CSS e DOM',
      icon: 'ph:browser-bold',
      description: 'Estudos de estrutura de páginas, estilos e interação com os elementos do navegador.',
      topics: ['HTML', 'CSS', 'DOM'],
      modules: [moduleLink('HTML'), moduleLink('CSS'), moduleLink('DOM')]
    },
    {
      id: 'comunicacao-web',
      title: 'AJAX e jQuery',
      icon: 'ph:arrows-left-right-bold',
      description: 'Exercícios de comunicação no navegador e manipulação de interfaces com jQuery.',
      topics: ['AJAX', 'jQuery'],
      modules: [moduleLink('AJAX'), moduleLink('JQUERY', 'jQuery')]
    },
    {
      id: 'frameworks',
      title: 'Frameworks e interfaces',
      icon: 'ph:stack-bold',
      description: 'Módulos de Vue, React, Angular e Bootstrap. As aplicações desenvolvidas aparecem na galeria abaixo.',
      topics: ['Vue.js', 'React', 'Angular', 'Bootstrap'],
      modules: [moduleLink('VUEJS', 'Vue.js'), moduleLink('REACT', 'React'), moduleLink('ANGULAR/crud', 'Angular'), moduleLink('BOOTSTRAP', 'Bootstrap')]
    },
    {
      id: 'backend',
      title: 'Node.js e Express',
      icon: 'ph:terminal-window-bold',
      description: 'Estudos de JavaScript no servidor e desenvolvimento web com Express.',
      topics: ['Node.js', 'Express'],
      modules: [moduleLink('NODE', 'Node.js'), moduleLink('EXPRESS', 'Express')]
    },
    {
      id: 'bancos-de-dados',
      title: 'Bancos de dados',
      icon: 'ph:database-bold',
      description: 'Exercícios organizados em módulos de bancos relacionais e não relacionais.',
      topics: ['Relacionais', 'Não relacionais'],
      modules: [moduleLink('BANCO_RELACIONAL', 'Relacionais'), moduleLink('BANCO-NAO-RELACIONAL', 'Não relacionais')]
    },
    {
      id: 'ferramentas',
      title: 'Ferramentas de desenvolvimento',
      icon: 'ph:wrench-bold',
      description: 'Estudos de ferramentas para organizar e automatizar tarefas no desenvolvimento web.',
      topics: ['Gulp', 'Webpack'],
      modules: [moduleLink('GULP', 'Gulp'), moduleLink('WEBPACK', 'Webpack')]
    }
  ]
}


export const studiesByCollection = {
  ...webModernoStudies,
  'vue-2': [
  {
    "id": "fundamentos-vue",
    "title": "Fundamentos e reatividade",
    "description": "Introdução ao Vue 2, templates, eventos, propriedades reativas, instância Vue e renderização de listas e condicionais.",
    "icon": "ph:code-bold",
    "topics": [
      "Templates",
      "Reatividade",
      "Condicionais",
      "Listas"
    ],
    "modules": [
      {
        "label": "Introdução",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/introducao"
      },
      {
        "label": "DOM",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/dom"
      },
      {
        "label": "Instância Vue",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/instancia-vue"
      },
      {
        "label": "Condicionais e listas",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/condicionais-e-listas"
      }
    ]
  },
  {
    "id": "componentes",
    "title": "Componentes e comunicação",
    "description": "Estudos de componentes locais e globais e de comunicação entre componentes.",
    "icon": "ph:code-bold",
    "topics": [
      "Componentes",
      "Comunicação"
    ],
    "modules": [
      {
        "label": "Componentes",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/componentes"
      },
      {
        "label": "Comunicação",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/componentes-comunicacao"
      }
    ]
  },
  {
    "id": "componentes-avancados",
    "title": "Componentes avançados",
    "description": "Exercícios de slots e componentes dinâmicos, com desafios de aplicação desses recursos.",
    "icon": "ph:code-bold",
    "topics": [
      "Slots",
      "Componentes dinâmicos"
    ],
    "modules": [
      {
        "label": "Componentes avançados",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/componentes-avan%C3%A7ados"
      }
    ]
  },
  {
    "id": "formularios",
    "title": "Formulários",
    "description": "Exercícios e desafios dedicados à construção de formulários em Vue.",
    "icon": "ph:code-bold",
    "topics": [
      "Formulários",
      "Vue.js 2"
    ],
    "modules": [
      {
        "label": "Formulários",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/formularios"
      }
    ]
  },
  {
    "id": "reutilizacao",
    "title": "Diretivas, filtros e mixins",
    "description": "Módulos de diretivas, filtros e mixins no contexto dos estudos de Vue 2.",
    "icon": "ph:code-bold",
    "topics": [
      "Diretivas",
      "Filtros",
      "Mixins"
    ],
    "modules": [
      {
        "label": "Diretivas",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/diretivas"
      },
      {
        "label": "Filtros e mixins",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/filtros-mixins"
      }
    ]
  },
  {
    "id": "animacoes",
    "title": "Animações",
    "description": "Exercícios de animação de interfaces e exemplos de aplicação em quiz.",
    "icon": "ph:code-bold",
    "topics": [
      "Animações",
      "Interfaces"
    ],
    "modules": [
      {
        "label": "Animações",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/animacoes"
      }
    ]
  },
  {
    "id": "http-rotas",
    "title": "HTTP e navegação",
    "description": "Módulos dedicados a requisições HTTP e navegação por rotas.",
    "icon": "ph:code-bold",
    "topics": [
      "HTTP",
      "Rotas"
    ],
    "modules": [
      {
        "label": "HTTP",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/http"
      },
      {
        "label": "Rotas",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/rotas"
      }
    ]
  },
  {
    "id": "vuex",
    "title": "Gerenciamento de estado",
    "description": "Exercícios de gerenciamento de estado com Vuex.",
    "icon": "ph:code-bold",
    "topics": [
      "Vuex",
      "Estado"
    ],
    "modules": [
      {
        "label": "Vuex",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/vuex"
      }
    ]
  },
  {
    "id": "vue-cli",
    "title": "Estrutura e ferramentas",
    "description": "Criação de projetos, organização de arquivos e instalação de plugins com Vue CLI.",
    "icon": "ph:code-bold",
    "topics": [
      "Vue CLI",
      "Plugins",
      "npm"
    ],
    "modules": [
      {
        "label": "Vue CLI",
        "url": "https://github.com/bruno-b-neves/curso-de-vuejs/tree/main/vue-cli"
      }
    ]
  }
],
  'javascript-typescript': [
  {
    "id": "fundamentos-js",
    "title": "Variáveis e tipos",
    "description": "Exercícios de let, const, tipos primitivos e valores por referência.",
    "icon": "ph:code-bold",
    "topics": [
      "let",
      "const",
      "Tipos",
      "Referências"
    ],
    "modules": [
      {
        "label": "Variáveis",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula12%20-%20variaveis%20com%20let"
      },
      {
        "label": "Constantes",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula14%20-%20constantes%20com%20const"
      },
      {
        "label": "Tipos primitivos",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula19%20-%20tipos%20primitivos"
      },
      {
        "label": "Valores e referências",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula33%20-%20primitivo%20e%20referencia"
      }
    ]
  },
  {
    "id": "strings",
    "title": "Strings",
    "description": "Manipulação de textos e exercícios dedicados a strings.",
    "icon": "ph:code-bold",
    "topics": [
      "Strings",
      "Textos"
    ],
    "modules": [
      {
        "label": "Strings",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula24%20-%20Strings"
      },
      {
        "label": "Exercício de strings",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula25%20-%20exercicio%20com%20Strings"
      }
    ]
  },
  {
    "id": "numeros",
    "title": "Números e operações",
    "description": "Estudos de Number, Math e operadores aritméticos, de atribuição e incremento.",
    "icon": "ph:code-bold",
    "topics": [
      "Number",
      "Math",
      "Operadores"
    ],
    "modules": [
      {
        "label": "Operações",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula20%20-%20aritmeticos%20-%20atribuicao%20-%20incremento"
      },
      {
        "label": "Numbers",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula26%20-%20Numbers"
      },
      {
        "label": "Math",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula27%20-%20Math"
      },
      {
        "label": "Exercício numérico",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula28%20-%20exercicio%20numbers%20e%20math"
      }
    ]
  },
  {
    "id": "arrays-objetos",
    "title": "Arrays e objetos",
    "description": "Introdução a arrays e objetos, com exercício que reúne essas estruturas e funções.",
    "icon": "ph:code-bold",
    "topics": [
      "Arrays",
      "Objetos"
    ],
    "modules": [
      {
        "label": "Arrays",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula29%20-%20arrays"
      },
      {
        "label": "Objetos",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula32%20-%20Object"
      },
      {
        "label": "Exercício integrado",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula34%20-%20exercicios%20func_array_object"
      }
    ]
  },
  {
    "id": "funcoes-navegador",
    "title": "Funções e interação",
    "description": "Estudos introdutórios de funções e interação no navegador com alert, confirm e prompt.",
    "icon": "ph:code-bold",
    "topics": [
      "Funções",
      "alert",
      "confirm",
      "prompt"
    ],
    "modules": [
      {
        "label": "Funções",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula31%20-%20function"
      },
      {
        "label": "Interação no navegador",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula21%20-%20exercicio%20-%20alert%20-%20confirm%20-%20prompt"
      }
    ]
  },
  {
    "id": "logica",
    "title": "Comparação e lógica",
    "description": "Exercícios de operadores de comparação, operadores lógicos e avaliação de curto-circuito.",
    "icon": "ph:code-bold",
    "topics": [
      "Comparação",
      "Operadores lógicos",
      "Curto-circuito"
    ],
    "modules": [
      {
        "label": "Comparação",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula37%20-%20operadores_comparacao"
      },
      {
        "label": "Operadores lógicos",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula38%20-%20operadores_logicos"
      },
      {
        "label": "Curto-circuito",
        "url": "https://github.com/bruno-b-neves/curso-javascript-e-typescript/tree/main/JavaScript/aula39%20-%20avaliacao_curto_circuito"
      }
    ]
  }
]
}
