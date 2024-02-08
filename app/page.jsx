import { redirect } from 'next/navigation'
import GoogleSignInButton from '../component/GoogleSignInButton'
import { fetchUser } from './fetcher'

export default async function RootPage() {
  const user = await fetchUser()
  if (user) redirect('/home')
  return (
    <div
      style={{
        padding: '1rem'
      }}
    >
      <GoogleSignInButton />
    </div>
  )
}
