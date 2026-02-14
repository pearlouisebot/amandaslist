import { communities } from '../data/communities'

export default function Communities({ onSelect }) {
  return (
    <section id="communities" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Verified <span className="text-gold-400">Communities</span>
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Every member is verified. Every connection is real. Click any community to see how verification works.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {communities.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c)}
              className="group text-left p-6 rounded-xl bg-dark-800 border border-white/5 hover:border-gold-500/40 transition-all duration-300 hover:bg-dark-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{c.icon}</span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/20">
                  ✓ {c.verification}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.examples}</p>
              <div className="mt-4 text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition">
                Click to see verification process →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
