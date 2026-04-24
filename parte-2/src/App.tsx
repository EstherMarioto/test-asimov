import { useState, useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Course } from './components/Course'
import { Modules } from './components/Modules'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { ModalEnter } from './components/ModalEnter'
import { ModalStart } from './components/ModalStart'

type Modal = 'entrar' | 'comecar' | null

function App() {
  const [modal, setModal] = useState<Modal>(null)

  // lock body scroll when a modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  const openEntrar = () => setModal('entrar')
  const openComecar = () => setModal('comecar')
  const closeModal = () => setModal(null)

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID ?? ''}>
      <div className="min-h-screen bg-[#030308]">
        <Navbar onEntrar={openEntrar} onComecar={openComecar} />
        <Hero onComecar={openComecar} />
        <Course />
        <Modules />
        <Testimonials />
        <FAQ />
        <CTA onComecar={openComecar} />

        <ModalEnter
          open={modal === 'entrar'}
          onClose={closeModal}
          onSwitchToSignup={openComecar}
        />
        <ModalStart
          open={modal === 'comecar'}
          onClose={closeModal}
          onSwitchToLogin={openEntrar}
        />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
