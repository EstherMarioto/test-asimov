import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE, container, fadeUp } from '../lib/motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionDivider, SectionHeader, GradientText } from './ui'

const FAQS = [
  {
    q: 'Preciso ter conhecimento prévio em programação?',
    a: 'Não. O curso começa do zero absoluto. Se você nunca programou na vida, está no lugar certo. Nossa metodologia foi pensada justamente para quem está começando do zero.',
  },
  {
    q: 'Quanto tempo por semana preciso dedicar?',
    a: 'O curso foi projetado para funcionar com 1 a 2 horas por dia. Você aprende no seu ritmo, sem deadlines. O acesso é vitalício, então você define o próprio calendário.',
  },
  {
    q: 'Como funciona o suporte?',
    a: 'Você tem acesso a uma comunidade ativa no Discord com mais de 20.000 alunos, além de monitores e professores que respondem dúvidas. Também realizamos aulas ao vivo mensalmente.',
  },
  {
    q: 'O certificado é reconhecido no mercado?',
    a: 'Sim. O certificado é emitido pela Asimov Academy, uma das maiores referências em tecnologia e IA no Brasil. É amplamente reconhecido por empresas de tecnologia nacionais e internacionais.',
  },
  {
    q: 'Posso acessar pelo celular ou tablet?',
    a: 'Sim. A plataforma é 100% responsiva e funciona em qualquer dispositivo. Você pode assistir aulas no celular, tablet ou computador, quando e onde quiser.',
  },
  {
    q: 'E se eu não gostar do curso?',
    a: 'Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia.',
  },
  {
    q: 'O conteúdo é atualizado com frequência?',
    a: 'Sim. O mundo de Python e IA muda rápido, e nós acompanhamos. Compradores têm acesso a todas as atualizações futuras sem custo adicional — o preço que você paga hoje garante acesso para sempre.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos cartão de crédito (em até 12x), Pix e boleto bancário. Toda a transação é protegida por criptografia SSL e processada por plataformas certificadas.',
  },
]

function FaqItem({ item }: { item: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div variants={fadeUp}>
      <button
        className="group flex w-full items-start justify-between gap-5 border-b border-white/6 py-5 text-left transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <span className="text-[15px] font-medium leading-snug text-white transition-colors group-hover:text-violet-300">
          {item.q}
        </span>
        <motion.div
          className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-violet-400"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-5 pt-3 text-[15px] leading-relaxed text-slate-400">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="faq" className="relative overflow-hidden bg-[#030308] py-28 sm:py-32">
      <SectionDivider />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center"
        >
          <SectionHeader
            label="FAQ"
            title={<>Perguntas <GradientText>frequentes</GradientText></>}
            subtitle="Ainda com dúvidas? Fala com a gente no Discord — respondemos rápido."
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-14"
        >
          {FAQS.map(item => (
            <FaqItem key={item.q} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
