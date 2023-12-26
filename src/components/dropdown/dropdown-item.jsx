'use client'

import cn from 'classnames'
import { useContext } from 'react'
import DropdownContext from './dropdown-context'
import style from './style.module.css'

export default function DropdownItem ({
  children,
  className,
  onClick = () => {}
}) {
  const { color } = useContext(DropdownContext)
  let dropdownItemBackgroundColor = ''

  switch (color) {
    case 'primary':
      dropdownItemBackgroundColor = 'primary'
      break
    case 'secondary':
      dropdownItemBackgroundColor = 'secondary'
      break
    case 'error':
      dropdownItemBackgroundColor = 'error'
      break
    case 'warning':
      dropdownItemBackgroundColor = 'warning'
      break
    case 'info':
      dropdownItemBackgroundColor = 'info'
      break
    case 'success':
      dropdownItemBackgroundColor = 'success'
      break
    case 'light':
      dropdownItemBackgroundColor = 'light'
      break
    case 'dark':
      dropdownItemBackgroundColor = 'dark'
      break
    default:
      dropdownItemBackgroundColor = 'primary'
  }

  return (
    <div className={cn(
      className,
      style.dropdown__item,
      style[`dropdown__item--${dropdownItemBackgroundColor}`]
    )} onClick={onClick}>
      {children}
    </div>
  )
}