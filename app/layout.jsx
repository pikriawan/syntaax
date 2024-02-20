import dynamic from 'next/dynamic'
import {
  inter,
  poppins,
  roboto_mono
} from './font'
import './global.css'

export const metadata = {
  title: 'Syntaax',
  description: 'A simple HTML, CSS, and JS code editor'
}

const DynamicEruda = dynamic(() => import('../component/Eruda'), {
  ssr: false
})

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable}`} lang="en">
      <body>
        {process.env.NODE_ENV === 'development' && <DynamicEruda />}
        {children}
      </body>
    </html>
  )
}