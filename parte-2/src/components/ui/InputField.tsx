import { type ComponentType, type ReactNode } from 'react'

interface Props {
  icon: ComponentType<{ size?: number; className?: string }>
  type?: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  suffix?: ReactNode
}

export function InputField({ icon: Icon, type = 'text', placeholder, value, onChange, onKeyDown, suffix }: Props) {
  return (
    <div className="group relative">
      <Icon
        size={15}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-violet-400"
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`w-full rounded-xl border border-white/8 bg-white/4 py-3.5 pl-10 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/60 focus:bg-white/6 focus:ring-1 focus:ring-violet-500/20 ${suffix ? 'pr-12' : 'pr-4'}`}
      />
      {suffix && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">{suffix}</div>
      )}
    </div>
  )
}
