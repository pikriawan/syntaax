import cn from 'classnames'
import style from './style.module.css'

export default function DropdownDivider ({ className }) {
  return <hr className={cn(style.dropdown__divider, className)} />
}