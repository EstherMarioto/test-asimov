import { type ReactNode } from 'react'

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
