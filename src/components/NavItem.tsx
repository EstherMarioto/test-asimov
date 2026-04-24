import { motion } from 'framer-motion'

export type NavLink = {
    id: number
    title: string
    href: string
}
interface INavItemProps {
    link: NavLink
}

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
}

export function NavItem({ link }: INavItemProps) {
    return (
        <motion.li variants={itemVariants}>
            <a href={link.href} className="text-xl relative group text-black text-nowrap">
                {link.title}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
        </motion.li>
    )
}