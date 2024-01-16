'use server'

import { getServerSession } from 'next-auth/next'

import authOption from '@/lib/auth-option'
import client from '@/lib/client'

export async function fetchUser () {
  const session = await getServerSession(authOption)
  return session?.user || null
}

export async function fetchProjects () {
  const session = await getServerSession(authOption)
  const user = session?.user
  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const projects = await projectCollection.find({
    owner: user?.email
  }).sort({
    name: 1
  }).toArray()

  return projects.length > 0 ? projects.map((project) => ({
    name: project.name,
    owner: project.owner,
    data: project.data
  })) : []
}

export async function fetchProject (name) {
  const session = await getServerSession(authOption)
  const user = session?.user
  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const project = await projectCollection.findOne({
    name,
    owner: user?.email
  })
  return project ? {
    name: project.name,
    owner: project.owner,
    data: project.data
  } : null
}