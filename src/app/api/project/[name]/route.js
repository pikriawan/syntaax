import { NextResponse } from 'next/server'

import { fetchUser, fetchProject } from '@/lib/fetcher'

export async function GET (req, { params }) {
  const user = await fetchUser()

  if (!user) {
    return NextResponse.json(null, {
      status: 401
    })
  } else {
    const project = await fetchProject(params.name)
    
    if (project) {
      return NextResponse.json(project)
    } else {
      return NextResponse.json(null, {
        status: 404
      })
    }
  }
}