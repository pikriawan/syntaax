import urldecode from 'urldecode'

import Project from '@/components/project'

export default async function ProjectPage ({ params }) {
  return <Project name={urldecode(params.name)} />
}