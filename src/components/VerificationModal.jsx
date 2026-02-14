export default function VerificationModal({ community, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-dark-800 border border-white/10 rounded-2xl max-w-lg w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl">✕</button>
        <span className="text-4xl mb-4 block">{community.icon}</span>
        <h3 className="text-2xl font-bold text-white mb-1">{community.name}</h3>
        <p className="text-sm text-gold-400 mb-6">{community.verification}</p>
        <div className="space-y-4">
          {community.verificationSteps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-300 text-sm pt-0.5">{step}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:brightness-110 transition">
          Start Verification
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">Your data is encrypted and never shared with third parties.</p>
      </div>
    </div>
  )
}
