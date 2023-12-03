import classNames from 'classnames'
import style from './text-field.module.css'

function TextField ({
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
      className={classNames(
        style['text-field'],
        style[textFieldColor],
        className
      )}
      type='text'
    />
  )
}

export default TextField