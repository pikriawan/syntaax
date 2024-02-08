import clsx from 'clsx'
import style from './style.module.css'

export default function ModalBody({ children, className }) {
  return <div className={clsx(style.modal__body, className)}>{children}</div>
}
