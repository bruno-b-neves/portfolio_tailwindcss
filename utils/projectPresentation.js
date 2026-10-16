export const projectTypeLabel = type => ({ curso: 'Projeto de curso', pessoal: 'Pessoal', academico: 'Acadêmico' }[type] || 'Projeto')
export const primaryTechnology = project => project.primaryTechnology || (project.technologies || [])[0] || ''
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

export const availableTechnologies = projects => [...new Set(projects.map(primaryTechnology).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'))

export function filterProjects(projects, technology, search) {
  const term = normalize(search)
  return projects.filter(project => {
    const matchesTechnology = !technology || primaryTechnology(project) === technology
    const searchable = [project.title, project.shortDescription, project.description, project.origin, ...(project.technologies || [])].join(' ')
    return matchesTechnology && (!term || normalize(searchable).includes(term))
  })
}
