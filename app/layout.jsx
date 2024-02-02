import dynamic from 'next/dynamic'
import { inter } from './font'
import './global.css'

export const metadata = {
  title: 'Syntaax',
  description: 'A simple HTML, CSS, and JS code editor'
}

const DynamicEruda = dynamic(() => import('../component/eruda'), {
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
}