import Image from 'next/image'
import {
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/20/solid'
import { IconConstant } from '@interfaces/Consants'
// @styles
import { icon } from '@assets/styles'

const ICON: IconConstant = {
  active: {
    icon: CheckCircleIcon,
    props: {
      className: icon.StyledActiveIcon,
      width: 15,
      height: 15,
      alt: 'active-icon',
    },
  },
  inActive: {
    icon: XCircleIcon,
    props: {
      className: icon.StyledInActiveIcon,
      width: 15,
      height: 15,
      alt: 'inActive-icon',
    },
  },
  search: {
    icon: MagnifyingGlassCircleIcon,
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
