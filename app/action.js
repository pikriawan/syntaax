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

export async function updateProject(
  projectName,
  prevState,
  formData
) {
  const session = await auth()

  if (!session?.user) {
    return {
      error: 'Not authenticated'
    }
  }

  const updatedFields = {}

  if (formData.get('name')) {
    updatedFields.name = formData.get('name')
  }

  if (formData.get('data')) {
    updatedFields.data = formData.get('data')
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        error: 'Project not found'
      }
    }

    if (updatedFields.name) {
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

      const isUpdatedProjectNameExist = await projectCollection.findOne({
        ownerEmail: session?.user.email,
        name: formData.get('name')
      }) !== null

      if (isUpdatedProjectNameExist) {
        return {
          error: 'Project name already taken'
        }
      }
    }

    await projectCollection.updateOne({
      ownerEmail: session?.user.email,
      name: projectName
    }, {
      $set: { ...updatedFields }
    })
    revalidatePath('/')
    if (updatedFields.name) revalidatePath(`/project/${updatedFields.name}`)
    return {
      message: 'Project update successful',
      data: {
        project: {
          ownerEmail: existingProject.ownerEmail,
          name: existingProject.name,
          data: existingProject.data
        },
        updatedProject: {
          ownerEmail: existingProject.ownerEmail,
          ...updatedProject
        }
      }
    }
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }
}

export async function deleteProject(projectName) {
  const session = await auth()

  if (!session?.user) {
    return {
      error: 'Not authenticated'
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        error: 'Project not found'
      }
    }

    await projectCollection.deleteOne({
      ownerEmail: session?.user.email,
      name: projectName
    })
    revalidatePath('/')
    return {
      message: 'Project deletion successful',
      data: {
        project: {
          ownerEmail: existingProject.ownerEmail,
          name: existingProject.name,
          data: existingProject.data
        }
      }
    }
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }
}