import Proposal from '../assets/proposal.png'
import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <motion.section
      className="py-[23.5px] px-25"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-light rounded-card p-15 flex items-center relative max-md:flex-col max-md:px-8 max-md:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >

        <motion.div
          className="flex flex-col gap-6.5 max-w-125"
        >
          <motion.h2
            className="text-[30px] font-medium leading-snug"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            Let's make things happen
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </motion.p>
          <motion.button
            className="self-start px-8.75 py-5 bg-dark text-white rounded-button text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get your free proposal
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute right-0 max-md:hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
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
