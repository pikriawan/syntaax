'use client'

import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'

import style from './style.module.css'
import Button from '@/components/button'

export default function SignOutButton ({ className, ...props }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  async function handleSignOut (event) {
    event.preventDefault()
    setIsSigningOut(true)
    await signOut({
      callbackUrl: '/'
    })
  }

  return (
    <Button
      {...props}
      className={className}
      disabled={!isMounted || isSigningOut}
      loading={isSigningOut}
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  )
}