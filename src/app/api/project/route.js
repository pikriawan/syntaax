import { NextResponse } from 'next/server'
import { fetchUser, fetchProjects } from '@/lib/fetcher'

export async function GET () {
  const user = await fetchUser()

  if (!user) {
    return NextResponse.json(null, {
      status: 401
    })
  } else {
    const projects = await fetchProjects()
    return NextResponse.json(projects)
  }
}