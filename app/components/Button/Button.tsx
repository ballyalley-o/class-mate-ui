import classNames from 'classnames'
import Image from 'next/image'

type ButtonProps = {
  title: string
  icon?: string
  type: 'button' | 'submit'
  variant: string | 'btn_dark_green'
  w?: number | 24
  h?: number | 24
  iconClassName?: string
}

const Button = ({
  title,
  icon,
  type,
  variant,
  w,
  h,
  iconClassName,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-sm border p-3 ${variant}`}
      type={type}
      title={title}
    >
      {icon && (
        <Image
          src={`/assets/svg/${icon}.svg`}
          alt={title}
          width={w}
          height={h}
          className={iconClassName}
        />
      )}
      <label className='bold-14 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button
