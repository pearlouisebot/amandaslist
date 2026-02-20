import { useState } from 'react'
import Hero from './components/Hero'
import Communities from './components/Communities'
import Benefits from './components/Benefits'
import HostCommunity from './components/HostCommunity'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import VerificationModal from './components/VerificationModal'
import PlaidDemo from './components/PlaidDemo'

export default function App() {
  const [selectedCommunity, setSelectedCommunity] = useState(null)

  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">Amanda'sList</span>
          </span>
          <a href="#waitlist" className="px-5 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg text-sm hover:brightness-110 transition">
            Apply for Access
          </a>
        </div>
      </header>
      <Hero />
      <PlaidDemo />
      <Communities onSelect={setSelectedCommunity} />
      <Benefits />
      <HostCommunity />
      <Pricing />
      <Footer />
      {selectedCommunity && (
        <VerificationModal
          community={selectedCommunity}
          onClose={() => setSelectedCommunity(null)}
        />
      )}
    </div>
  )
}
