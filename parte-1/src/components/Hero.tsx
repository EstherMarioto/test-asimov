import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import Amazon from '../assets/amazon.png'
import Dribbble from '../assets/dribbble.png'
import HubSpot from '../assets/hub.png'
import Netflix from '../assets/netflix.png'
import Notion from '../assets/notion.png'
import Zoom from '../assets/zoom.png'
import { CompanyLogo, type Logo } from './CompanyLogo'

const logos: Logo[] = [
  { src: Amazon, alt: 'Amazon' },
  { src: Dribbble, alt: 'Dribbble' },
  { src: HubSpot, alt: 'HubSpot' },
  { src: Notion, alt: 'Notion' },
  { src: Netflix, alt: 'Netflix' },
  { src: Zoom, alt: 'Zoom' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeUpTransition = {
  duration: 0.6
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 as const }
  }
}

const imageAnimation = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.2 }
}

const logosContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08 as const,
      delayChildren: 0.3
    }
  }
}

export default function Hero() {
  return (
    <section className="px-25 max-lg:px-5">

      {/* Main hero */}
      <div className="flex items-center gap-[108.54px] max-lg:flex-col max-lg:gap-10 mb-17.5 max-lg:mb-10">

        {/* Left */}
        <motion.div
          className="flex-1 flex flex-col gap-8.75 max-lg:order-2 max-lg:items-center max-lg:text-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h1
            className="text-[60px] font-medium max-lg:text-[36px]"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Navigating the digital landscape for success
          </motion.h1>

          <motion.p
            className="text-xl mr-8.25 max-lg:mr-0"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </motion.p>

          <motion.button
            className="self-start px-8.25 py-5 bg-dark text-white rounded-button text-xl max-lg:self-auto"
            variants={fadeUp}
            transition={fadeUpTransition}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a consultation
          </motion.button>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 flex justify-center items-center relative max-lg:order-1"
          {...imageAnimation}
        >
          <img
            src={heroImg}
            alt="Positivus digital marketing"
            className="relative z-10 w-full max-w-[600.46px]"
          />
        </motion.div>
      </div>

      {/* Company logos */}
      <motion.div
        className="flex items-center justify-between gap-[95.91px] max-xl:flex-wrap max-xl:justify-center max-xl:gap-8 max-xl:h-auto h-12"
        initial="hidden"
        animate="visible"
        variants={logosContainer}
      >
        {logos.map((logo) => (
          <CompanyLogo key={logo.alt} logo={logo} />
        ))}
      </motion.div>
    </section>
  )
}
