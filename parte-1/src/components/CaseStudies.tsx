import { motion } from 'framer-motion'
import { CaseCard } from './CaseCard'

const cases = [
  {
    desc: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    desc: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    desc: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeUpTransition = {
  duration: 0.5
}

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15 as const
    }
  }
}
const fadeUpBig = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
export default function CaseStudies() {
  return (
    <section className="py-35 px-25 max-lg:px-5 max-lg:py-14" id="use-cases">

      {/* Header */}
      <motion.div
        className="flex items-center gap-10 mb-20 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={fadeUpTransition}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] max-lg:text-[28px] font-medium">
          Case Studies
        </span>
        <p className="text-lg leading-relaxed max-w-145">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </motion.div>

      {/* Cases */}
      <motion.div
        className="bg-dark rounded-card px-15 py-17.5 max-lg:px-8 max-lg:py-10"
        viewport={{ once: true }}
        {...fadeUpBig}>

        <motion.div
          className="grid grid-cols-3 max-lg:grid-cols-1 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={gridContainer}
        >
          {cases.map((c, i) => (
            <CaseCard
              key={i}
              c={c}
              i={i}
              isLast={i === cases.length - 1}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
