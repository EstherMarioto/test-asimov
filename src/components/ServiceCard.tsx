import { motion } from 'framer-motion'

export type Service = {
    title: string
    bg: string
    markBg: string
    dark?: boolean
    img: string
}

interface IServiceCardProps {
    svc: Service
}

const fadeUpCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

export function ServiceCard({ svc }: IServiceCardProps) {
    const lines = svc.title.split('\n')

    return (
        <motion.div
            variants={fadeUpCard}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`${svc.bg} border border-dark rounded-card shadow-[0_5px_0_0_#191A23] p-12.5 min-h-77.5 flex gap-4 max-md:flex-col max-md:p-8`}
        >
            <div className="flex flex-col flex-1 min-w-0 justify-between">
                <h3
                    className={`text-[30px] font-medium leading-tight ${svc.dark ? 'text-white' : 'text-dark'
                        }`}
                >
                    {lines.map((line, i) => (
                        <span key={i}>
                            <mark
                                className={`${svc.markBg} px-1.75 rounded-[7px]`}
                                style={{
                                    WebkitBoxDecorationBreak: 'clone',
                                    boxDecorationBreak: 'clone'
                                }}
                            >
                                {line}
                            </mark>
                            {i < lines.length - 1 && <br />}
                        </span>
                    ))}
                </h3>

                <div className={svc.dark ? 'text-white' : 'text-dark'}>
                    <ArrowLink dark={svc.dark} />
                </div>
            </div>

            <div className="flex items-center shrink-0">
                <motion.img
                    src={svc.img}
                    alt={svc.title}
                    className="max-w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    )
}

function ArrowLink({ dark = false }: { dark?: boolean }) {
    return (
        <motion.div
            className="flex items-center gap-3.75 mt-auto w-fit cursor-pointer group"
            whileHover="hover"
        >
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5" fill={dark ? "#FFFFFF" : "#191A23"} />
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill={dark ? "#191A23" : "#B9FF66"} />
            </svg>

            <span className="text-xl group-hover:underline underline-offset-2">Learn more</span>
        </motion.div>
    )
}