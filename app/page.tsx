import Image from 'next/image'
import { def } from '@assets/styles'
import { Hero, Mid } from '@components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Hero />
      <Mid />
    </>
  )
}
