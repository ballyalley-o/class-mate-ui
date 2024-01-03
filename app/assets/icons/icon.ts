import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
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
    },
  },
  inActive: {
    icon: XCircleIcon,
    props: {
      className: icon.StyledInActiveIcon,
      width: 15,
      height: 15,
    },
  },
}

export default ICON
