import { useState } from 'react'

const TABS = [
  { id: 'verify', label: 'Identity Verification', icon: '🛡️' },
  { id: 'investor', label: 'Investor Verification', icon: '📈' },
  { id: 'dating', label: 'Singles Matching', icon: '💕' },
  { id: 'jobs', label: 'Job Marketplace', icon: '💼' },
]

function PlaidLinkButton({ onClick, label = 'Connect with Plaid' }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-3.5 bg-[#0A85EA] hover:bg-[#0977D4] text-white font-semibold rounded-lg transition w-full justify-center"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <rect x="1" y="1" width="10" height="10" rx="1" />
        <rect x="13" y="1" width="10" height="10" rx="1" />
        <rect x="1" y="13" width="10" height="10" rx="1" />
        <rect x="13" y="13" width="10" height="10" rx="1" />
      </svg>
      {label}
    </button>
  )
}

function IdentityVerification() {
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: 'Verify Your Identity',
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            To join AmandasList, we need to verify you're a real person.
            We use Plaid Identity Verification — a quick, secure process that takes under 2 minutes.
          </p>
          <div className="space-y-3">
            {['Government ID scan (driver\u2019s license or passport)', 'Selfie match to confirm it\u2019s you', 'SSN last-4 for identity confirmation'].map((s, i) => (
              <div key={i} className="flex gap-3 items-center text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                {s}
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-emerald-400 text-xs">🔒 Your data is encrypted end-to-end and never sold to third parties. We only verify — we don't store your documents.</p>
          </div>
          <PlaidLinkButton onClick={() => setStep(1)} label="Verify My Identity" />
        </div>
      ),
    },
    {
      title: 'Connecting to Plaid...',
      content: (
        <div className="space-y-6">
          <div className="bg-dark-700 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0A85EA] rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <rect x="1" y="1" width="10" height="10" rx="1" />
                  <rect x="13" y="1" width="10" height="10" rx="1" />
                  <rect x="1" y="13" width="10" height="10" rx="1" />
                  <rect x="13" y="13" width="10" height="10" rx="1" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Plaid Identity Verification</p>
                <p className="text-gray-500 text-xs">Powered by Plaid — trusted by 12,000+ institutions</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-sm text-gray-300">ID document uploaded</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-sm text-gray-300">Selfie captured and matched</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500 animate-pulse flex items-center justify-center text-dark-900 text-xs font-bold">...</div>
                <span className="text-sm text-gray-300">Verifying identity...</span>
              </div>
            </div>
          </div>
          <button onClick={() => setStep(2)} className="w-full py-3 bg-gold-500 text-dark-900 font-semibold rounded-lg hover:brightness-110 transition">
            Continue (Demo)
          </button>
        </div>
      ),
    },
    {
      title: 'Identity Verified!',
      content: (
        <div className="space-y-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center">
            <span className="text-4xl">✓</span>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Amanda Bradford</h4>
            <p className="text-emerald-400 text-sm font-medium">Identity Verified via Plaid</p>
          </div>
          <div className="flex justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">✓ Real Person</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">✓ ID Matched</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">✓ KYC Compliant</span>
          </div>
          <p className="text-gray-400 text-sm">You now have access to all AmandasList communities. Your verified badge is visible to other members.</p>
          <button onClick={() => setStep(0)} className="w-full py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
            ← Back to Start
          </button>
        </div>
      ),
    },
  ]

  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{steps[step].title}</h3>
      <div className="flex gap-2 mb-6 mt-3">
        {steps.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-gold-500' : 'bg-dark-700'}`} />
        ))}
      </div>
      {steps[step].content}
    </div>
  )
}

