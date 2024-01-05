import {
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/20/solid'
import { IconConstant, IconDefaultProps } from '@interfaces/Constants'
// @styles
import { icon } from '@assets/styles'

const ICON: IconConstant = {
  active: {
    icon: CheckCircleIcon as React.ComponentType<IconDefaultProps>,
    props: {
      src: '',
      className: icon.StyledActiveIcon,
      width: 15,
      height: 15,
      alt: 'active-icon',
    },
  },
  inActive: {
    icon: XCircleIcon as React.ComponentType<IconDefaultProps>,
    props: {
      src: '',
      className: icon.StyledInActiveIcon,
      width: 15,
      height: 15,
      alt: 'inActive-icon',
    },
  },
  search: {
    icon: MagnifyingGlassCircleIcon as React.ComponentType<IconDefaultProps>,
    props: {
      src: '/assets/svg/search.svg',
      className: icon.StyledInActiveIcon,
      width: 16,
      height: 16,
      alt: 'search-icon',
    },
  },
}

export default ICON
