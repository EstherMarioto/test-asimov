import Picture from '../assets/picture.png'
import Picture2 from '../assets/picture2.png'
import Picture3 from '../assets/picture3.png'
import Picture4 from '../assets/picture4.png'
import Picture5 from '../assets/picture5.png'
import Picture6 from '../assets/picture6.png'

const members = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    initials: 'JS',
    color: '#B9FF66',
    img: Picture,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    initials: 'JD',
    color: '#6BC5FF',
    img: Picture2,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    initials: 'MB',
    color: '#FF9F66',
    img: Picture3,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    initials: 'EJ',
    color: '#FF6B6B',
    img: Picture4,

  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Adept at building brand presence and engagement.',
    initials: 'BW',
    color: '#A78BFA',
    img: Picture5,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    initials: 'SK',
    color: '#34D399',
    img: Picture6,
  },
]

function LinkedInIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="17" fill="black" />
      <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
      <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66" />
      <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66" />
    </svg>

  )
}

export default function Team() {
  return (
    <section className="pt-35 pb-25 px-25" id="about">

      {/* Header */}

      <div className="flex items-center gap-10 mb-20 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-10">
        <span className="inline-flex items-center px-1.75 py-1 bg-[#B9FF66] rounded-[7px] text-[40px] font-medium">
          Team
        </span>
        <p className="text-lg leading-relaxed max-w-118.25">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
        {members.map((m) => (
          <div
            key={m.name}
            className="border border-[#191A23] rounded-card shadow-[0_5px_0_0_#191A23] py-10 px-8.75 bg-white flex flex-col gap-7"
          >
            <div className='flex items-start justify-between'>
              <div className="flex items-end gap-5 w-full ">
                <img src={m.img} alt={m.name} />

                <div className='flex flex-col justify-between flex-1'>
                  <button className="shrink-0 cursor-pointer bg-transparent border-none p-0 hover:opacity-70 transition-opacity flex justify-end">
                    <LinkedInIcon />
                  </button>

                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-medium">{m.name}</span>
                    <span className="text-lg">{m.role}</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="h-px bg-[#191A23]" />

            <p className="text-lg">{m.bio}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-end'>
        <button className="mt-10 px-19 py-5 border border-transparent bg-[#191A23] text-white rounded-[14px] text-xl hover:bg-[#ffffff] hover:text-[#191A23] hover:border-[#191A23] transition-all flex-shrink-0 max-md:w-full">
          See all team
        </button>
      </div>
    </section>
  )
}
