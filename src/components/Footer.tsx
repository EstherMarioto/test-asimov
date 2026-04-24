import { useState } from 'react'
import Logo from '../assets/logo-white.png'
import { motion } from 'framer-motion'

const navLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

function LinkedInIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="15" fill="white" />
      <path d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z" fill="black" />
      <path d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z" fill="black" />
      <path d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z" fill="black" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z" fill="white" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="15" fill="white" />
      <path d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C8.58847 16.6271 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974Z" fill="black" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <motion.footer
      className="w-full px-4 sm:px-8 lg:px-16 xl:px-25"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#191A23] text-white px-6 sm:px-10 lg:px-15 pt-12 pb-10 rounded-t-card overflow-hidden">

        {/* TOP */}
        <div className="flex flex-col items-center xl:flex-row lg:items-center justify-between gap-8 pb-12">

          <img src={Logo} alt="Logo" className='max-w-45 max-h-7.25' />

          <nav className="w-full xl:w-auto flex justify-center">
            <ul className="flex flex-wrap gap-5 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white text-base lg:text-lg hover:text-[#B9FF66] transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4 justify-center xl:justify-start">
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col xl:flex-row lg:items-center gap-10 lg:gap-16 xl:gap-24 mb-10">

          {/* CONTACT */}
          <div className="flex flex-col gap-6 items-center xl:items-start">
            <span className="bg-[#B9FF66] text-[#191A23] px-2 py-1 rounded-md w-fit font-medium">
              Contact us:
            </span>

            <div className="flex flex-col gap-4 max-w-sm items-center xl:items-start">
              <p>
                Email:{' '}
                <a href="mailto:info@positivus.com" className="hover:text-[#B9FF66]">
                  info@positivus.com
                </a>
              </p>

              <p>
                Phone:{' '}
                <a href="tel:+15555678901" className="hover:text-[#B9FF66]">
                  555-567-8901
                </a>
              </p>

              <div className='flex flex-col items-center xl:items-start'>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER (50% no LG) */}
          <div className="w-full xl:w-1/2 xl:ml-auto max-w-158.5">
            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-[#292A32] rounded-xl w-full">

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white rounded-xl px-4 py-3 text-white"
              />

              <button className="bg-[#B9FF66] text-black px-6 py-3 rounded-xl whitespace-nowrap">
                Subscribe to news
              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white pt-8 flex flex-col md:flex-row gap-4 md:items-center">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline hover:text-[#B9FF66]">
            Privacy Policy
          </a>
        </div>

      </div>
    </motion.footer>
  )
}