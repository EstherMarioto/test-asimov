import { useState } from 'react'
import Plus from '../assets/plus.png'
import Less from '../assets/less.png'

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

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-25">

      {/* Header */}
      <div className="flex items-center gap-10 mb-20 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-10">
        <span className="inline-flex items-center px-1.75 py-1 bg-[#B9FF66] rounded-[7px] text-[40px] font-medium">
          Our Working Process
        </span>
        <p className="text-lg leading-relaxed max-w-73">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-7.5">
        {steps.map((step, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={step.number}
              className={`border border-[#191A23] rounded-card shadow-[0_5px_0_0_#191A23] pl-15 pr-14.25 py-10.25 transition-colors max-md:px-7 max-md:py-6 ${isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
                }`}
            >
              <button
                className="w-full flex items-center justify-between gap-5 cursor-pointer bg-transparent border-none"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-6.25 max-md:gap-4">
                  <span className="text-[60px] font-medium leading-none max-lg:text-[46px] max-md:text-[36px]">
                    {step.number}
                  </span>
                  <span className="text-[30px] font-medium text-left max-lg:text-2xl max-md:text-xl">
                    {step.title}
                  </span>
                </div>
                <div className="size-14.5 rounded-full border border-[#191A23] bg-[#f3f3f3] flex items-center justify-center flex-shrink-0 max-md:w-10 max-md:h-10 max-md:text-xl">
                  {isOpen ? <img src={Less} alt="Less" /> : <img src={Plus} alt="Plus" />}
                </div>
              </button>

              {isOpen && (
                <div className="mt-8 pt-7.5 mr-0.75 border-t border-[#191A23]">
                  <p className="text-lg">{step.desc}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </section>
  )
}
