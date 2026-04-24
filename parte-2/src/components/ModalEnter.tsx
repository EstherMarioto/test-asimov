import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useGoogleLogin } from '@react-oauth/google'
import { EASE } from '../lib/motion'
import { InputField, ModalLogo, Spinner } from './ui'

type View = 'login' | 'forgot' | 'sent'

interface Props {
  open: boolean
  onClose: () => void
  onSwitchToSignup: () => void
}

export function ModalEnter({ open, onClose, onSwitchToSignup }: Props) {
  const [view, setView] = useState<View>('login')

  function handleClose() {
    onClose()
    setTimeout(() => setView('login'), 300)
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
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-white/6 hover:text-white"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {view === 'login' && (
                  <ViewLogin
                    key="login"
                    onForgot={() => setView('forgot')}
                    onSwitchToSignup={onSwitchToSignup}
                    onClose={handleClose}
                  />
                )}
                {view === 'forgot' && (
                  <ViewForgot
                    key="forgot"
                    onBack={() => setView('login')}
                    onSent={() => setView('sent')}
                  />
                )}
                {view === 'sent' && (
                  <ViewSent key="sent" onBack={() => setView('login')} />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─── Google Button ─── */
function GoogleButton({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false)

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        await res.json()
        onClose()
      } catch {
        setLoading(false)
      }
    },
    onError: () => setLoading(false),
    onNonOAuthError: () => setLoading(false),
  })

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
      onClick={() => { setLoading(true); login() }}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/9 bg-white/4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/8 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <Spinner className="h-4 w-4 text-slate-400" />
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
          <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
      )}
      {loading ? 'Conectando…' : 'Continuar com Google'}
    </motion.button>
  )
}

/* ─── View: Login ─── */
function ViewLogin({
  onForgot,
  onSwitchToSignup,
  onClose,
}: {
  onForgot: () => void
  onSwitchToSignup: () => void
  onClose: () => void
}) {
  const [showPass, setShowPass] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.22, ease: EASE }}
      className="p-7 sm:p-8"
    >
      <ModalLogo />

      <h2 className="mt-6 text-2xl font-bold text-white">Bem-vindo de volta</h2>
      <p className="mt-1.5 text-sm text-slate-400">
        Entre para acessar sua conta e continuar aprendendo.
      </p>

      <div className="mt-6">
        <GoogleButton onClose={onClose} />
      </div>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/7" />
        <span className="text-xs text-slate-600">ou entre com email</span>
        <div className="h-px flex-1 bg-white/7" />
      </div>

      <div className="flex flex-col gap-3">
        <InputField icon={Mail} type="email" placeholder="seu@email.com" />
        <InputField
          icon={Lock}
          type={showPass ? 'text' : 'password'}
          placeholder="Senha"
          suffix={
            <button
              type="button"
              onClick={() => setShowPass(v => !v)}
              className="text-slate-600 transition-colors hover:text-slate-300"
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          }
        />
      </div>

      <div className="mt-2.5 flex justify-end">
        <button
          onClick={onForgot}
          className="text-xs text-slate-500 transition-colors hover:text-violet-400"
        >
          Esqueceu a senha?
        </button>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
      >
        Entrar na conta
      </motion.button>

      <p className="mt-5 text-center text-sm text-slate-500">
        Não tem conta?{' '}
        <button
          onClick={onSwitchToSignup}
          className="font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Criar conta grátis
        </button>
      </p>
    </motion.div>
  )
}

/* ─── View: Esqueci a senha ─── */
function ViewForgot({ onBack, onSent }: { onBack: () => void; onSent: () => void }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSend() {
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onSent()
    }, 1200)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.22, ease: EASE }}
      className="p-7 sm:p-8"
    >
      <ModalLogo />

      <button
        onClick={onBack}
        className="mt-5 flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-200"
      >
        <ArrowLeft size={15} />
        Voltar ao login
      </button>

      <h2 className="mt-5 text-2xl font-bold text-white">Esqueceu a senha?</h2>
      <p className="mt-1.5 text-sm text-slate-400">
        Sem problema. Informe seu email e enviaremos um link para você criar uma nova senha.
      </p>

      <div className="mt-6">
        <InputField
          icon={Mail}
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
      </div>

      <motion.button
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        onClick={handleSend}
        disabled={loading || !email}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <><Spinner /> Enviando…</> : 'Enviar link de recuperação'}
      </motion.button>

      <p className="mt-5 text-center text-xs text-slate-600">
        Verifique também a caixa de spam caso não receba o email.
      </p>
    </motion.div>
  )
}

/* ─── View: Email enviado ─── */
function ViewSent({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.28, ease: EASE }}
      className="flex flex-col items-center p-7 text-center sm:p-8"
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 14 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15"
      >
        <CheckCircle2 size={30} className="text-violet-400" />
      </motion.div>

      <h2 className="mt-5 text-2xl font-bold text-white">Email enviado!</h2>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
        Enviamos um link de recuperação para o seu email. Ele expira em{' '}
        <span className="font-medium text-slate-300">15 minutos</span>.
      </p>

      <div className="mt-5 w-full rounded-2xl border border-white/7 bg-white/3 px-5 py-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">O que fazer agora</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            'Abra o email que te enviamos',
            'Clique em "Redefinir senha"',
            'Crie uma nova senha segura',
            'Pronto — acesse sua conta',
          ].map((item, i) => (
            <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-[10px] font-bold text-violet-400">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-violet-400"
      >
        <ArrowLeft size={14} />
        Voltar ao login
      </button>
    </motion.div>
  )
}
