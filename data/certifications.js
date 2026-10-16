import { projects } from './projects'

// Datas e comprovantes aparecem somente quando cadastrados.
export const academic = {
  "id": "ciencia-computacao",
  "title": "Bacharelado em Ciência da Computação",
  "institution": "Universidade Paulista (UNIP)",
  "period": "Ago/2025 — Atual",
  "type": "Graduação",
  "icon": "material-symbols:school-outline-rounded",
  "image": "",
  "description": "Graduação em Ciência da Computação, com foco na construção de fundamentos em programação, algoritmos e desenvolvimento de software.",
  "curriculum": [],
  "courseUrl": "",
  "certificateUrl": "",
  "status": "Em andamento",
  "collectionSlug": "unip",
  "skills": [
    "Programação",
    "Algoritmos",
    "Fundamentos da computação"
  ]
}

const courses = [
  {
    "id": "web-moderno",
    "title": "Web Moderno Completo com JavaScript + Projetos",
    "institution": "Cod3r · Udemy",
    "type": "Desenvolvimento web",
    "icon": "material-symbols:language-rounded",
    "shortDescription": "Formação prática em JavaScript e desenvolvimento web, do frontend ao backend.",
    "description": "Estudos de desenvolvimento web, dos fundamentos de JavaScript à construção de aplicações com diferentes frameworks e integração com backend.",
    "courseUrl": "https://www.udemy.com/course/curso-web/",
    "certificateUrl": "",
    "image": "/images/certificacoes/course-webmoderno.jpeg",
    "curriculum": [
      "Fundamentos de programação, lógica e algoritmos",
      "JavaScript: fundamentos, funções, objetos e arrays",
      "JavaScript avançado e ESNext",
      "Programação funcional e orientação a objetos",
      "HTML5, CSS3, Flexbox e CSS Grid",
      "DOM, eventos, HTTP, Ajax, Fetch e Axios",
      "Vue.js, React, Next.js e Angular",
      "Bootstrap e jQuery",
      "Node.js, Express e desenvolvimento de APIs",
      "Bancos de dados SQL e NoSQL",
      "Gulp, Webpack, Babel e Sass",
      "Projetos práticos e integração frontend/backend",
      "Desenvolvimento desktop com Electron",
      "Publicação de aplicações na AWS"
    ],
    "featured": true,
    "order": 2,
    "skills": [
      "JavaScript",
      "HTML e CSS",
      "APIs",
      "Frontend e backend"
    ],
    "collectionSlug": "web-moderno",
    "application": "Aplicações como Knowledge e CRUDs em React e Angular reúnem os estudos de interface e integração com backend."
  },
  {
    "id": "vue-2",
    "title": "Vue JS 2 — O Guia Completo",
    "institution": "Cod3r · Leonardo Leitão · Udemy",
    "type": "Frontend",
    "icon": "simple-icons:vuedotjs",
    "shortDescription": "Construção de interfaces com componentes reutilizáveis, navegação e gerenciamento de estado.",
    "description": "Formação em Vue.js 2 com foco em reatividade, comunicação entre componentes, organização de aplicações e integração com APIs.",
    "courseUrl": "",
    "certificateUrl": "",
    "image": "/images/certificacoes/course-vuejsguiacompleto.jpeg",
    "curriculum": [
      "Fundamentos do Vue.js e configuração do ambiente",
      "Instância Vue, templates e sintaxe declarativa",
      "Reatividade, propriedades computadas e watchers",
      "Diretivas e renderização condicional de listas",
      "Eventos, métodos e modificadores",
      "Componentes reutilizáveis e comunicação entre componentes",
      "Ciclo de vida, filtros e mixins",
      "Formulários e vinculação bidirecional com v-model",
      "Estilização dinâmica, animações e transições",
      "Requisições HTTP e integração com APIs utilizando Axios",
      "Vue Router e desenvolvimento de aplicações SPA",
      "Vuex e gerenciamento centralizado de estado",
      "Exercícios, desafios e desenvolvimento de projetos práticos"
    ],
    "featured": true,
    "order": 1,
    "skills": [
      "Componentes",
      "Reatividade",
      "Vue Router",
      "Vuex"
    ],
    "collectionSlug": "vue-2",
    "application": "Conhecimentos aplicados na modernização do frontend institucional do CPV, na migração de WordPress para Vue 2."
  },
  {
    "id": "ui-design",
    "title": "UI Design (Design de Interface de Usuário)",
    "institution": "Udemy",
    "type": "Design de interface",
    "icon": "material-symbols:palette-outline-rounded",
    "shortDescription": "Formação em UI Design com Figma, composição visual, acessibilidade, wireframes e prototipação.",
    "description": "Estudos de composição visual, tipografia, cores e acessibilidade, do wireframe ao protótipo interativo no Figma.",
    "courseUrl": "https://www.udemy.com/course/ui-design-design-de-interface-de-usuario/",
    "certificateUrl": "",
    "image": "/images/certificacoes/course-uidesign.jpeg",
    "curriculum": [
      "Introdução ao UI Design, UX Design e Figma",
      "Ferramentas do Figma, frames, layers e formas vetoriais",
      "Princípios do design: eixo, simetria, hierarquia e ritmo",
      "Grids, alinhamento e composição visual",
      "Tipografia, escala tipográfica e legibilidade",
      "Psicologia das cores, círculo cromático e harmonização",
      "Acessibilidade de cores e critérios WCAG",
      "Briefing, pesquisa de referências e análise de mercado",
      "Criação de wireframes de baixa fidelidade",
      "Mockups de alta fidelidade e guias de estilo",
      "Componentes reutilizáveis e variantes no Figma",
      "Prototipação, interações, animações e transições",
      "Colaboração e exportação de projetos para desenvolvimento",
      "Projetos práticos: Turma do Café, Vaga Perfeita, Barba Brava, Página Pessoal e Sociedade do Inglês"
    ],
    "order": 3,
    "skills": [
      "Figma",
      "Hierarquia visual",
      "Acessibilidade",
      "Prototipação"
    ]
  },
  {
    "id": "java-spring-boot",
    "title": "Java com Spring Boot — Curso Introdutório",
    "institution": "Rocketseat",
    "type": "Backend",
    "icon": "simple-icons:springboot",
    "shortDescription": "Introdução ao desenvolvimento backend com Java e Spring Boot, explorando fundamentos da linguagem e construção de aplicações.",
    "description": "Curso introdutório de backend com Java e Spring Boot, organizado em torno do desenvolvimento de uma API de tarefas.",
    "courseUrl": "https://app.rocketseat.com.br/jornada/java-com-spring-boot-curso-introdutorio/visao-geral",
    "certificateUrl": "",
    "image": "/images/certificacoes/course-javaspringboot.jpeg",
    "curriculum": [
      "Configuração do ambiente com Java, Maven e IDE",
      "Estrutura e organização de projetos Spring Boot",
      "Controllers, rotas HTTP e APIs REST",
      "Classes, atributos, getters, setters e Lombok",
      "Persistência com Spring Data JPA e banco H2",
      "Modelagem de entidades e criação de repositórios",
      "Cadastro de usuários e validação de informações",
      "ResponseEntity e respostas HTTP",
      "Hash de senhas, autenticação e filtros de segurança",
      "Modelagem e cadastro de tarefas",
      "Listagem e filtragem de tarefas",
      "Atualização completa e parcial de registros",
      "Validação de propriedade e controle de acesso",
      "Tratamento de exceções com try/catch",
      "Live Reload e publicação da aplicação no Render"
    ],
    "order": 5,
    "skills": [
      "Java",
      "Spring Boot",
      "API REST",
      "Persistência"
    ],
    "projectIds": [
      "todolist-api-spring-boot"
    ],
    "application": "Construção de uma API REST de gerenciamento de tarefas, com cadastro de usuários, persistência e controle de acesso."
  },
  {
    "title": "Responsive Web Design (Legacy)",
    "institution": "freeCodeCamp",
    "type": "Certificação",
    "icon": "simple-icons:freecodecamp",
    "shortDescription": "Certificação prática em HTML5, CSS3, acessibilidade e desenvolvimento de interfaces responsivas.",
    "description": "Formação em HTML e CSS com exercícios de semântica, acessibilidade, Flexbox, Grid e construção de páginas responsivas.",
    "curriculum": [
      "Basic HTML and HTML5 — Estrutura semântica, elementos e formulários",
      "Basic CSS — Seletores, propriedades e estilização",
      "Applied Visual Design — Composição, posicionamento e animações",
      "Applied Accessibility — Acessibilidade e boas práticas semânticas",
      "Responsive Web Design Principles — Media Queries e responsividade",
      "CSS Flexbox — Layouts flexíveis e alinhamento",
      "CSS Grid — Construção de layouts em grade",
      "Projeto de certificação: Tribute Page",
      "Projeto de certificação: Survey Form",
      "Projeto de certificação: Product Landing Page",
      "Projeto de certificação: Technical Documentation Page",
      "Projeto de certificação: Personal Portfolio Webpage"
    ],
    "courseUrl": "https://www.freecodecamp.org/learn/responsive-web-design/",
    "certificateUrl": "",
    "image": "/images/certificacoes/course-freecodecamp.jpeg",
    "id": "responsive-web-design",
    "order": 4,
    "skills": [
      "HTML semântico",
      "CSS",
      "Layouts responsivos",
      "Acessibilidade"
    ]
  },
  {
    "id": "javascript-typescript",
    "title": "JavaScript e TypeScript",
    "institution": "Luiz Otávio Miranda · Udemy",
    "type": "JavaScript",
    "status": "Em andamento",
    "order": 6,
    "icon": "mdi:language-javascript",
    "shortDescription": "Estudos em andamento com exercícios de fundamentos de JavaScript e lógica de programação.",
    "description": "Formação em andamento. Os exercícios publicados até agora abrangem variáveis, tipos, strings, números, funções, arrays, objetos e operadores em JavaScript.",
    "skills": [
      "JavaScript",
      "Funções",
      "Arrays e objetos",
      "Operadores"
    ],
    "collectionSlug": "javascript-typescript",
    "courseUrl": "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/",
    "certificateUrl": "",
    "image": "",
    "curriculum": []
  }
]

export const certifications = courses.map(course => ({
  ...course,
  relatedProjects: projects.filter(project => (course.projectIds || []).includes(project.id))
})).sort((a, b) => a.order - b.order)
