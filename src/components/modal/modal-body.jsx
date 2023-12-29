import cn from 'classnames'

import style from './style.module.css'

export default function ModalBody ({ children, className }) {
  return (
    <div className={cn(style.modal__body, className)}>
      {children}
    </div>
  )
}