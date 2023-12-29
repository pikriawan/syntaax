import cn from 'classnames'

import style from './style.module.css'

export default function TextField ({
  className,
  color,
  ...props
}) {
  let textFieldColor = ''

  switch (color) {
    case 'primary':
      textFieldColor = 'primary'
      break
    case 'secondary':
      textFieldColor = 'secondary'
      break
    case 'error':
      textFieldColor = 'error'
      break
    case 'warning':
      textFieldColor = 'warning'
      break
    case 'info':
      textFieldColor = 'info'
      break
    case 'success':
      textFieldColor = 'success'
      break
    case 'light':
      textFieldColor = 'light'
      break
    case 'dark':
      textFieldColor = 'dark'
      break
    default:
      textFieldColor = 'primary'
  }

  return (
    <input
      {...props}
      className={cn(
        style['text-field'],
        style[`text-field--${textFieldColor}`],
        className
      )}
      type='text'
    />
  )
}