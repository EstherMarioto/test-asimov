import Logo from '../assets/logo-black.png'
import { motion } from 'framer-motion'

const navLinks = [
  { id: 1, title: 'About us', href: '#about-us' },
  { id: 2, title: 'Services', href: '#services' },
  { id: 3, title: 'Use Cases', href: '#use-cases' },
  { id: 4, title: 'Pricing', href: '#pricing' },
  { id: 5, title: 'Blog', href: '#blog' }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pt-15 pb-17.5"
    >
      <div className="px-25 flex items-center justify-between gap-[209.46px]">
        <motion.img
          src={Logo}
          alt="Positivus Logo"
          className="h-9"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className='flex items-center gap-10'>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a
                  href={link.href}
                  className="text-xl relative group text-black"
                >
                  {link.title}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>

                </a>
              </motion.li>
            ))}
          </motion.ul>

          <button className="px-8.75 py-5 border border-dark rounded-button text-xl 
        hover:bg-dark hover:text-white 
        transition-all duration-300 ease-in-out 
        hover:scale-[1.03] active:scale-[0.98]
        max-md:px-4 max-md:py-2">
            Request a quote
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
