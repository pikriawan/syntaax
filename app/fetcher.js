'use server'

import { auth } from './auth'
import mongoClient from './mongoClient'

export async function fetchUser() {
  const session = await auth()
  return session?.user
}

export async function fetchProjects() {
  const session = await auth()

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection(process.env.PROJECT_COLLECTION_NAME)
    return projectCollection.find({
      ownerEmail: session?.user?.email
    }).sort({
      name: 1
    }).toArray().map(({
      ownerEmail,
      name,
      data
    }) => ({
      ownerEmail,
      name,
      data
    }))
  } catch (err) {
    return []
  }
}

export async function fetchProject(projectName) {
  const session = await auth()

  try {
    await mongoClient.connect()
    const projectCollection = mongoClient.db(process.env.DATABASE_NAME).collection('projects')
    const project = projectCollection.findOne({
      ownerEmail: session?.user?.email,
      name: projectName
    })
    return project ? {
      ownerEmail: project.ownerEmail,
      name: project.name,
      data: project.data
    } : null
  } catch (err) {
    return null
  }
}