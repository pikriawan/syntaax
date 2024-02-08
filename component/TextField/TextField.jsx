'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'
import style from './style.module.css'

const TextField = forwardRef(function TextField(
  { className, color, ...props },
  ref
) {
  let textFieldColor = ''

  switch (color) {
    case 'primary':
      textFieldColor = 'primary'
      break
    case 'secondary':
      textFieldColor = 'secondary'
      break
    case 'error':
      textFieldColor = 'error'
      break
    case 'warning':
      textFieldColor = 'warning'
      break
    case 'info':
      textFieldColor = 'info'
      break
    case 'success':
      textFieldColor = 'success'
      break
    case 'light':
      textFieldColor = 'light'
      break
    case 'dark':
      textFieldColor = 'dark'
      break
    default:
      textFieldColor = 'primary'
  }

  return (
    <input
      {...props}
      className={clsx(
        style['text-field'],
        style[`text-field--${textFieldColor}`],
        className
      )}
      ref={ref}
      type="text"
    />
  )
})

export default TextField
