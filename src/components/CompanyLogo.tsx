import { motion } from 'framer-motion'

export type Logo = {
    src: string
    alt: string
}

type CompanyLogoProps = {
    logo: Logo
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

export function CompanyLogo({ logo }: CompanyLogoProps) {
    return (
        <motion.img
            src={logo.src}
            alt={logo.alt}
            className={`h-full w-auto object-contain grayscale ${logo.alt === 'Dribbble' ? 'scale-62' : ''
                }`}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
        />
    )
}