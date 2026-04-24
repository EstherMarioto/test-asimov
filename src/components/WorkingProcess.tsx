import { useState } from 'react'
import Plus from '../assets/plus.png'
import Less from '../assets/less.png'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    desc: 'We conduct in-depth market research and competitor analysis to identify opportunities and develop a customized strategy that aligns with your business objectives and target audience.',
  },
  {
    number: '03',
    title: 'Implementation',
    desc: 'Our expert team executes the agreed-upon strategy using the latest tools and best practices, ensuring every campaign element is optimized for maximum performance.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    desc: 'We continuously monitor campaign performance and make data-driven adjustments to maximize ROI and ensure your marketing efforts are delivering the best possible results.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    desc: 'We provide comprehensive reports on campaign performance, including key metrics, insights, and recommendations. Regular communication ensures you are always informed and aligned with our efforts.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    desc: 'We believe in continuous improvement and regularly review and refine our strategies based on performance data, industry trends, and your evolving business needs to ensure long-term success.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 as const }
  }
}

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-25 max-lg:px-5">

      {/* Header */}
      <motion.div
        className="flex items-center gap-10 mb-20 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:mb-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] max-lg:text-[28px] font-medium">
          Our Working Process
        </span>
        <p className="text-lg leading-relaxed max-w-73">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        className="flex flex-col gap-7.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {steps.map((step, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={step.number}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className={`
                border border-dark rounded-card
                shadow-[0_5px_0_0_#191A23]
                pl-15 pr-14.25 py-10.25
                transition-colors
                max-lg:px-7 max-lg:py-6
                ${isOpen ? 'bg-green' : 'bg-light'}
            `}
            >
              <motion.button
                className="w-full flex items-center justify-between gap-5 cursor-pointer bg-transparent border-none"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`step-${i}`}
                id={`trigger-${i}`}
                type="button"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-6.25 max-lg:gap-4 min-w-0 flex-1">
                  <span className="text-[60px] font-medium leading-none max-lg:text-[36px] max-sm:text-[28px]">
                    {step.number}
                  </span>
                  <span className="text-[30px] font-medium text-left max-lg:text-xl">
                    {step.title}
                  </span>
                </div>
                <motion.div
                  className="size-14.5 rounded-full border border-dark bg-light flex items-center justify-center shrink-0 max-lg:w-10 max-lg:h-10 max-sm:w-8 max-sm:h-8"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <img src={Less} alt="Collapse" /> : <img src={Plus} alt="Expand" />}
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    id={`step-${i}`}
                  >
                    <div className="mt-8 pt-7.5 mr-0.75 border-t border-dark">
                      <p className="text-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>

    </section>
  )
}
