import { Inter, Poppins, Roboto_Mono } from 'next/font/google'

export const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const roboto_mono = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})
