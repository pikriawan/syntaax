'use client'

import cn from 'classnames'
import { useEffect, useRef } from 'react'

import style from './style.module.css'

export default function DropdownMenu ({
  children,
  className,
  onClose = () => {},
  open,
  stick = 'left'
}) {
  const dropdownMenuRef = useRef(null)

  function handleOutsideClick (event) {
    if (event.target.contains(dropdownMenuRef.current)) {
      onClose()
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [open, onClose])

  return (
    <div className={cn(
      className,
      style.dropdown__menu,
      style[`dropdown__menu--stick-${stick}`],
      {
        [style['dropdown__menu--hidden']]: !open
      }
    )} ref={dropdownMenuRef}>
      {children}
    </div>
  )
}