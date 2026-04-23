import Proposal from '../assets/proposal.png'
export default function CtaBanner() {
  return (
    <section className="py-[23.5px] px-25">
      <div className="bg-[#F3F3F3] rounded-card p-15 flex items-center relative max-md:flex-col max-md:px-8 max-md:py-10">

        <div className="flex flex-col gap-6.5 max-w-125">
          <h2 className="text-[30px] font-medium leading-snug">
            Let's make things happen
          </h2>
          <p className="text-lg leading-relaxed">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="self-start px-8.75 py-5 bg-[#191A23] text-white rounded-[14px] text-xl hover:opacity-85 transition-opacity">
            Get your free proposal
          </button>
        </div>

        <div className="absolute right-0 max-md:hidden">
          <img
            src={Proposal}
            alt="Free Proposal"
            className="w-full h-auto scale-110"
          />
        </div>

      </div>
    </section>
  )
}
