import { collections } from './projects'
import { studiesByCollection } from './collectionStudies'

const studyCollections = [
  {
    slug: 'web-moderno',
    title: 'Web Moderno Completo',
    institution: 'Cod3r',
    description: 'Fundamentos, tecnologias e aplicações desenvolvidas nos estudos de desenvolvimento web.',
    icon: 'ph:code-bold',
    repositoryUrl: 'https://github.com/bruno-b-neves/curso-web-morderno'
  },
  {
    slug: 'vue-2',
    title: 'Vue.js 2 — O Guia Completo',
    institution: 'Cod3r',
    description: 'Fundamentos, componentes e recursos do Vue.js 2, com exercícios e aplicações práticas.',
    icon: 'mdi:vuejs',
    repositoryUrl: 'https://github.com/bruno-b-neves/curso-de-vuejs'
  },
  {
    slug: 'javascript-typescript',
    title: 'JavaScript e TypeScript',
    institution: 'Luiz Otávio Miranda',
    description: 'Formação em andamento. Os exercícios disponíveis abordam fundamentos de JavaScript, funções, arrays, objetos e operadores.',
    icon: 'mdi:language-javascript',
    repositoryUrl: 'https://github.com/bruno-b-neves/curso-javascript-e-typescript'
  }
]

const repositoryKey = url => (url || '').replace(/\/$/, '').replace(/\.git$/, '')
const matchesCollection = (collection, definition) =>
  collection.slug === definition.slug ||
  repositoryKey(collection.repositoryUrl) === repositoryKey(definition.repositoryUrl)

// Usa a mesma lista na vitrine e na validação das rotas.
// Mantém slugs, ordem, dados extras e coleções existentes, inclusive UNIP.
export function buildPortfolioCollections(existingCollections) {
  const result = existingCollections.map(collection => {
    const definition = studyCollections.find(item => matchesCollection(collection, item))
    if (!definition) return collection
    return {
      ...definition,
      ...collection,
      repositoryUrl: collection.repositoryUrl || definition.repositoryUrl,
      studies: collection.studies || studiesByCollection[definition.slug] || []
    }
  })

  studyCollections.forEach(definition => {
    if (!result.some(collection => matchesCollection(collection, definition))) {
      result.push({ ...definition, studies: studiesByCollection[definition.slug] || [] })
    }
  })
  return result
}

export const portfolioCollections = buildPortfolioCollections(collections)
