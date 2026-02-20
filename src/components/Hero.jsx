export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/8 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          Invite-Only Platform
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">Amanda'sList</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Verified Communities, Real Connections
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The exclusive classifieds, deal flow, and funding platform for verified communities.
          Trade, invest, and connect with people you actually trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#waitlist" className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:brightness-110 transition">
            Apply for Access
          </a>
          <a href="#communities" className="px-8 py-3.5 border border-white/15 text-white rounded-lg hover:bg-white/5 transition">
            Explore Communities
          </a>
        </div>
      </div>
    </section>
  )
}
