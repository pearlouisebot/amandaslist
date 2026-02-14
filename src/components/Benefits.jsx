const benefits = [
  { icon: '🏠', title: 'Trusted Classifieds', desc: 'Housing, jobs, services, and events — posted by verified members only.' },
  { icon: '💰', title: 'Deal Flow', desc: 'Investment opportunities and referral fees within your trusted network.' },
  { icon: '🤖', title: 'AI Connection Agent', desc: 'An AI agent that matches you with the right people across communities.' },
  { icon: '⚡', title: 'Auto-Funding', desc: 'Qualifying founders get fast-tracked funding from verified investors.' },
  { icon: '🔒', title: 'Private Boards', desc: 'Community-specific discussion boards visible only to verified members.' },
  { icon: '🌐', title: 'Cross-Network Access', desc: 'One verification unlocks trusted connections across all communities.' },
]

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What You <span className="text-gold-400">Get</span>
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          More than a directory — a full platform for trusted commerce and connections.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-xl bg-dark-900/60 border border-white/5">
              <span className="text-2xl mb-3 block">{b.icon}</span>
              <h3 className="text-white font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
