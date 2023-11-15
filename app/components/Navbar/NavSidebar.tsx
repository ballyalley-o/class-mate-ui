'use client'

import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { motion } from 'framer-motion'

function NavSidebar() {
  return (
    <Tab.Group defaultIndex={1} vertical={true} as={Fragment}>
      <motion.section className='flex'>
        <Tab.List className='flex flex-col items-start p-2 h-32 w-32'>
          <Tab className='hover:text-5xl'>
            <Link href='/'>Home</Link>
          </Tab>

          <Tab className='hover:text-5xl'>Students</Tab>

          <Tab className='hover:text-5xl'>Cohort</Tab>
        </Tab.List>
        <Tab.Panels className='flex flex-col ml-10 items-start relative border border-spacing-2 rounded border-gray-200 p-2 w-32 h-32'>
          <Tab.Panel className='w-full'>
            <Link href='/'>Home</Link>
          </Tab.Panel>

          <Tab.Panel className='w-full'>Students</Tab.Panel>

          <Tab.Panel className='w-full'>Cohort</Tab.Panel>
        </Tab.Panels>
      </motion.section>
    </Tab.Group>
  )
}

export default NavSidebar
