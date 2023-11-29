import Content from '@/components/content/content'
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
    <html className={style.html} lang='en'>
      <body className={style.body}>
        <Content>
          {user ? home : landing}
        </Content>
      </body>
    </html>
  )
}