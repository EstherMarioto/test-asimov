import Search from '../assets/search.svg'
import PayPerClick from '../assets/pay-per-click.svg'
import Social from '../assets/social.svg'
import Email from '../assets/email.svg'
import Content from '../assets/content.svg'
import Analytics from '../assets/analytics.svg'
import { motion } from 'framer-motion'
import { ServiceCard } from './ServiceCard'

const services = [
  {
    title: 'Search engine\noptimization',
    bg: 'bg-light',
    markBg: 'bg-green',
    dark: false,
    img: Search,
  },
  {
    title: 'Pay-per-click\nadvertising',
    bg: 'bg-green',
    markBg: 'bg-white',
    dark: false,
    img: PayPerClick,
  },
  {
    title: 'Social Media\nMarketing',
    bg: 'bg-dark',
    markBg: 'bg-white',
    dark: true,
    img: Social,
  },
  {
    title: 'Email\nMarketing',
    bg: 'bg-light',
    markBg: 'bg-green',
    dark: false,
    img: Email,
  },
  {
    title: 'Content\nCreation',
    bg: 'bg-green',
    markBg: 'bg-white',
    dark: false,
    img: Content,
  },
  {
    title: 'Analytics and\nTracking',
    bg: 'bg-dark',
    markBg: 'bg-green',
    dark: true,
    img: Analytics,
  },
]

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12 as const
    }
  }
}
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Services() {
  return (
    <section className="pt-35 pb-25 px-25" id="services">

      {/* Header */}
      <motion.div
        className="flex items-center gap-10 mb-20 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-10"
        {...fadeIn}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] font-medium">
          Services
        </span>
        <p className="text-lg leading-relaxed max-w-145">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={gridContainer}

      >
        {services.map((svc) => (
          <ServiceCard key={svc.title} svc={svc} />
        ))}
      </motion.div>

    </section>
  )
}
