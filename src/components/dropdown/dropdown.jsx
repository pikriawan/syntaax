'use client'

import cn from 'classnames'

import DropdownContext from './dropdown-context'
import style from './style.module.css'

export default function Dropdown ({
  children,
  className,
  color
}) {
  return (
    <DropdownContext.Provider value={{ color }}>
      <div className={cn(style.dropdown, className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}