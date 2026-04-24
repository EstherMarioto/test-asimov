import { useState } from 'react'
import { motion } from 'framer-motion'
const testimonials = [
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="px-25 pb-35">
      {/* Header */}

      <motion.div
        className="flex items-center gap-10 mb-20 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] font-medium">
          Testimonials
        </span>
        <p className="text-lg leading-relaxed max-w-118.25">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services        </p>
      </motion.div>

      <motion.div
        className="bg-dark rounded-card pt-21 pb-17 max-md:py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        {/* Slider */}
        <div className="overflow-hidden px-15">
          <div
            className="flex gap-12.5 transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(calc(-${current * (100 / 3)}% - ${current * (28 / 3)}px))` }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="shrink-0 flex flex-col"
                style={{ width: 'calc(55% - 18.67px)', minWidth: '280px' }}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: i === current ? 1 : 0.6, scale: i === current ? 1 : 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <div className="border border-green rounded-card pt-12 px-13 pb-13 max-md:p-8">
                  <p className="text-white text-lg">"{t.quote}"</p>
                </div>

                <svg width="64" height="38.9" viewBox="0 0 64 38.9" fill="none" className="ml-15 -mt-px">
                  <line x1="0" y1="0.5" x2="64" y2="0.5" stroke="#191A23" strokeWidth="2" />
                  <path d="M0 0 L32 38.9 L64 0" stroke="#B9FF66" strokeWidth="1" />
                </svg>

                <div className="flex flex-col mt-5 pl-20">
                  <span className="text-xl font-medium text-green">{t.name}</span>
                  <span className="text-lg text-white">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-47.25 mt-31">

          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="size-12.75 rounded-full bg-transparent text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M21.5 12.5459C22.3284 12.5459 23 11.8743 23 11.0459C23 10.2175 22.3284 9.5459 21.5 9.5459L21.5 12.5459ZM0.439341 9.98524C-0.146446 10.571 -0.146446 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439296C11.5208 -0.146491 10.5711 -0.146491 9.98528 0.439296L0.439341 9.98524ZM21.5 9.5459L1.5 9.5459L1.5 12.5459L21.5 12.5459L21.5 9.5459Z" fill="white" fillOpacity={current === 0 ? 0.3 : 1} />
            </svg>
          </motion.button>

          <div className="flex gap-4.75 items-center">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className="border-none bg-transparent p-0 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg width="14" height="14" viewBox="0 0 14 14">
                  <motion.path
                    d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                    animate={{
                      fill: i === current ? '#B9FF66' : '#FFFFFF',
                      scale: i === current ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="size-12.75 rounded-full bg-transparent text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >


            <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z" fill="white" fillOpacity={current === testimonials.length - 1 ? 0.3 : 1} />
            </svg>
          </motion.button>
        </div>

      </motion.div>
    </section>
  )
}
