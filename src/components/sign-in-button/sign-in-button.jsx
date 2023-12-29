'use client'

import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

import style from './style.module.css'
import Button from '@/components/button'

const GOOGLE = 'google'

export default function SignInButton ({ className, ...props }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  async function handleSignIn (event) {
    event.preventDefault()
    setIsSigningIn(true)
    await signIn(GOOGLE, {
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
      Sign in with {GOOGLE.replace(GOOGLE[0], GOOGLE[0].toUpperCase())}
    </Button>
  )
}