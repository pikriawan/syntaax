'use server'

import { auth } from './auth'
import client from './client'

function parse(data) {
  const rawData = JSON.parse(JSON.stringify(data))
  return Object.entries(rawData)
    .filter(([prop]) => prop !== '_id')
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur[0]]: cur[1]
      }),
      {}
    )
}

export async function fetchUser() {
  const session = await auth()
  return session?.user
}

export async function fetchProjects() {
  const session = await auth()

  try {
    await client.connect()
    const projectCollection = client
      .db(process.env.DATABASE_NAME)
      .collection(process.env.PROJECT_COLLECTION_NAME)
    const projects = await projectCollection
      .find({
        ownerEmail: session?.user.email
      })
      .sort({
        name: 1
      })
      .toArray()
    return projects.map((project) => parse(project))
  } catch (err) {
    return null
  }
}

export async function fetchProject(projectName) {
  const session = await auth()

  try {
    await client.connect()
    const projectCollection = client
      .db(process.env.DATABASE_NAME)
      .collection(process.env.PROJECT_COLLECTION_NAME)
    const project = await projectCollection.findOne({
      ownerEmail: session?.user.email,
      name: projectName
    })
    return project ? parse(project) : null
  } catch (err) {
    return null
  }
}
