'use server'

import { getServerSession } from 'next-auth/next'
import { revalidatePath } from 'next/cache'

import authOption from '@/lib/auth-option'
import client from '@/lib/client'

export async function createProject (name) {
  const session = await getServerSession(authOption)
  const user = session?.user

  if (!user) {
    return {
      success: false,
      message: 'Not authenticated'
    }
  }

  await client.connect()
  const db = client.db(process.env.DATABASE_NAME)
  const projectCollection = db.collection('projects')
  const isProjectNameValid = /^[a-z0-9\- .]{5,20}$/i.test(name);

  if (!isProjectNameValid) {
    return {
      success: false,
      message: 'Project name doesn\'t valid'
    }
  }

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

  await projectCollection.insertOne({
    name,
    owner: user.email
  })
  revalidatePath('/')
  return {
    success: true,
    message: 'Project created',
    data: {
      project: {
        name,
        owner: user.email
      }
    }
  }
}

export async function updateProject (name, {
  name: newName,
  data
}) {
  const session = await getServerSession(authOption)
  const user = session?.user

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

  const isProjectNameValid = /^[a-z0-9\- .]{5,20}$/i.test(newName);

  if (!isProjectNameValid) {
    return {
      success: false,
      message: 'Project name doesn\'t valid'
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

  if (data) {
    await projectCollection.updateOne({ name }, {
      $set: { data }
    })
  }

  if (newName) {
    await projectCollection.updateOne({ name }, {
      $set: {
        name: newName
      }
    })
  }

  revalidatePath('/')
  return {
    success: true,
    message: 'Project updated',
    data: {
      project: {
        name: newName,
        owner: user.email,
        data
      }
    }
  }
}

export async function deleteProject (name) {
  const session = await getServerSession(authOption)
  const user = session?.user

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

  await projectCollection.deleteOne({
    name,
    owner: user.email
  })
  revalidatePath('/')
  return {
    success: true,
    message: 'Project deleted'
  }
}