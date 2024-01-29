import { redirect } from 'next/navigation'
import { fetchUser } from '@/lib/fetcher'

export default async function PrivateLayout ({ children }) {
  const user = await fetchUser()
  const isAuthenticated = user !== null
  if (!isAuthenticated) redirect('/landing')
  else return children
}