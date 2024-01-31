/*import dynamic from 'next/dynamic'
import style from './style.module.css'
import { inter } from '@/app/font'
import '@/app/global.css'

export const metadata = {
  title: 'Syntaax',
  description: 'A simple HTML, CSS, and JS code editor'
}

const DynamicEruda = dynamic(() => import('../components/eruda'), {
  ssr: false
})

export default async function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === 'development' && <DynamicEruda />}
      </body>
    </html>
  )
}*/

export default function Layout({ children }) {
  return children
}