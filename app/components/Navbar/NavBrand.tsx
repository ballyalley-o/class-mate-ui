import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GLOBAL } from '@config'
import * as _ from '@assets/styles/navbar'
// import { NAV } from '@constants'

const NavBrand = () => {
  return (
    <Link href='/' className={_.StyledLink}>
      <Image src={GLOBAL.brand.logo} alt='logo' width={200} height={40} />
    </Link>
  )
}

export default NavBrand
