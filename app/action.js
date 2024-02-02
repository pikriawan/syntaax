'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { auth } from './auth'
import mongoClient from './mongoClient'

export async function createProject(prevState, formData) {
  const session = await auth()

  if (!session?.user) {
    return {
      success: false,
      message: null,
      error: 'Not authenticated',
      data: null
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
      success: false,
      message: null,
      error: 'Invalid project name',
      data: null
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection(process.env.PROJECT_COLLECTION_NAME)
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: formData.get('name')
    })

    if (existingProject) {
      return {
        success: false,
        message: null,
        error: 'Project name already taken',
        data: null
      }
    }

    const project = await projectCollection.insertOne({
      ownerEmail: session?.user.email,
      name: formData.get('name'),
      data: ''
    })
    revalidatePath('/')
    return {
      success: true,
      message: 'Project creation successful',
      error: null,
      data: {
        ownerEmail: project.ownerEmail,
        name: project.name,
        data: project.data
      }
    }
  } catch (err) {
    return {
      success: false,
      message: null,
      error: 'Something went wrong',
      data: null
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
      success: false,
      message: null,
      error: 'Not authenticated',
      data: null
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
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection(process.env.PROJECT_COLLECTION_NAME)
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        success: false,
        message: null,
        error: 'Project not found',
        data: null
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
          success: false,
          message: null,
          error: 'Invalid project name',
          data: null
        }
      }

      const isUpdatedProjectNameExist = await projectCollection.findOne({
        ownerEmail: session?.user.email,
        name: formData.get('name')
      }) !== null

      if (isUpdatedProjectNameExist) {
        return {
          success: false,
          message: null,
          error: 'Project name already taken',
          data: null
        }
      }
    }

    const project = await projectCollection.updateOne({
      ownerEmail: session?.user.email,
      name: projectName
    }, {
      $set: { ...updatedFields }
    })
    revalidatePath('/')
    revalidatePath(`/project/${project.name}`)
    return {
      success: true,
      message: 'Project update successful',
      error: null,
      data: {
        ownerEmail: project.ownerEmail,
        name: project.name,
        data: project.data
      }
    }
  } catch (err) {
    return {
      success: false,
      message: null,
      error: 'Something went wrong',
      data: null
    }
  }
}

export async function deleteProject(projectName) {
  const session = await auth()

  if (!session?.user) {
    return {
      success: false,
      message: null,
      error: 'Not authenticated',
      data: null
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection(process.env.PROJECT_COLLECTION_NAME)
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        success: false,
        message: null,
        error: 'Project not found',
        data: null
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
      success: false,
      message: null,
      error: 'Something went wrong',
      data: null
    }
  }
}