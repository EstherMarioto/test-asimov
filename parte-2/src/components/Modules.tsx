import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { EASE, container, fadeUp } from '../lib/motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionDivider, SectionHeader, GradientText } from './ui'

const MODULES = [
  {
    num: '01',
    title: 'Fundamentos de Python',
    desc: 'A base sólida que todo dev precisa — sem atalhos, sem lacunas.',
    topics: ['Variáveis e tipos de dados', 'Condicionais e loops', 'Funções e escopo', 'Tratamento de erros'],
    lessons: 12,
    badge: 'Início imediato',
  },
  {
    num: '02',
    title: 'Estruturas de Dados',
    desc: 'Organize e manipule informações com eficiência real.',
    topics: ['Listas e tuplas', 'Dicionários e sets', 'Compreensões de lista', 'Algoritmos de ordenação'],
    lessons: 10,
    badge: null,
  },
  {
    num: '03',
    title: 'Programação Orientada a Objetos',
    desc: 'Escreva código reutilizável, escalável e fácil de manter.',
    topics: ['Classes e instâncias', 'Herança e polimorfismo', 'Métodos especiais', 'Design patterns básicos'],
    lessons: 11,
    badge: null,
  },
  {
    num: '04',
    title: 'Dados e Automação',
    desc: 'Processe dados reais e automatize tarefas repetitivas.',
    topics: ['Pandas e NumPy', 'Leitura de CSV e JSON', 'Web scraping com BeautifulSoup', 'Automações com Python'],
    lessons: 14,
    badge: null,
  },
  {
    num: '05',
    title: 'APIs e Back-end',
    desc: 'Conecte seu código ao mundo real com APIs modernas.',
    topics: ['Requests e HTTP', 'Criando APIs com FastAPI', 'Autenticação e JWT', 'Banco de dados com SQLAlchemy'],
    lessons: 13,
    badge: null,
  },
  {
    num: '06',
    title: 'Introdução à IA',
    desc: 'Entenda e use modelos de linguagem diretamente no seu código.',
    topics: ['Conceitos de LLMs', 'API da OpenAI', 'Engenharia de prompts', 'Embeddings e busca semântica'],
    lessons: 10,
    badge: 'Mais popular',
  },
  {
    num: '07',
    title: 'Agentes e Automações com IA',
    desc: 'Construa sistemas autônomos que tomam decisões sozinhos.',
    topics: ['LangChain e LangGraph', 'Agentes com ferramentas', 'RAG (Retrieval Augmented Generation)', 'Pipelines de IA'],
    lessons: 12,
    badge: null,
  },
  {
    num: '08',
    title: 'Projetos e Portfólio',
    desc: 'Saia com projetos reais e prontos para mostrar no mercado.',
    topics: ['Deploy com Docker e Cloud', 'Projeto final guiado', 'Documentação profissional', 'Preparação para entrevistas'],
    lessons: 9,
    badge: 'Certificado',
  },
]

type Module = (typeof MODULES)[0]

function ModuleRow({ mod }: { mod: Module }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div variants={fadeUp}>
      <button
        className="group flex w-full items-start gap-4 rounded-2xl border border-white/7 bg-white/2 px-5 py-5 text-left transition-all hover:border-white/14 hover:bg-white/4 sm:gap-6 sm:px-6"
        onClick={() => setOpen(v => !v)}
      >
        <span className="mt-0.5 shrink-0 font-mono text-sm font-semibold text-slate-600">{mod.num}</span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[15px] font-semibold text-white sm:text-base">{mod.title}</span>
            {mod.badge && (
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                {mod.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-500">{mod.desc}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="topics"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="overflow-hidden"
              >
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {mod.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2 pt-0.5">
          <span className="text-xs text-slate-600">{mod.lessons} aulas</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
            <ChevronDown size={15} className="text-slate-600 transition-colors group-hover:text-slate-400" />
          </motion.div>
        </div>
      </button>
    </motion.div>
  )
}

export function Modules() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="modulos" className="relative overflow-hidden bg-[#030308] py-28 sm:py-32">
      <SectionDivider />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center"
        >
          <SectionHeader
            label="Módulos"
            title={<>Do zero ao <GradientText>portfólio completo</GradientText></>}
            subtitle="8 módulos progressivos, cada um com projetos práticos que você vai usar no dia a dia."
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col gap-3"
        >
          {MODULES.map(mod => (
            <ModuleRow key={mod.num} mod={mod} />
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 sm:gap-6"
        >
          <motion.span variants={fadeUp} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            91 aulas no total
          </motion.span>
          <motion.span variants={fadeUp} className="hidden h-4 w-px bg-white/10 sm:block" />
          <motion.span variants={fadeUp} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Clique em cada módulo para ver os tópicos
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
