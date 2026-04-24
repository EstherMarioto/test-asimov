import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

interface Props {
  label: string
  title: ReactNode
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <>
      <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-violet-400">
        {label}
      </motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-400">
          {subtitle}
        </motion.p>
      )}
    </>
  )
}
