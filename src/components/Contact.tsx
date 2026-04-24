import { useState } from 'react'
import ContactImg from '../assets/contact.png'
import { motion } from 'framer-motion'

export default function Contact() {
  const [option, setOption] = useState<'hi' | 'quote'>('hi')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="px-25 pb-35 max-lg:px-5 max-lg:pb-14" id="contact">

      {/* Header */}

      <motion.div
        className="flex items-center gap-10 mb-20 max-lg:flex-col max-xl:items-start max-lg:gap-4 max-lg:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] max-lg:text-[28px] font-medium">
          Contact Us
        </span>
        <p className="text-lg leading-relaxed max-w-80.75">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </motion.div>

      <motion.div
        className="bg-light rounded-card pl-25 py-15 relative overflow-hidden max-lg:px-8 max-lg:py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="flex items-center xl:items-start max-lg:flex-col">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-139 flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 }
              }
            }}
          >

            {/* Radio options */}
            <div className="flex flex-col gap-8.75 sm:flex-row">
              <motion.label
                className="flex gap-3.5 cursor-pointer text-lg"
                whileTap={{ scale: 0.97 }}
              >
                <input
                  type="radio"
                  name="contact-option"
                  checked={option === 'hi'}
                  onChange={() => setOption('hi')}
                  className="appearance-none size-7 rounded-full border-2 border-dark bg-white cursor-pointer  checked:bg-green checked:shadow-[inset_0_0_0_4px_#FFFFFF] transition-all"
                />
                Say Hi
              </motion.label>
              <motion.label
                className="flex items-center gap-3.5 cursor-pointer text-lg"
                whileTap={{ scale: 0.97 }}
              >
                <input
                  type="radio"
                  name="contact-option"
                  checked={option === 'quote'}
                  onChange={() => setOption('quote')}
                  className="appearance-none size-7 rounded-full border-2 border-dark bg-white cursor-pointer  checked:bg-green checked:shadow-[inset_0_0_0_4px_#FFFFFF] transition-all"
                />
                Get a Quote
              </motion.label>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-6.25">
              <div className="flex flex-col gap-1.25">
                <label className="text-base ">Name</label>
                <motion.input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-7.5 py-4.5 border border-dark rounded-button bg-white text-lg outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition-all placeholder:text-[#898989]"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div className="flex flex-col gap-1.25">
                <label className="text-base">Email*</label>
                <motion.input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-7.5 py-4.5 border border-dark rounded-button bg-white text-lg outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition-all placeholder:text-[#898989]"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div className="flex flex-col gap-1.25">
                <label className="text-base">Message*</label>
                <motion.textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-7.5 py-4.5 border border-dark rounded-button bg-white text-lg outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition-all resize-none placeholder:text-[#898989]"
                  whileFocus={{ scale: 1.01 }}

                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-5 bg-dark text-white rounded-button text-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
        {/* Decoration */}
        <motion.div
          className="absolute -right-81.25 top-[8%] max-xl:hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <img src={ContactImg} alt="Contact Us" />
        </motion.div>
      </motion.div>

    </section>
  )
}
