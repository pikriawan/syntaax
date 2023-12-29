'use client'

import cn from 'classnames'
import { useEffect, useState } from 'react'

import style from './style.module.css'
import { inter } from '@/app/font'
import Loader from '@/components/loader/loader'

export default function Button ({
  children,
  className,
  color,
  disabled,
  loading,
  type,
  ...props
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  let buttonColor = ''

  switch (color) {
    case 'primary':
      buttonColor = 'primary'
      break
    case 'secondary':
      buttonColor = 'secondary'
      break
    case 'error':
      buttonColor = 'error'
      break
    case 'warning':
      buttonColor = 'warning'
      break
    case 'info':
      buttonColor = 'info'
      break
    case 'success':
      buttonColor = 'success'
      break
    case 'light':
      buttonColor = 'light'
      break
    case 'dark':
      buttonColor = 'dark'
      break
    default:
      buttonColor = 'primary'
  }

  return (
    <button
      {...props}
      className={cn(
        className,
        style.button,
        style[`button--${buttonColor}`]
      )}
      disabled={disabled || (!isMounted && type === 'submit')}
      type={type}
    >
      <span className={cn(
        style.button__children,
        inter.className,
        {
          [style['button__children--invisible']]: loading
        }
      )}>
        {children}
      </span>
      <Loader
        className={cn(style.button__loader, {
          [style['button__loader--hidden']]: !loading
        })}
        height={14}
        width={14}
      />
    </button>
  )
}