'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { auth } from './auth'
import mongoClient from './mongoClient'

export async function createProject(prevState, formData) {
  const session = await auth()

  if (!session?.user) {
    return {
      error: 'Not authenticated'
    }
  }

  const projectSchema = z.object({
    name: z.string().regex(/[ \-.0-9a-z]/gi).min(3).max(20)
  })
  const validatedFields = projectSchema.safeParse({
    name: formData.get('name')
  })

  if (!validatedFields.success) {
    return {
      error: 'Invalid project name'
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: formData.get('name')
    })

    if (existingProject) {
      return {
        error: 'Project name already taken'
      }
    }

    await projectCollection.insertOne({
      ownerEmail: session?.user.email,
      name: formData.get('name'),
      data: ''
    })
    revalidatePath('/')
    return {
      message: 'Project creation successful',
      data: {
        project: {
          ownerEmail: session?.user.email,
          name: formData.get('name'),
          data: ''
        }
      }
    }
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }
}