function InvestorVerification() {
  const [step, setStep] = useState(0)

  if (step === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Accredited Investor Verification</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          To access deal flow and syndicate investments on AmandasList, SEC regulations require us to
          verify your accredited investor status. We use Plaid to securely verify your income and assets.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
            <p className="text-gold-400 text-xs font-semibold mb-1">OPTION A</p>
            <p className="text-white font-semibold text-sm mb-1">Income Based</p>
            <p className="text-gray-500 text-xs">$200K+ individual income or $300K+ joint income for the past 2 years</p>
          </div>
          <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
            <p className="text-gold-400 text-xs font-semibold mb-1">OPTION B</p>
            <p className="text-white font-semibold text-sm mb-1">Net Worth Based</p>
            <p className="text-gray-500 text-xs">$1M+ in net assets (excluding primary residence)</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-white text-sm font-medium">Verification Methods via Plaid:</p>
          {[
            { method: 'Bank Income', desc: 'Connect bank accounts to verify income deposits', price: '$6/account' },
            { method: 'Payroll Income', desc: 'Verify employment and salary directly from payroll provider', price: '$12.99' },
            { method: 'Document Upload', desc: 'Upload W2s, 1099s, or paystubs for verification', price: '$3.00' },
          ].map((m, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-dark-700/50 border border-white/5">
              <div>
                <p className="text-white text-sm font-medium">{m.method}</p>
                <p className="text-gray-500 text-xs">{m.desc}</p>
              </div>
              <span className="text-gold-400 text-xs font-mono">{m.price}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400 text-xs">🔒 All financial data is processed by Plaid and never stored on our servers. Verification is consent-based and user-permissioned.</p>
        </div>
        <PlaidLinkButton onClick={() => setStep(1)} label="Verify Accredited Status" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Accredited Investor — Verified</h3>
      <div className="p-6 rounded-xl bg-gradient-to-br from-gold-500/10 to-emerald-500/10 border border-gold-500/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">✓</div>
          <div>
            <p className="text-white font-bold">Amanda Bradford</p>
            <p className="text-emerald-400 text-sm font-medium">Accredited Investor — Verified</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-dark-900/50">
            <p className="text-gray-500 text-xs">Verification Method</p>
            <p className="text-white text-sm font-medium">Bank Income</p>
          </div>
          <div className="p-3 rounded-lg bg-dark-900/50">
            <p className="text-gray-500 text-xs">Status</p>
            <p className="text-emerald-400 text-sm font-medium">Confirmed ✓</p>
          </div>
          <div className="p-3 rounded-lg bg-dark-900/50">
            <p className="text-gray-500 text-xs">Income Bracket</p>
            <p className="text-white text-sm font-medium">$200K+</p>
          </div>
          <div className="p-3 rounded-lg bg-dark-900/50">
            <p className="text-gray-500 text-xs">Valid Until</p>
            <p className="text-white text-sm font-medium">Feb 2027</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-sm font-semibold mb-3">Your Deal Flow</p>
        {[
          { name: 'Zipline — Series D Extension', amount: '$5-20M allocation', tag: 'Robotics/Delivery' },
          { name: 'Anthropic — Secondary Shares', amount: 'Min $100K', tag: 'AI/Enterprise' },
          { name: 'Nucleus Genomics — Series A', amount: '$25K min', tag: 'Biotech/Genomics' },
        ].map((d, i) => (
          <div key={i} className="flex items-center justify-between p-3 mb-2 rounded-lg bg-dark-700 border border-white/5 hover:border-gold-500/30 transition cursor-pointer">
            <div>
              <p className="text-white text-sm font-medium">{d.name}</p>
              <p className="text-gray-500 text-xs">{d.tag}</p>
            </div>
            <span className="text-gold-400 text-xs font-medium">{d.amount}</span>
          </div>
        ))}
      </div>
      <button onClick={() => setStep(0)} className="w-full py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
        ← Back to Start
      </button>
    </div>
  )
}

function DatingMatching() {
  const [connected, setConnected] = useState(false)

  if (!connected) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Lifestyle-Based Matching</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          AmandasList Singles uses spending data to match you with people who share your lifestyle —
          not just what they say, but how they actually live. Connect your bank via Plaid and we'll
          find people who frequent the same places you do.
        </p>
        <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
          <p className="text-white text-sm font-semibold mb-3">How It Works</p>
          <div className="space-y-3">
            {[
              'Connect your bank account securely via Plaid',
              'We analyze your transaction categories (dining, fitness, travel, shopping)',
              'Match with people who share your spending patterns and lifestyle',
              'See lifestyle compatibility scores on every profile',
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-start text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
          <p className="text-white text-sm font-semibold mb-2">What We See</p>
          <div className="flex flex-wrap gap-2">
            {['Dining', 'Fitness', 'Travel', 'Shopping', 'Entertainment', 'Wellness'].map((c) => (
              <span key={c} className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs border border-pink-500/20">{c}</span>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-2">We only see merchant categories — never dollar amounts, account numbers, or balances.</p>
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400 text-xs">🔒 Your spending data is used only for matching. You control what's shared. Data refreshes automatically via Plaid (3-4x daily) with 2 years of history for better matching accuracy.</p>
        </div>
        <PlaidLinkButton onClick={() => setConnected(true)} label="Connect Bank for Matching" />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white">Your Matches</h3>
      <p className="text-gray-400 text-sm">Based on your lifestyle and spending patterns</p>
      {[
        {
          name: 'Sarah K.',
          age: 31,
          match: 94,
          shared: ['Erewhon', 'SoulCycle', 'Soho House', 'Sweetgreen'],
          bio: 'Founder, wellness junkie, weekend hiker',
          categories: ['Wellness', 'Fitness', 'Organic Dining'],
        },
        {
          name: 'James R.',
          age: 34,
          match: 87,
          shared: ['Whole Foods', 'Equinox', 'Delta Airlines', 'Blue Bottle'],
          bio: 'VC at Founders Fund, world traveler',
          categories: ['Travel', 'Fitness', 'Premium Coffee'],
        },
        {
          name: 'Maya L.',
          age: 29,
          match: 82,
          shared: ['Erewhon', 'Reformation', 'The Wing', 'Drybar'],
          bio: 'Product designer, dog mom, bookworm',
          categories: ['Shopping', 'Self-Care', 'Dining'],
        },
      ].map((m, i) => (
        <div key={i} className="p-5 rounded-xl bg-dark-700 border border-white/10 hover:border-pink-500/30 transition cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {m.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">{m.name}, {m.age}</p>
                <p className="text-gray-500 text-xs">{m.bio}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-pink-400 font-bold text-lg">{m.match}%</p>
              <p className="text-gray-500 text-[10px]">lifestyle match</p>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-gray-400 text-xs mb-1.5">You both frequent:</p>
            <div className="flex flex-wrap gap-1.5">
              {m.shared.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[11px] border border-pink-500/15">{s}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {m.categories.map((c) => (
              <span key={c} className="px-2 py-0.5 rounded-full bg-dark-600 text-gray-400 text-[10px]">{c}</span>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => setConnected(false)} className="w-full py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
        ← Back to Start
      </button>
    </div>
  )
}

function JobMarketplace() {
  const [verified, setVerified] = useState(false)

  if (!verified) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Job Marketplace — Verify Your Income</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          AmandasList Jobs helps you find opportunities that pay more than what you currently make.
          Verify your income via Plaid and we'll only show you roles with higher compensation.
        </p>
        <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
          <p className="text-white text-sm font-semibold mb-3">Why Verify Income?</p>
          <div className="space-y-2">
            {[
              'See only jobs that pay MORE than your current salary',
              'Verified income badge signals you are a serious candidate',
              'Employers can confirm compensation expectations upfront',
              'No more wasting time on roles that are a step down',
            ].map((s, i) => (
              <div key={i} className="flex gap-2 items-start text-sm text-gray-300">
                <span className="text-gold-400">✓</span>
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400 text-xs">🔒 Your exact salary is never shown to employers. We only verify income brackets to match you with appropriate roles. Identity verification ensures all candidates are real people.</p>
        </div>
        <PlaidLinkButton onClick={() => setVerified(true)} label="Verify Income via Plaid" />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Jobs For You</h3>
        <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">
          ✓ Income Verified: $150K-200K
        </span>
      </div>
      <p className="text-gray-400 text-sm">Showing only roles that pay more than your verified income</p>
      {[
        { title: 'VP of Product', company: 'Series B Fintech Startup', salary: '$220K-280K', location: 'Austin, TX', match: 'High match' },
        { title: 'Head of Growth', company: 'Consumer Social (Pre-IPO)', salary: '$200K-260K + equity', location: 'Remote', match: 'High match' },
        { title: 'GM, Marketplace', company: 'Quora', salary: '$250K-320K', location: 'SF / Remote', match: 'Top match' },
        { title: 'Chief Product Officer', company: 'Health Tech Startup', salary: '$280K-350K + 1.5% equity', location: 'NYC / Remote', match: 'Top match' },
      ].map((j, i) => (
        <div key={i} className="p-4 rounded-xl bg-dark-700 border border-white/10 hover:border-gold-500/30 transition cursor-pointer">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-white font-semibold">{j.title}</p>
              <p className="text-gray-500 text-sm">{j.company}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${j.match === 'Top match' ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20' : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'}`}>
              {j.match}
            </span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span className="text-emerald-400 font-medium">{j.salary}</span>
            <span>{j.location}</span>
          </div>
          <p className="text-emerald-400/60 text-[10px] mt-1">↑ Pays more than your verified income</p>
        </div>
      ))}
      <button onClick={() => setVerified(false)} className="w-full py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
        ← Back to Start
      </button>
    </div>
  )
}

export default function PlaidDemo() {
  const [activeTab, setActiveTab] = useState('verify')

  return (
    <section id="plaid-demo" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A85EA]/30 bg-[#0A85EA]/10 text-[#0A85EA] text-sm mb-4">
            Powered by Plaid
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            How <span className="text-gold-400">Verification</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AmandasList uses Plaid to securely verify identity, income, and lifestyle data.
            All data is consent-based and user-permissioned — we never sell consumer data.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === t.id
                  ? 'bg-gold-500/15 text-gold-400 border border-gold-500/30'
                  : 'bg-dark-800 text-gray-400 border border-white/5 hover:border-white/15'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="bg-dark-800 border border-white/10 rounded-2xl p-8">
          {activeTab === 'verify' && <IdentityVerification />}
          {activeTab === 'investor' && <InvestorVerification />}
          {activeTab === 'dating' && <DatingMatching />}
          {activeTab === 'jobs' && <JobMarketplace />}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Identity Verification', cost: '$1.80/user' },
            { label: 'Transactions (Matching)', cost: '$1/user/mo' },
            { label: 'Bank Income', cost: '$6/account' },
            { label: 'ACH Payments', cost: '$1.50/txn' },
          ].map((p, i) => (
            <div key={i} className="p-3 rounded-lg bg-dark-800 border border-white/5">
              <p className="text-gray-500 text-[10px] mb-1">{p.label}</p>
              <p className="text-white text-sm font-semibold">{p.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
