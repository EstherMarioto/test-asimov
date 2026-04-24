import { motion } from 'framer-motion'
import { Zap, Bot, Users, Award, Infinity, Briefcase } from 'lucide-react'
import { container, fadeUp } from '../lib/motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionDivider, SectionHeader, GradientText } from './ui'

const FEATURES = [
  {
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    title: 'Método direto ao ponto',
    desc: 'Sem slides infinitos nem teoria excessiva. Você escreve código desde a primeira aula.',
  },
  {
    icon: Bot,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'IA integrada desde o início',
    desc: 'OpenAI, agentes, RAG e automações entram no currículo já no módulo 1.',
  },
  {
    icon: Users,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'Comunidade de +20.000 alunos',
    desc: 'Discord ativo com mentores, eventos ao vivo e networking real.',
  },
  {
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Certificado reconhecido',
    desc: 'Emitido pela Asimov Academy — referência em tecnologia no Brasil.',
  },
  {
    icon: Infinity,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    title: 'Acesso vitalício',
    desc: 'Pague uma vez. Acesse para sempre, incluindo todas as atualizações futuras.',
  },
  {
    icon: Briefcase,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    title: 'Foco em empregabilidade',
    desc: 'Saia com um portfólio real de projetos para mostrar no LinkedIn e em entrevistas.',
  },
]

const STATS = [
  { value: '+40h', label: 'de conteúdo' },
  { value: '+20k', label: 'alunos formados' },
  { value: '8', label: 'módulos práticos' },
  { value: '100%', label: 'online e no seu ritmo' },
]

export function Course() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="curso" className="relative overflow-hidden bg-[#030308] py-28 sm:py-32">
      <SectionDivider />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mx-auto max-w-2xl text-center"
        >
          <SectionHeader
            label="O Curso"
            title={<>Tudo que você precisa para <GradientText>virar dev</GradientText> de verdade</>}
            subtitle="Um currículo construído junto com o mercado, para que cada hora de estudo vire uma habilidade real."
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(f => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/7 bg-white/3 p-6 transition-colors hover:border-white/12 hover:bg-white/5"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.bg}`}>
                <f.icon size={20} className={f.color} />
              </div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/7 bg-white/7 sm:grid-cols-4"
        >
          {STATS.map(s => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-1 bg-[#030308] px-6 py-8"
            >
              <span className="text-3xl font-bold text-white">{s.value}</span>
              <span className="text-sm text-slate-500">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
