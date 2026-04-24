import { useState } from 'react'
import Logo from '../assets/logo-black.png'
import { motion } from 'framer-motion'
import { NavItem, type NavLink } from './NavItem'


const navLinks: NavLink[] = [
  { id: 1, title: 'About us', href: '#about-us' },
  { id: 2, title: 'Services', href: '#services' },
  { id: 3, title: 'Use Cases', href: '#use-cases' },
  { id: 4, title: 'Pricing', href: '#pricing' },
  { id: 5, title: 'Blog', href: '#blog' }
]

const navAnimation = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const }
}

const logoAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1 as const
    }
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav {...navAnimation} className="pt-15 pb-17.5 max-lg:pt-5 max-lg:pb-5 select-none" aria-label="Main navigation">

      <div className="px-25 max-xl:px-5 flex items-center justify-between gap-5">

        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Positivus Logo"
          className="h-9"
          {...logoAnimation}
        />

        {/* Desktop nav */}
        <div className="flex items-center gap-10 max-lg:hidden">

          {/* Lista */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <NavItem key={link.id} link={link} />
            ))}

            <button
              className="
            text-xl
            px-8.75 py-5
            border border-dark rounded-button

            transition-all duration-300 ease-in-out
          hover:bg-dark hover:text-white
            hover:scale-[1.03] active:scale-[0.98]
          "
            >
              Request a quote
            </button>
          </motion.ul>

          {/* Botão */}


        </div>

        {/* Hamburger - tablet/mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden max-lg:flex flex-col justify-center gap-1.5 size-8 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-full bg-dark rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-full bg-dark rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-dark rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Tablet/mobile dropdown */}
      {open && (
        <div className="hidden max-lg:flex flex-col gap-6 px-5 pb-6 pt-6 mt-4 border-t border-dark/10">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl text-dark hover:text-green transition-colors"
            >
              {link.title}
            </a>
          ))}
          <button className="text-xl px-8.75 py-5 border border-dark rounded-button transition-all duration-300 hover:bg-dark hover:text-white self-start">
            Request a quote
          </button>
        </div>
      )}
    </motion.nav>
  )
}
