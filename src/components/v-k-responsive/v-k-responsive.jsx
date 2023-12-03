'use client'

import { useEffect } from 'react'
import style from './v-k-responsive.module.css'

export default function VKResponsive ({ children }) {
  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      navigator.virtualKeyboard.overlaysContent = true
    }
  }, [])

  return (
    <div className={style['v-k-responsive']}>
      <div className={style['v-k-responsive__children']}>
        {children}
      </div>
    </div>
  )
}