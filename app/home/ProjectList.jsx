import { fetchProjects } from '../fetcher'
import DeleteProject from './DeleteProject'

export default async function ProjectList() {
  const projects = await fetchProjects()

  return projects.length > 0 ? projects.map(({ name }) => (
    <div key={name}>
      <strong>{name}</strong>
      <DeleteProject name={name} />
    </div>
  )) : <p>No project</p>
}