import style from './style.module.css'
import ProjectCard from '@/components/project-card'
import { fetchProjects } from '@/lib/fetcher'

export default async function ProjectList () {
  const projects = await fetchProjects()

  return (
    <div className={style['project-list']}>
      {projects.length > 0 && projects.map((project) => <ProjectCard key={project.name} name={project.name} />)}
    </div>
  )
}