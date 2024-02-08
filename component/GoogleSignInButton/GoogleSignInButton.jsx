'use client'

import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Button from '../Button'

export default function GoogleSignInButton({ className, ...props }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  async function handleSignIn(event) {
    event.preventDefault()
    setIsSigningIn(true)
    await signIn('google', {
      callbackUrl: '/'
    })
  }

  return (
    <Button
      {...props}
      className={className}
      disabled={!isMounted || isSigningIn}
      loading={isSigningIn}
      onClick={handleSignIn}
    >
      Sign in with Google
    </Button>
  )
}
