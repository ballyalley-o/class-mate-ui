import Image from 'next/image'
import { NavSidebar } from '@components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='text-4xl'>
          <NavSidebar />
        </div>
      </section>
    </>
  )
}
