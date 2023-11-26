import { fetchUser } from '@/lib/fetchers'

async function RootPage () {
  const user = await fetchUser()

  return (
    <>
      <h1>
        Hello, {user.name || 'Stranger'}!
      </h1>
    </>
  )
}

export default RootPage