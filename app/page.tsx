import Image from 'next/image'
import { def } from '@assets/styles'
import { NavSidebar } from '@components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <section className='px-6 md:px-20 py-24 align-middle border border-red-500'>
        <div className='text-4xl container'>
          <NavSidebar />
        </div>
        <div className='flex flex-col justify-center items-end'>
          <h1 className={def.StyledDashboardH1}> "...stay curious"</h1>
        </div>
      </section>
    </>
  )
}
