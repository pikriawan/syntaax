'use client'

import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  children,
  disabled,
  ...props
}) {
  const [isMounted, setIsMounted] = useState(false)
  const { pending } = useFormStatus()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <button
      {...props}
      disabled={
        disabled ||
        !isMounted ||
        pending
      }
      type="submit"
    >{children}</button>
  )
}