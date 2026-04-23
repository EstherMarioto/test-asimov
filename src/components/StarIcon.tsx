interface StarIconProps {
  size?: number
  color?: string
  className?: string
}

export default function StarIcon({ size = 160, color = '#191A23', className = '' }: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M80 0L84.2 75.8L160 80L84.2 84.2L80 160L75.8 84.2L0 80L75.8 75.8L80 0Z"
        fill={color}
      />
      <path
        d="M80 0L84.2 75.8L160 80L84.2 84.2L80 160L75.8 84.2L0 80L75.8 75.8L80 0Z"
        fill={color}
        transform="rotate(45 80 80)"
      />
    </svg>
  )
}
