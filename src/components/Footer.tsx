import { useState } from 'react'
import Logo from '../assets/logo-white.png'

const navLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

function LinkedInIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="white" />
      <path d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z" fill="black" />
      <path d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z" fill="black" />
      <path d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z" fill="black" />
    </svg>

  )
}

function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z" fill="white" />
    </svg>


  )
}

function TwitterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="white" />
      <path d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z" fill="black" />
    </svg>

  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="px-25">
      <div className="bg-[#191A23] text-white px-15 pt-13.75 pb-12.5 rounded-t-card">

        {/* Top row */}
        <div className="flex items-center justify-between pb-16.5 max-md:flex-col max-md:items-start max-md:gap-8 max-md:pb-8 max-md:mb-8">
          <img
            src={Logo}
            alt={"Positivus Logo"}
          />

          <nav>
            <ul className="flex gap-10 flex-wrap max-md:gap-5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg text-white underline underline-offset-4 hover:text-[#B9FF66] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="size-7.5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Facebook" className="size-7.5  rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="size-7.5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex gap-38.5 mb-12.5 max-lg:flex-col max-lg:gap-10 max-md:mb-8">

          {/* Contact info */}
          <div className="flex flex-col gap-6.75">
            <span className="inline-flex items-center px-1.75 py-1 bg-[#B9FF66] rounded-[7px] text-xl font-medium text-[#191A23] w-fit">
              Contact us:
            </span>
            <div className="flex flex-col gap-5 max-w-90">
              <p className="text-lg text-white">
                Email:{' '}
                <a href="mailto:info@positivus.com" className="hover:text-[#B9FF66] transition-colors">
                  info@positivus.com
                </a>
              </p>
              <p className="text-lg text-white">
                Phone:{' '}
                <a href="tel:+15555678901" className="hover:text-[#B9FF66] transition-colors">
                  555-567-8901
                </a>
              </p>
              <p className="text-lg text-white pb-0">
                Address: 1234 Main St
                <h6 className='text-lg p-0 font-normal'> Moonstone City, Stardust State 12345
                </h6>
              </p>

            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 flex items-center w-max-[634px]">
            <div className="flex py-14.5 px-10 gap-5 bg-[#292A32] rounded-[14px] w-full max-sm:flex-col">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-[#ffffff] rounded-[14px] px-8.75 py-5.5 text-white text-lg outline-none focus:border-[#B9FF66] transition-colors placeholder:text-[#ffffff]"
              />
              <button className="px-8.75 py-5 bg-[#B9FF66] text-[#000000] rounded-[14px] text-xl font-normal hover:opacity-85 transition-opacity whitespace-nowrap flex-shrink-0">
                Subscribe to news
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-12.5 border-t border-[#ffffff] flex items-center gap-10 max-md:flex-col max-md:items-start max-md:gap-4 max-md:pt-8">
          <p className="text-lg text-white">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <a href="#" className="text-lg text-white underline underline-offset-4 hover:text-[#B9FF66] transition-colors">
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  )
}
