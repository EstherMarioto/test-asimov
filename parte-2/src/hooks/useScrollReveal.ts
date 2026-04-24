import { useRef } from 'react'
import { useInView, type UseInViewOptions } from 'framer-motion'

export function useScrollReveal(margin: UseInViewOptions['margin'] = '-80px') {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin })
  return { ref, inView } as const
}
