import heroImg from '../assets/hero.png'
import Amazon from '../assets/amazon.png'
import Dribbble from '../assets/dribbble.png'
import HubSpot from '../assets/hub.png'
import Netflix from '../assets/netflix.png'
import Notion from '../assets/notion.png'
import Zoom from '../assets/zoom.png'

const logos = [
  { src: Amazon, alt: 'Amazon' },
  { src: Dribbble, alt: 'Dribbble' },
  { src: HubSpot, alt: 'HubSpot' },
  { src: Notion, alt: 'Notion' },
  { src: Netflix, alt: 'Netflix' },
  { src: Zoom, alt: 'Zoom' }
]

export default function Hero() {
  return (
    <section className="px-25">

      {/* Main hero */}
      <div className="flex items-center gap-[108.54px] mb-17.5 max-md:flex-col max-md:mb-10">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-8.75 max-md:order-2">
          <h1 className="text-[60px] font-medium max-lg:text-[46px] max-md:text-[36px]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl  mr-8.25">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="self-start px-8.25 py-5 bg-[#191A23] text-white rounded-[14px] text-xl hover:opacity-85 transition-opacity">
            Book a consultation
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center items-center relative max-md:order-1">
          <img
            src={heroImg}
            alt="Positivus digital marketing"
            className="relative z-10 w-full max-w-[600.46px]"
          />
        </div>
      </div>

      {/* Company logos */}
      <div className="flex items-center justify-between gap-[95.91px] max-md:flex-wrap max-md:justify-center max-md:gap-8 h-12">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className={`h-full w-auto object-contain grayscale ${logo.alt === 'Dribbble' ? 'scale-62' : ''
              }`}
          />
        ))}
      </div>
    </section>
  )
}
