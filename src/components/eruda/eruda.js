'use client'

import eruda from 'eruda'
import { useEffect } from 'react'
import './eruda.module.css'

export default function Eruda () {
  useEffect(() => {
    eruda.init()

    return () => {
      eruda.destroy()
    }
  }, [])
}