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
  return (
    <motion.nav {...navAnimation} className="pt-15 pb-17.5 select-none" aria-label="Main navigation">

      <div className="px-25 flex items-center justify-between gap-[209.46px]">

        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Positivus Logo"
          className="h-9"
          {...logoAnimation}
        />

        <div className="flex items-center gap-10">

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
          </motion.ul>

          {/* Botão */}
          <button
            className="
            text-xl
            px-8.75 py-5 
            border border-dark rounded-button
    
            transition-all duration-300 ease-in-out
          hover:bg-dark hover:text-white
            hover:scale-[1.03] active:scale-[0.98]

            max-md:px-4 max-md:py-2
          "
          >
            Request a quote
          </button>

        </div>
      </div>
    </motion.nav>
  )
}