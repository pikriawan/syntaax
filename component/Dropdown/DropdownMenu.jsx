'use client'

import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import style from './style.module.css'

export default function DropdownMenu({
  children,
  className,
  onClose = () => {},
  open,
  stick = 'left'
}) {
  const dropdownMenuRef = useRef(null)

  function handleOutsideClick(event) {
    if (!dropdownMenuRef.current.contains(event.target)) {
      onClose(event)
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
    <div
      className={clsx(
        style.dropdown__menu,
        style[`dropdown__menu--stick-${stick}`],
        {
          [style['dropdown__menu--hidden']]: !open
        },
        className
      )}
      ref={dropdownMenuRef}
    >
      {children}
    </div>
  )
}
