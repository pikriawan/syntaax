'use server'

import { revalidatePath } from 'next/cache'
import { auth } from './auth'
import mongoClient from './mongoClient'

export async function createProject(formData) {
  const session = await auth()

  if (!session?.user) {
    return {
      error: 'Not authenticated'
    }
  }

  const newProject = {
    ownerEmail: session?.user?.email,
    name: formData.get('name'),
    data: ''
  }

  if (!/[ \-.0-9a-z]/gi).test(newProject.name)) {
    return {
      error: 'Invalid project name'
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const existingProject = await projectCollection.findOne({
      ownerEmail: newProject.ownerEmail,
      name: newProject.name
    })

    if (existingProject) {
      return {
        error: 'Project name already taken'
      }
    }

    await projectCollection.insertOne(newProject)
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }

  revalidatePath('/')
  return {
    data: {
      project: {
        name: newProject.name
      }
    }
  }
}

export async function updateProject(projectName, formData) {
  const session = await auth()

  if (!session?.user) {
    return {
      error: 'Not authenticated'
    }
  }

  const updatedProject = {}

  if (formData.get('name')) {
    updatedProject.name = formData.get('name')
  }

  if (formData.get('data')) {
    updatedProject.data = formData.get('data')
  }

  if (updatedProject.name && !/[ \-.0-9a-z]/gi).test(updatedProject.name)) {
    return {
      error: 'Invalid project name'
    }
  }

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const existingProject = await projectCollection.findOne({
      ownerEmail: session?.user?.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        error: 'Project not found'
      }
    }

    const isUpdatedProjectNameExist = await projectCollection.findOne({
      ownerEmail: session?.user?.email,
      name: updatedProject.name
    }) !== null

    if (isUpdatedProjectNameExist) {
      return {
        error: 'Project name already taken'
      }
    }

    await projectCollection.updateOne({
      ownerEmail: session?.user?.email,
      name: projectName
    }, {
      $set: { ...updatedProject }
    })
  } catch (error) {
    return {
      error: 'Something went wrong'
    }
  }

  revalidatePath('/')

  if (!updatedProject.name) {
    revalidatePath(`/project/${projectName}`)
  }

  return {
    data: {
      project: {
        name: projectName,
        updatedName: updatedProject.name
      }
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
      ownerEmail: session?.user?.email,
      name: projectName
    })

    if (!existingProject) {
      return {
        error: 'Project not found'
      }
    }

    await projectCollection.deleteOne({
      ownerEmail: session?.user?.email,
      name: projectName
    })
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }

  revalidatePath('/')
  return {
    data: {
      project: {
        name: projectName
      }
    }
  }
}