'use server'

import { getServerSession } from 'next-auth/next'
import authOptions from '@/lib/auth-options'
import client from '@/lib/client'

async function createProject (name) {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}

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

async function updateProject (name, {
  name: newName,
  data
}) {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}

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

async function deleteProject (name) {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}

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

export {
  createProject,
  updateProject,
  deleteProject
}