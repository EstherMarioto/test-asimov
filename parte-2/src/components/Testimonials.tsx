import { motion } from 'framer-motion'
import { container, fadeUp } from '../lib/motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionDivider, SectionHeader, GradientText } from './ui'

const TESTIMONIALS = [
  {
    name: 'Rafaela Souza',
    role: 'Analista de Dados → Dev Python',
    avatar: 'RS',
    color: 'bg-violet-500',
    text: 'Eu tinha medo de nunca conseguir aprender a programar. Em 4 meses já estava usando Python no meu trabalho e fui promovida. O método da Asimov é diferente — você aprende fazendo, não só lendo.',
  },
  {
    name: 'Carlos Mendes',
    role: 'Engenheiro Mecânico reconvertido',
    avatar: 'CM',
    color: 'bg-cyan-500',
    text: 'Migrei de engenharia para dev aos 34 anos. Parecia impossível, mas a comunidade e o suporte me mantiveram na trilha. Hoje trabalho em uma startup de IA.',
  },
  {
    name: 'Bianca Ferreira',
    role: 'Freelancer de automações',
    avatar: 'BF',
    color: 'bg-pink-500',
    text: 'Comecei sem saber absolutamente nada de programação. Hoje vivo de automatizar processos para pequenas empresas com Python. O módulo de agentes com IA foi o divisor de águas da minha renda.',
  },
  {
    name: 'Pedro Alves',
    role: 'Estudante de Sistemas',
    avatar: 'PA',
    color: 'bg-amber-500',
    text: 'Complementa perfeitamente a faculdade. Enquanto a universidade é teórica, aqui eu aprendo na prática. Já uso o que aprendo nos projetos e nas disciplinas.',
  },
  {
    name: 'Mariana Costa',
    role: 'Professora → Desenvolvedora',
    avatar: 'MC',
    color: 'bg-emerald-500',
    text: 'Tentei aprender em outros lugares e nunca consegui. A Asimov foi diferente. Em 6 meses mudei de carreira completamente. A comunidade te mantém motivado nos dias difíceis.',
  },
  {
    name: 'Lucas Teixeira',
    role: 'Dev backend em startup',
    avatar: 'LT',
    color: 'bg-sky-500',
    text: 'Já tinha base em programação mas queria dominar IA. O módulo de agentes e RAG me colocou na vanguarda. Meu salário aumentou 40% depois que adicionei os projetos ao portfólio.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Marketing → Ciência de Dados',
    avatar: 'FL',
    color: 'bg-rose-500',
    text: 'O que me surpreendeu foi a qualidade do suporte. Sempre que travei, tinha alguém no Discord disposto a ajudar. O conteúdo é excelente, mas a comunidade faz toda a diferença.',
  },
  {
    name: 'André Santos',
    role: 'Servidor público aposentado',
    avatar: 'AS',
    color: 'bg-indigo-500',
    text: 'Aprendi Python aos 52 anos e hoje faço automações para ajudar minha filha no negócio dela. Nunca pensei que seria possível, mas o método funciona para qualquer idade.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm text-amber-400">★</span>
      ))}
    </div>
  )
}

export function Testimonials() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-[#030308] py-28 sm:py-32">
      <SectionDivider />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mx-auto max-w-2xl text-center"
        >
          <SectionHeader
            label="Depoimentos"
            title={<>Quem começou aqui <GradientText>não voltou atrás</GradientText></>}
            subtitle="Mais de 20.000 alunos transformaram suas carreiras com a Asimov Academy."
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-8 flex justify-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-2xl border border-white/7 bg-white/3 px-5 py-3 sm:px-6"
          >
            <Stars />
            <span className="text-sm font-semibold text-white">4.9 / 5.0</span>
            <span className="hidden text-slate-600 sm:block">·</span>
            <span className="hidden text-sm text-slate-400 sm:block">+4.200 avaliações verificadas</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIALS.map(t => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-white/7 bg-white/3 p-5 transition-colors hover:border-white/12 hover:bg-white/5"
            >
              <Stars />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${t.color}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
