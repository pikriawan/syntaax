import { inter } from '@/app/font'
import '@/app/global.css'
import Eruda from '@/components/eruda'
import VKResponsive from '@/components/v-k-responsive'
import { fetchUser } from '@/lib/fetcher'
import style from './layout.module.css'

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

export default async function RootLayout ({ home, landing }) {
  const user = await fetchUser()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <VKResponsive>
          {process.env.NODE_ENV === 'production' ? (
            user ? home : loading
          ) : (
            <Eruda>
              {user ? home : landing}
            </Eruda>
          )}
        </VKResponsive>
      </body>
    </html>
  )
}