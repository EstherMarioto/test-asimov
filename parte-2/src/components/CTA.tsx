import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Infinity, Award, Users } from 'lucide-react'
import { container, fadeUp } from '../lib/motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionDivider, GradientText } from './ui'

const PERKS = [
  { icon: Infinity, label: 'Acesso vitalício' },
  { icon: Award, label: 'Certificado incluído' },
  { icon: ShieldCheck, label: '7 dias de garantia' },
  { icon: Users, label: 'Comunidade no Discord' },
]

const AVATAR_COLORS = [
  'bg-violet-500',
  'bg-sky-500',
  'bg-pink-500',
  'bg-amber-500',
  'bg-emerald-500',
]

interface Props {
  onComecar: () => void
}

export function CTA({ onComecar }: Props) {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="cta" className="relative overflow-hidden bg-[#030308] pb-20 pt-16 sm:pb-28 sm:pt-20">
      <SectionDivider />

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-linear-to-br from-violet-950/70 via-[#0c0c1a] to-cyan-950/50 p-8 text-center sm:p-14 lg:p-20"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(124,58,237,0.3) 0%, transparent 60%)' }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative">
            <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-violet-400">
              Comece hoje
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Sua carreira em tech{' '}
              <GradientText>começa agora</GradientText>
            </motion.h2>

            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              Junte-se a mais de 20.000 alunos que já transformaram suas carreiras com Python e IA.
              Sem enrolação, sem pré-requisitos.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATAR_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0c0c1a] text-xs font-bold text-white ${color}`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1.5">4.9 de 5</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-500">+20.000 alunos satisfeitos</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {PERKS.map(p => (
                <span
                  key={p.label}
                  className="flex items-center gap-1.5 rounded-full border border-white/9 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300"
                >
                  <p.icon size={13} className="text-violet-400" />
                  {p.label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <motion.button
                onClick={onComecar}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-600/25 transition-colors hover:bg-violet-500 sm:px-10 sm:text-lg"
              >
                Quero começar agora
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-sm text-slate-600">
              Pagamento seguro · Acesso imediato · 7 dias de garantia
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 text-center text-sm text-slate-700"
      >
        © {new Date().getFullYear()} Asimov Academy · Todos os direitos reservados
      </motion.p>
    </section>
  )
}
