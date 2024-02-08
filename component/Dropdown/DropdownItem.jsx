'use client'

import clsx from 'clsx'
import { useContext } from 'react'
import DropdownContext from './DropdownContext'
import style from './style.module.css'

export default function DropdownItem({
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
    <div
      className={clsx(
        style.dropdown__item,
        style[`dropdown__item--${dropdownItemBackgroundColor}`],
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
