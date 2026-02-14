export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple <span className="text-gold-400">Pricing</span>
        </h2>
        <p className="text-gray-400 mb-10">Membership is by application only.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-dark-900 border border-white/10">
            <h3 className="text-white font-semibold text-lg mb-2">Member</h3>
            <div className="text-4xl font-bold text-white mb-1">$299<span className="text-lg text-gray-500">/year</span></div>
            <p className="text-sm text-gray-500 mb-6">Per verified community</p>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              {['Verified member badge', 'Trusted classifieds access', 'Deal flow & referrals', 'AI connection agent', 'Private community boards'].map((f, i) => (
                <li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-dark-900 border border-gold-500/30 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gold-500 text-dark-900 text-xs font-bold">POPULAR</div>
            <h3 className="text-white font-semibold text-lg mb-2">All-Access</h3>
            <div className="text-4xl font-bold text-white mb-1">$999<span className="text-lg text-gray-500">/year</span></div>
            <p className="text-sm text-gray-500 mb-6">Unlimited communities</p>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              {['Everything in Member', 'Access ALL verified communities', 'Priority deal flow', 'Auto-funding eligibility', 'Concierge onboarding'].map((f, i) => (
                <li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
