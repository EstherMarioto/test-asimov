import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Curso', href: '#curso' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              asimov<span className="text-violet-400">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="text-sm text-slate-500 transition-colors hover:text-white">
              Entrar
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#030308] transition-colors hover:bg-slate-100"
            >
              Começar agora
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 flex flex-col gap-2 border-t border-white/[0.06] pt-3">
                <a href="#" className="px-4 py-2.5 text-center text-sm text-slate-400 hover:text-white">
                  Entrar
                </a>
                <a
                  href="#"
                  className="rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#030308] hover:bg-slate-100"
                >
                  Começar agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
