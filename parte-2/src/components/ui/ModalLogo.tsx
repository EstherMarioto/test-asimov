interface Props {
  size?: 'sm' | 'md'
}

export function ModalLogo({ size = 'md' }: Props) {
  const box = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'
  const letter = size === 'sm' ? 'text-xs' : 'text-sm'
  const text = size === 'sm' ? 'text-sm' : 'text-base'

  return (
    <div className="flex items-center gap-2.5">
      <div className={`flex items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-cyan-500 ${box}`}>
        <span className={`font-bold text-white ${letter}`}>A</span>
      </div>
      <span className={`font-semibold text-white ${text}`}>
        asimov<span className="text-violet-400">.</span>
      </span>
    </div>
  )
}
