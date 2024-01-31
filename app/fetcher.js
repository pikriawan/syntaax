'use server'

import { auth } from './auth'
import mongoClient from './mongoClient'

export async function fetchUser () {
  const session = await auth()
  return {
    data: {
      user: session?.user
    }
  }
}

export async function fetchProjects () {
  const session = await auth()
  let projects

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    projects = await projectCollection.find({
      ownerEmail: session?.user?.email
    }).sort({
      name: 1
    }).toArray()
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }

  return {
    data: {
      projects: projects.length > 0 ? projects.map((project) => ({
        ownerEmail: project.ownerEmail,
        name: project.name,
        data: project.data
      })) : []
    }
  }
}

export async function fetchProject (projectName) {
  const session = await auth()
  let project

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    project = await projectCollection.findOne({
      ownerEmail: session?.user?.email,
      name: projectName
    })
  } catch (err) {
    return {
      error: 'Something went wrong'
    }
  }

  return {
    data: {
      project: project ? {
        ownerEmail: project.ownerEmail,
        name: project.name,
        data: project.data
      } : null
    }
  }
}