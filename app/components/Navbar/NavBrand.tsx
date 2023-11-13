import React from 'react'
import Link from 'next/link'
import Image from 'next/link'
import * as _ from '@assets/styles/navbar'

const NavBrand = () => {
  return (
    <Link href='/' className={_.StyledLink}>
      <h1 className={_.StyledTextLogo}> ClassMate</h1>
    </Link>
  )
}

export default NavBrand
