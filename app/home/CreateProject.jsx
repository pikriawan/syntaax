'use client'

import { useFormState } from 'react-dom'
import { createProject } from '../action'
import SubmitButton from './SubmitButton'

const initialResponse = {
  success: null,
  message: null,
  error: null,
  data: null
}

export default function CreateProject() {
  const [response, createProjectAction] = useFormState(createProject, initialResponse)

  return (
    <form action={createProjectAction}>
      <label htmlFor="project-name-input">Name</label>
      <input
        id="project-name-input"
        name="name"
        required
        type="text"
      />
      {response.error && <p>{response.error}</p>}
      <SubmitButton>Create</SubmitButton>
    </form>
  )
}