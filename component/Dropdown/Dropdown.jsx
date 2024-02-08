'use client'

import clsx from 'clsx'
import DropdownContext from './DropdownContext'
import style from './style.module.css'

export default function Dropdown({ children, className, color }) {
  return (
    <DropdownContext.Provider value={{ color }}>
      <div className={clsx(style.dropdown, className)}>{children}</div>
    </DropdownContext.Provider>
  )
}
