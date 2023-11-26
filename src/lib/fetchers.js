'use server'

import { getServerSession } from 'next-auth/next'
import authOptions from '@/lib/auth-options'
import client from '@/lib/client'

async function fetchUser () {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}
  return user ? {
    name: user.name,
    email: user.email,
    image: user.image
  } : null
}

async function fetchProjects () {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}
  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const projects = await projectCollection.find({
    owner: user.email
  }).sort({
    name: 1
  }).toArray()

  return projects.length > 0 ? projects.map((project) => ({
    name: project.name,
    data: project.data
  })) : []
}

async function fetchProject (name) {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}
  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const project = await projectCollection.findOne({
    name,
    owner: user.email
  })
  return project ? {
    name: project.name,
    data: project.data
  } : null
}

export {
  fetchUser,
  fetchProjects,
  fetchProject
}