import { redirect } from 'next/navigation'

import { fetchUser } from '@/lib/fetcher'

export default async function PublicLayout ({ children }) {
  const user = await fetchUser()
  const isAuthenticated = user !== null
  if (isAuthenticated) redirect('/home')
  else return children
}