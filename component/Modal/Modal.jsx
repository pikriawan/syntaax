'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContext from './_ModalContext'
import style from './style.module.css'

export default function Modal({
  children,
  className,
  disableClose,
  onClose = () => {},
  open
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function handleClose() {
    if (!disableClose) {
      onClose()
    }
  }

  return isMounted
    ? createPortal(
        <>
          <ModalContext.Provider
            value={{
              onClose: handleClose
            }}
          >
            <div
              className={clsx(className, style.modal, {
                [style['modal--hidden']]: !open
              })}
            >
              {children}
            </div>
          </ModalContext.Provider>
          <div
            className={clsx(style.modal__overlay, {
              [style['modal__overlay--hidden']]: !open
            })}
            onClick={handleClose}
          ></div>
        </>,
        document.body
      )
    : null
}
