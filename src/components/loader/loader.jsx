import cn from 'classnames'

import style from './style.module.css'

export default function Loader ({
  className,
  color = '#fafafa',
  height = 16,
  width = 16,
  ...props
}) {
  return (
    <svg
      {...props}
      className={cn(className, style.loader)}
      fill='transparent'
      height={height}
      stroke={color}
      strokeWidth={1}
      viewBox='0 0 16 16'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M 8 1 A 7 7 0 0 1 15 8 A 7 7 0 0 1 8 15 A 7 7 0 0 1 1 8'>
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          dur='0.5s'
          from='0 8 8'
          repeatCount='indefinite'
          to='360 8 8'
          type='rotate'
        />
      </path>
    </svg>
  )
}