import { useState } from 'react'
import Hero from './components/Hero'
import Communities from './components/Communities'
import Benefits from './components/Benefits'
import HostCommunity from './components/HostCommunity'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import VerificationModal from './components/VerificationModal'

export default function App() {
  const [selectedCommunity, setSelectedCommunity] = useState(null)

  return (
    <div className="min-h-screen font-sans">
      <Hero />
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
