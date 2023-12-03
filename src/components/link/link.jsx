import classNames from 'classnames'
import NextLink from 'next/link'
import style from './link.module.css'

function Link ({
  children,
  className,
  ...props
}) {
  return (
    <NextLink {...props} className={classNames(style.link, className)}>
      {children}
    </NextLink>
  )
}

export default Link