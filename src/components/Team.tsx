import Picture from '../assets/picture.png'
import Picture2 from '../assets/picture2.png'
import Picture3 from '../assets/picture3.png'
import Picture4 from '../assets/picture4.png'
import Picture5 from '../assets/picture5.png'
import Picture6 from '../assets/picture6.png'
import { motion } from 'framer-motion'
import { TeamCard } from './TeamCard'

const members = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    img: Picture,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    img: Picture2,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    img: Picture3,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    img: Picture4,

  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Adept at building brand presence and engagement.',
    img: Picture5,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    img: Picture6,
  },
]

export default function Team() {
  return (
    <section className="pt-35 pb-25 px-25 max-lg:px-5 max-lg:pt-14 max-lg:pb-10" id="about">

      {/* Header */}

      <motion.div
        className="flex items-center gap-10 mb-20 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center px-1.75 py-1 bg-green rounded-[7px] text-[40px] max-lg:text-[28px] font-medium">
          Team
        </span>
        <p className="text-lg leading-relaxed max-w-118.25">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-lg:gap-6 max-xl:grid-cols-2"
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
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </motion.div>
      <div className='flex justify-end'>
        <motion.button
          className="mt-10 px-19 py-5 border border-transparent bg-dark text-white rounded-button text-xl shrink-0 max-lg:w-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          See all team
        </motion.button>
      </div>
    </section>
  )
}
