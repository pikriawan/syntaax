import { NextResponse } from 'next/server'
import { fetchUser } from '../../fetcher'

export async function GET () {
  const user = await fetchUser()

  if (!user) {
    return NextResponse.json(null, {
      status: 401
    })
  } else {
    return NextResponse.json(user)
  }
}