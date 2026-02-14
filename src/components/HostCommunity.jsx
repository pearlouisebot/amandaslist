export default function HostCommunity() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gold-400">Host</span> Your Community
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Run a private club, alumni group, or investment network? Bring your community to Amanda's List
          and give your members access to trusted classifieds, deal flow, and cross-community connections.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: '🔑', title: 'Custom Verification', desc: 'Define your own membership verification criteria' },
            { icon: '🎛️', title: 'Admin Dashboard', desc: 'Manage members, approve listings, and moderate content' },
            { icon: '📊', title: 'Analytics', desc: 'Track engagement, deal flow, and community growth' },
          ].map((f, i) => (
            <div key={i} className="p-5 rounded-xl bg-dark-800 border border-white/5">
              <span className="text-2xl mb-2 block">{f.icon}</span>
              <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
        <a href="#waitlist" className="inline-block px-8 py-3.5 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
          Bring Your Community →
        </a>
      </div>
    </section>
  )
}
