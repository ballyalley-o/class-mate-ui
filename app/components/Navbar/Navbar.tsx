import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as _ from '@assets/styles/navbar'
import NavBrand from './NavBrand'

const Navbar = () => {
  return (
    <header className={_.StyledHeader}>
      <nav className={_.StyledNav}>
        <div className={_.StyledIconsContainer}>
          <NavBrand />
          <div className={_.StyledIconsContainer}></div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
