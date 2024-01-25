import style from './layout.module.css'
import { inter } from '@/app/font'
import '@/app/global.css'
import RootRouteHandler from '@/components/root-route-handler'
import { fetchUser } from '@/lib/fetcher'

import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Syntaax',
  description: ''
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: 'no'
}

const DynamicEruda = dynamic(() => import('../components/eruda'), {
  ssr: false
})

export default async function RootLayout ({
  home,
  landing,
  children
}) {
  const user = await fetchUser()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <RootRouteHandler
          home={home}
          landing={landing}
          children={children}
          isAuthenticated={user}
        />
        {process.env.NODE_ENV === 'development' && <DynamicEruda />}
      </body>
    </html>
  )
}