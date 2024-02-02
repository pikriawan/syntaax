'use server'

import { auth } from './auth'
import mongoClient from './mongoClient'

function serialize(data) {
  const serialized = JSON.parse(JSON.stringify(data))
  return Object.entries(serialized).filter(([prop]) => prop !== "_id").reduce((acc, cur) => ({
    ...acc,
    [cur[0]]: cur[1]
  }), {})
}

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
      ownerEmail: session?.user.email
    }).sort({
      name: 1
    }).toArray().map((project) => serialize(project))
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
      ownerEmail: session?.user.email,
      name: projectName
    })
    return project ? serialize(project) : null
  } catch (err) {
    return null
  }
}