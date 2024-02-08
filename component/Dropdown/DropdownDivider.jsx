import clsx from 'clsx'
import style from './style.module.css'

export default function DropdownDivider({ className }) {
  return <hr className={clsx(style.dropdown__divider, className)} />
}
