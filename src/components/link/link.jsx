import cn from 'classnames'
import NextLink from 'next/link'
import style from './style.module.css'

export default function Link ({
  children,
  className,
  ...props
}) {
  return (
    <NextLink {...props} className={cn(style.link, className)}>
      {children}
    </NextLink>
  )
}