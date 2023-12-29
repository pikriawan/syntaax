import cn from 'classnames'

import style from './style.module.css'

export default function ModalFooter ({ children, className }) {
  return (
    <div className={cn(className, style.modal__footer)}>
      {children}
    </div>
  )
}