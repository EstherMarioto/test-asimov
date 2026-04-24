import { motion } from 'framer-motion'

type Member = {
    name: string
    role: string
    bio: string
    img: string
}

type TeamCardProps = {
    member: Member
}

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

export function TeamCard({ member }: TeamCardProps) {
    return (
        <motion.div
            className="border border-dark rounded-card shadow-[0_5px_0_0_#191A23] py-10 px-8.75 bg-white flex flex-col gap-7"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
        >
            {/* Top */}
            <div className="flex items-center gap-5">
                <motion.img
                    src={member.img}
                    alt={member.name}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="flex flex-col flex-1 gap-1">
                    <div className="flex justify-end">
                        <button
                            aria-label={`LinkedIn de ${member.name}`}
                            className="hover:scale-105 transition"
                        >
                            <LinkedInIcon />
                        </button>
                    </div>

                    <span className="text-xl font-medium">{member.name}</span>
                    <span className="text-lg">{member.role}</span>
                </div>
            </div>

            {/* Divider */}
            <motion.div
                className="h-px bg-dark"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: 'left' }}
            />

            {/* Bio */}
            <p className="text-lg">{member.bio}</p>
        </motion.div>
    )
}