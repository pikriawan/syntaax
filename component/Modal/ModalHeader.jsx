'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useContext } from 'react'
import ModalContext from './ModalContext'
import style from './style.module.css'

export default function ModalHeader ({ children, className }) {
  const { onClose } = useContext(ModalContext)

  return (
    <header className={cn(
      className,
      style.header,
      style.modal__header
    )}>
      <div className={style.header__content}>
        {children}
      </div>
      <button className={style['header__close-button']} onClick={onClose}>
        <Image
          alt='Close'
          height={24}
          src='/img/x.svg'
          width={24}
        />
      </button>
    </header>
  )
}