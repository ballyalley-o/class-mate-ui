import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IconProps {
  src?: string | StaticImport
  className?: string
  width?: string | number
  height?: string | number
  alt: string
}

export interface IconConstant {
  [key: string]: {
    icon: React.ComponentType<IconProps>
    props: IconProps
  }
}
