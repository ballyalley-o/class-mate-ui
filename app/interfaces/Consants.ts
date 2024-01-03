export interface IconProps {
  className?: string
  width?: string | number
  height?: string | number
}

export interface IconConstant {
  [key: string]: {
    icon: React.ComponentType<IconProps>
    props: IconProps
  }
}
