import Logo from '../assets/logo-black.png'
const navLinks = [
  { id: 1, title: 'About us', href: '#about-us' },
  { id: 2, title: 'Services', href: '#services' },
  { id: 3, title: 'Use Cases', href: '#use-cases' },
  { id: 4, title: 'Pricing', href: '#pricing' },
  { id: 5, title: 'Blog', href: '#blog' }
]

export default function Navbar() {
  return (
    <nav className="pt-15 pb-17.5">
      <div className="px-25 flex items-center justify-between gap-[209.46px]">
        <img src={Logo} alt={"Positivus Logo"} className='h-9' />

        <div className='flex items-center gap-10'>

          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-xl hover:opacity-60 transition-opacity"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <button className="px-8.75 py-5 border border-[#191A23] rounded-[14px] text-xl hover:bg-[#191A23] hover:text-white transition-all  max-md:px-4 max-md:py-2">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  )
}
