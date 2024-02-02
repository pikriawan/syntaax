import { redirect } from 'next/navigation'
import SignInButton from '../component/sign-in-button'
import { fetchUser } from './fetcher'

export default async function RootPage () {
  const user = await fetchUser()
  if (user) redirect('/dashboard')
  return (
    <div style={{
      padding: '1rem'
    }}>
      <SignInButton />
    </div>
  )
}