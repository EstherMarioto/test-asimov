import { motion } from 'framer-motion'

export type Case = {
    desc: string
}

type ICaseCardProps = {
    c: Case
    i: number
    isLast: boolean
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const fadeUpTransition = {
    duration: 0.5
}

export function CaseCard({ c, i, isLast }: ICaseCardProps) {
    return (
        <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            whileHover={{ y: -4 }}
            className={`
        flex flex-col gap-5 px-16 max-lg:px-10 max-md:px-0
        ${i === 0 ? 'pl-0' : ''}
        ${isLast ? 'pr-0 border-r-0' : 'border-r border-white'}
        max-md:border-r-0 max-md:border-b max-md:border-white
        max-md:pb-10 max-md:mb-10
        last:max-md:border-b-0 last:max-md:mb-0 last:max-md:pb-0
      `}
        >
            <p className="text-white text-lg leading-relaxed">
                {c.desc}
            </p>

            <ArrowLink />
        </motion.div>
    )
}

function ArrowLink() {
    return (
        <motion.div
            className="flex items-center gap-3 text-green text-xl cursor-pointer group w-fit"
            whileHover="hover"
        >
            <span className="group-hover:underline underline-offset-2">Learn more</span>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
            </svg>

        </motion.div>
    )
}