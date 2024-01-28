import { redirect } from 'next/navigation'
import { fetchUser } from '@/lib/fetcher'

export async function GET () {
  const user = await fetchUser()
  const isAuthenticated = user !== null
  if (isAuthenticated) redirect('/home')
  else redirect('/landing')
}