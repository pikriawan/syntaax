import { redirect } from 'next/navigation'
import SignInButton from '../component/SignInButton'
import { fetchUser } from './fetcher'

export default async function RootPage () {
  const user = await fetchUser()
  if (user) redirect('/home')
  return (
    <div style={{
      padding: '1rem'
    }}>
      <SignInButton />
    </div>
  )
}