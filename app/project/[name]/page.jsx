import urldecode from 'urldecode'
import Project from '../../../component/project'

export default async function ProjectPage ({ params }) {
  return <Project name={urldecode(params.name)} />
}