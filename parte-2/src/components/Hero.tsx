import { motion, type Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

const BULLETS = [
  '+40 horas de conteúdo direto ao ponto',
  'Projetos com Python + IA desde o módulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
]

const AVATAR_COLORS = [
  'bg-violet-500',
  'bg-sky-500',
  'bg-pink-500',
  'bg-amber-500',
  'bg-emerald-500',
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

function CodePreview() {
  return (
    <motion.div
      className="relative hidden lg:block"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
    >
      {/* Glow halo */}
      <div className="absolute -inset-10 rounded-3xl bg-violet-600/10 blur-3xl" />

      {/* Editor card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/7 bg-[#0D0D18] shadow-2xl shadow-black/60">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/6 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="block h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="block h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="block h-3 w-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="ml-1 font-mono text-xs text-slate-500">agente_ia.py</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-slate-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            running
          </span>
        </div>

        {/* Code */}
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.9]">
          <code>
            <span className="text-slate-500">{'# Módulo 1 — Construindo com IA\n'}</span>
            {'\n'}
            <span className="text-violet-400">from</span>
            <span className="text-slate-300"> openai </span>
            <span className="text-violet-400">import</span>
            <span className="text-cyan-300"> OpenAI{'\n'}</span>
            {'\n'}
            <span className="text-sky-300">client</span>
            <span className="text-slate-300"> = </span>
            <span className="text-cyan-300">OpenAI</span>
            <span className="text-slate-300">(){'\n'}</span>
            {'\n'}
            <span className="text-sky-300">response</span>
            <span className="text-slate-300"> = client.chat.completions.</span>
            <span className="text-yellow-400">create</span>
            <span className="text-slate-300">({'\n'}</span>
            <span className="text-slate-300">{'    '}model=</span>
            <span className="text-green-400">"gpt-4o-mini"</span>
            <span className="text-slate-300">,{'\n'}</span>
            <span className="text-slate-300">{'    '}messages=[</span>
            <span className="text-slate-500">{'/* sua lista */'}</span>
            <span className="text-slate-300">]{'\n'}</span>
            <span className="text-slate-300">){'\n'}</span>
            {'\n'}
            <span className="text-yellow-400">print</span>
            <span className="text-slate-300">(response.choices[</span>
            <span className="text-orange-400">0</span>
            <span className="text-slate-300">].message.content)</span>
          </code>
        </pre>

        {/* Output */}
        <div className="px-5 pb-5">
          <div className="flex items-start gap-2.5 rounded-lg border border-green-500/20 bg-green-950/40 px-4 py-3">
            <span className="mt-0.5 text-green-400">✓</span>
            <div>
              <p className="text-[13px] font-medium text-green-300">Execução concluída com sucesso</p>
              <p className="mt-0.5 font-mono text-xs text-green-700">1.247s · 392 tokens usados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <motion.div
        className="absolute -bottom-5 -left-8 flex items-center gap-3 rounded-xl border border-white/9 bg-[#0D0D18]/90 px-4 py-3 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-base">🎓</div>
        <div>
          <p className="text-sm font-semibold leading-tight text-white">+20.000 alunos</p>
          <p className="mt-0.5 text-xs text-slate-500">comunidade ativa</p>
        </div>
      </motion.div>

      {/* Floating card — top right */}
      <motion.div
        className="absolute -right-8 -top-5 flex items-center gap-3 rounded-xl border border-white/9 bg-[#0D0D18]/90 px-4 py-3 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: EASE }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-base">⭐</div>
        <div>
          <p className="text-sm font-semibold leading-tight text-white">4.9 / 5.0</p>
          <p className="mt-0.5 text-xs text-slate-500">avaliação média</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#030308]">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient orb — top right */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-175 w-175 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)',
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb — bottom left */}
      <motion.div
        className="pointer-events-none absolute -bottom-40 -left-32 h-150 w-150 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)',
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                Turma 2025 · Vagas abertas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] font-bold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]"
            >
              Aprenda{' '}
              <span className="bg-linear-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                Python
              </span>{' '}
              do zero e construa projetos reais com{' '}
              <span className="bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                IA
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="max-w-125 text-lg leading-relaxed text-slate-400"
            >
              O curso mais prático do Brasil para quem quer entrar em tecnologia
              sem enrolação
            </motion.p>

            {/* Bullets */}
            <motion.ul
              variants={container}
              className="flex flex-col gap-3"
            >
              {BULLETS.map(bullet => (
                <motion.li
                  key={bullet}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-[15px] text-slate-300"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-violet-400"
                  />
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 rounded-xl bg-violet-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
              >
                Quero começar agora
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-base font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/4 hover:text-white"
              >
                Ver o que vou aprender
                <ChevronDown size={16} className="text-slate-500" />
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {AVATAR_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#030308] text-xs font-bold text-white ${color}`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1.5">4.9 de 5</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  +20.000 alunos satisfeitos
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <CodePreview />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-600"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  )
}
