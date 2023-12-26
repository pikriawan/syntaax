import cn from 'classnames'
import style from './style.module.css'

export default function DropdownDivider ({ className }) {
  return <hr className={cn(className, style.dropdown__divider)} />
}