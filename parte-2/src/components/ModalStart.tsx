import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { EASE } from '../lib/motion'
import { InputField, ModalLogo } from './ui'

interface Props {
  open: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export function ModalStart({ open, onClose, onSwitchToLogin }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  function handleClose() {
    onClose()
    setTimeout(() => setStep(1), 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/8 bg-[#0D0D18] shadow-2xl shadow-black/60"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.28, ease: EASE }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/6 px-6 py-4">
                <ModalLogo size="sm" />

                {step < 3 && (
                  <div className="flex items-center gap-1.5">
                    {([1, 2] as const).map(s => (
                      <div
                        key={s}
                        className={`h-1.5 rounded-full transition-all duration-300 ${step >= s ? 'w-8 bg-violet-500' : 'w-4 bg-white/15'}`}
                      />
                    ))}
                  </div>
                )}

                <button
                  onClick={handleClose}
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-white/6 hover:text-white"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <StepConta
                      key="step1"
                      onNext={() => setStep(2)}
                      onSwitchToLogin={onSwitchToLogin}
                    />
                  )}
                  {step === 2 && (
                    <StepPagamento
                      key="step2"
                      onBack={() => setStep(1)}
                      onDone={() => setStep(3)}
                    />
                  )}
                  {step === 3 && (
                    <StepSucesso key="step3" onClose={handleClose} />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─── Step 1: Conta ─── */
function StepConta({
  onNext,
  onSwitchToLogin,
}: {
  onNext: () => void
  onSwitchToLogin: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <div className="mb-5 rounded-2xl border border-violet-500/20 bg-violet-500/8 px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-400">
              Plano selecionado
            </p>
            <p className="mt-0.5 text-sm font-bold text-white">Python + IA — Completo</p>
            <p className="mt-0.5 text-xs text-slate-500">Acesso vitalício · Certificado incluído</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xl font-bold text-white">R$&nbsp;997</p>
            <p className="text-[11px] text-slate-500">ou 12× R$&nbsp;97</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white">Crie sua conta</h2>
      <p className="mt-1 text-sm text-slate-400">Acesso imediato logo após o pagamento.</p>

      <div className="mt-5 flex flex-col gap-3">
        <InputField icon={User} type="text" placeholder="Nome completo" />
        <InputField icon={Mail} type="email" placeholder="seu@email.com" />
        <InputField icon={Lock} type="password" placeholder="Crie uma senha" />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="mt-5 w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
      >
        Continuar para pagamento →
      </motion.button>

      <p className="mt-4 text-center text-sm text-slate-500">
        Já tem conta?{' '}
        <button
          onClick={onSwitchToLogin}
          className="font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Entrar
        </button>
      </p>
    </motion.div>
  )
}

/* ─── Step 2: Pagamento ─── */
function StepPagamento({ onBack, onDone }: { onBack: () => void; onDone: () => void }) {
  const [method, setMethod] = useState<'card' | 'pix'>('card')

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-200"
      >
        ← Voltar
      </button>

      <h2 className="text-xl font-bold text-white">Pagamento</h2>
      <p className="mt-1 text-sm text-slate-400">Ambiente 100% seguro e criptografado.</p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {(['card', 'pix'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={`rounded-xl border py-2.5 text-sm font-medium transition-all ${method === m
              ? 'border-violet-500/50 bg-violet-500/10 text-violet-300'
              : 'border-white/8 text-slate-500 hover:border-white/14 hover:text-slate-300'
            }`}
          >
            {m === 'card' ? '💳  Cartão' : '📱  Pix'}
          </button>
        ))}
      </div>

      {method === 'card' ? (
        <div className="mt-4 flex flex-col gap-3">
          <InputField icon={CreditCard} type="text" placeholder="Número do cartão" />
          <input
            type="text"
            placeholder="Nome impresso no cartão"
            className="w-full rounded-xl border border-white/8 bg-white/4 py-3.5 px-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/60 focus:bg-white/6 focus:ring-1 focus:ring-violet-500/20"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="MM / AA"
              className="rounded-xl border border-white/8 bg-white/4 py-3.5 px-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/60 focus:bg-white/6 focus:ring-1 focus:ring-violet-500/20"
            />
            <input
              type="text"
              placeholder="CVV"
              className="rounded-xl border border-white/8 bg-white/4 py-3.5 px-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/60 focus:bg-white/6 focus:ring-1 focus:ring-violet-500/20"
            />
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center rounded-2xl border border-white/7 bg-white/3 px-4 py-6">
          <div className="h-36 w-36 rounded-xl bg-white p-3 shadow-lg">
            <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-px">
              {Array.from({ length: 49 }).map((_, i) => {
                const pattern = [
                  0, 1, 2, 3, 4, 5, 6, 7, 13, 8, 9, 10, 11, 12, 14, 20,
                  15, 16, 17, 18, 19, 21, 27, 22, 26, 23, 24, 25,
                  28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 48,
                  43, 44, 45, 46, 47, 36, 37, 38, 39, 40,
                ]
                return (
                  <div
                    key={i}
                    className={`rounded-[1px] ${pattern.includes(i) ? 'bg-[#030308]' : 'bg-white'}`}
                  />
                )
              })}
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Escaneie o QR Code</p>
          <p className="mt-1 text-xs text-slate-500">Expira em 30 minutos · R$&nbsp;997,00</p>
          <button className="mt-3 text-xs font-medium text-violet-400 transition-colors hover:text-violet-300">
            Copiar código Pix
          </button>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onDone}
        className="mt-5 w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
      >
        {method === 'card' ? 'Pagar R$ 997,00' : 'Já realizei o pagamento'}
      </motion.button>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-600">
        <ShieldCheck size={12} />
        Pagamento seguro · 7 dias de garantia incondicional
      </div>
    </motion.div>
  )
}

/* ─── Step 3: Sucesso ─── */
function StepSucesso({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="flex flex-col items-center py-6 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15"
      >
        <CheckCircle2 size={32} className="text-violet-400" />
      </motion.div>

      <h2 className="mt-5 text-2xl font-bold text-white">Acesso liberado!</h2>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
        Bem-vindo à Asimov Academy. Seu acesso já está ativo — aproveite todo o conteúdo e a comunidade.
      </p>

      <div className="mt-6 w-full rounded-2xl border border-white/7 bg-white/3 px-5 py-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">O que espera por você</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            '8 módulos de Python + IA',
            'Comunidade no Discord com +20k alunos',
            'Certificado ao concluir o curso',
            'Atualizações vitalícias incluídas',
          ].map(item => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClose}
        className="mt-6 w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
      >
        Acessar minha conta →
      </motion.button>
    </motion.div>
  )
}
