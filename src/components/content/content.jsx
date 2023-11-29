'use client'

import { useEffect } from 'react'
import style from './content.module.css'

export default function Content ({ children }) {
  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      navigator.virtualKeyboard.overlaysContent = true
    }
  }, [])

  return (
    <div className={style.content}>
      <div className={style.content__children}>
        {children}
      </div>
    </div>
  )
}