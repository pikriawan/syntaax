'use server'

import { getServerSession } from 'next-auth/next'
import authOption from '@/lib/auth-option'
import client from '@/lib/client'

export async function createProject (name) {
  const session = await getServerSession(authOption)
  const user = session?.user || null

  if (!user) {
    return {
      success: false,
      message: 'Not authenticated'
    }
  }

  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const isProjectNameAvailable = await projectCollection.findOne({
    name,
    owner: user.email,
  }) === null

  if (!isProjectNameAvailable) {
    return {
      success: false,
      message: 'Project name already taken'
    }
  }

  await db.collection.insertOne({
    name,
    owner: user.email
  })
  return {
    success: true,
    message: 'Project created'
  }
}

export async function updateProject (name, {
  name: newName,
  data
}) {
  const session = await getServerSession(authOption)
  const user = session?.user || null

  if (!user) {
    return {
      success: false,
      message: 'Not authenticated'
    }
  }

  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const isProjectExists = await projectCollection.findOne({
    name,
    owner: user.email,
  })

  if (!isProjectExists) {
    return {
      success: false,
      message: 'Project not found'
    }
  }

  const isProjectNameAvailable = await projectCollection.findOne({
    name: newName,
    owner: user.email
  }) === null

  if (!isProjectNameAvailable) {
    return {
      success: false,
      message: 'Project name already taken'
    }
  }

  const updateField = {}

  if (newName) {
    updateField.name = newName
  }

  if (data) {
    updateField.data = data
  }

  if (Object.keys(updateField).length > 0) {
    await db.projectCollection.updateOne({ name }, {
      $set: { updateField }
    })
  }

  return {
    success: true,
    message: 'Project updated'
  }
}

export async function deleteProject (name) {
  const session = await getServerSession(authOption)
  const user = session?.user || null

  if (!user) {
    return {
      success: false,
      message: 'Not authenticated'
    }
  }

  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const isProjectExists = await projectCollection.findOne({
    name,
    owner: user.email,
  })

  if (!isProjectExists) {
    return {
      success: false,
      message: 'Project not found'
    }
  }

  await db.collection.deleteOne({
    name,
    owner: user.email
  })
  return {
    success: true,
    message: 'Project deleted'
  }
}