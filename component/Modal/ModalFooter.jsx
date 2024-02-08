import clsx from 'clsx'
import style from './style.module.css'

export default function ModalFooter({ children, className }) {
  return <div className={clsx(className, style.modal__footer)}>{children}</div>
}
