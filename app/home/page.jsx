import { Suspense } from 'react'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'

export default function HomePage() {
  return (
    <>
      <CreateProject />
      <Suspense fallback={<p>Fetching...</p>}>
        <ProjectList />
      </Suspense>
    </>
  )
}