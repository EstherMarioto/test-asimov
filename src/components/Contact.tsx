import { useState } from 'react'
import ContactImg from '../assets/contact.png'
export default function Contact() {
  const [option, setOption] = useState<'hi' | 'quote'>('hi')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="px-25 pb-35" id="contact">

      {/* Header */}

      <div className="flex items-center gap-10 mb-20 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-10">
        <span className="inline-flex items-center px-1.75 py-1 bg-[#B9FF66] rounded-[7px] text-[40px] font-medium">
          Contact Us
        </span>
        <p className="text-lg leading-relaxed max-w-80.75">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="bg-[#F3F3F3] rounded-card pl-25 py-15 relative overflow-hidden max-lg:px-15 max-md:px-8 max-md:py-10">

        <div className="flex items-start max-md:flex-col">

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-139 flex flex-col gap-10">

            {/* Radio options */}
            <div className="flex gap-8.75">
              <label className="flex items-center gap-3.5 cursor-pointer text-lg">
                <input
                  type="radio"
                  name="contact-option"
                  checked={option === 'hi'}
                  onChange={() => setOption('hi')}
                  className="appearance-none size-7 rounded-full border-2 border-dark bg-white cursor-pointer  checked:bg-green checked:shadow-[inset_0_0_0_4px_#FFFFFF] transition-all"
                />
                Say Hi
              </label>
              <label className="flex items-center gap-3.5 cursor-pointer text-lg">
                <input
                  type="radio"
                  name="contact-option"
                  checked={option === 'quote'}
                  onChange={() => setOption('quote')}
                  className="appearance-none size-7 rounded-full border-2 border-dark bg-white cursor-pointer  checked:bg-green checked:shadow-[inset_0_0_0_4px_#FFFFFF] transition-all"
                />
                Get a Quote
              </label>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-6.25">
              <div className="flex flex-col gap-1.25">
                <label className="text-base ">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-7.5 py-4.5 border border-[#191A23] rounded-[14px] bg-white text-lg outline-none focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/30 transition-all placeholder:text-[#898989]"
                />
              </div>

              <div className="flex flex-col gap-1.25">
                <label className="text-base">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-7.5 py-4.5 border border-[#191A23] rounded-[14px] bg-white text-lg outline-none focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/30 transition-all placeholder:text-[#898989]"
                />
              </div>

              <div className="flex flex-col gap-1.25">
                <label className="text-base">Message*</label>
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-7.5 py-4.5 border border-[#191A23] rounded-[14px] bg-white text-lg outline-none focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/30 transition-all resize-none placeholder:text-[#898989]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#191A23] text-white rounded-[14px] text-xl hover:opacity-85 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Decoration */}
        <div className="absolute -right-81.25 top-[8%] max-md:hidden">
          <img
            src={ContactImg}
            alt={"Contact Us"}
          />
        </div>
      </div>

    </section>
  )
}
