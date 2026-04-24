import Proposal from '../assets/proposal.png'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeUpTransition = {
  duration: 0.5
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12 as const
    }
  }
}

const imageAnimation = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.2 }
}

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function CtaBanner() {
  return (
    <motion.section
      className="py-[23.5px] px-25 max-lg:px-5"
      {...sectionAnimation}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-light rounded-card p-15 flex items-center relative max-xl:flex-col max-xl:px-8 max-xl:py-10"
        initial="hidden"
        whileInView="visible"
        variants={container}

      >

        <div
          className="flex flex-col gap-6.5 max-w-125"
        >
          <motion.h2
            className="text-[30px] font-medium leading-snug"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Let's make things happen
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </motion.p>
          <motion.button
            className="self-start px-8.75 py-5 bg-dark text-white rounded-button text-xl max-lg:self-stretch"
            variants={fadeUp}
            transition={fadeUpTransition}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get your free proposal
          </motion.button>
        </div>

        <motion.div
          className="absolute right-0 max-xl:hidden"
          {...imageAnimation}

        >
          <img
            src={Proposal}
            alt="Free Proposal"
            className="w-full h-auto scale-110"
          />
        </motion.div>

      </motion.div>
    </motion.section>
  )
}
