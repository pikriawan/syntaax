'use client'

import { deleteProject } from '../action'
import SubmitButton from '../../component/SubmitButton'

export default function DeleteProject({ name }) {
  return <SubmitButton onClick={() => deleteProject(name)}>Delete</SubmitButton>
}