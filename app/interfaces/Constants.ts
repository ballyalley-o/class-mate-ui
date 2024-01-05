import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IconDefaultProps {
  src: string | StaticImport
  className?: string
  width: number
  height: number
  alt: string
}

export interface IconConstant {
  [key: string]: {
    icon: React.ComponentType<IconDefaultProps>
    props: IconDefaultProps
  }
}
