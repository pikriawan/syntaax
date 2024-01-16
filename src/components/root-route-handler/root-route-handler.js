'use client'

import { usePathname } from 'next/navigation'

export default function RootRouteHandler ({
  home,
  landing,
  children,
  isAuthenticated
}) {
  const pathname = usePathname()
  return isAuthenticated ? (pathname === '/' ? home : children) : landing
}