import { useState } from 'react'

const TABS = [
  { id: 'investor', label: 'Angel Investors', icon: '📈' },
  { id: 'dating', label: 'Singles Network', icon: '💕' },
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

function SecondaryButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="w-full py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition font-medium">
      {children}
    </button>
  )
}

function PrivacyNote({ children }) {
  return (
    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
      <p className="text-emerald-400 text-xs">{children}</p>
    </div>
  )
}

function StepDots({ total, current }) {
  return (
    <div className="flex gap-2 mb-6 mt-3">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-1 flex-1 rounded-full ${i <= current ? 'bg-gold-500' : 'bg-dark-700'}`} />
      ))}
    </div>
  )
}

/* =========================================
   ANGEL INVESTORS — Full Plaid Verification
   ========================================= */
function InvestorVerification() {
  const [step, setStep] = useState(0)

  const steps = [
    // Step 0: Overview
    {
      title: 'Angel Investor Verification',
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            To access deal flow, syndicates, and investment opportunities on AmandasList,
            SEC regulations require verified accredited investor status. We use Plaid for a
            comprehensive, multi-layered verification process.
          </p>
          <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
            <p className="text-white text-sm font-semibold mb-3">SEC Accredited Investor Requirements</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-dark-900/50 border border-white/5">
                <p className="text-gold-400 text-xs font-semibold mb-1">INCOME PATH</p>
                <p className="text-white text-sm font-medium">$200K+ individual</p>
                <p className="text-gray-500 text-xs">or $300K+ joint, past 2 years with reasonable expectation of continuity</p>
              </div>
              <div className="p-3 rounded-lg bg-dark-900/50 border border-white/5">
                <p className="text-gold-400 text-xs font-semibold mb-1">NET WORTH PATH</p>
                <p className="text-white text-sm font-medium">$1M+ net assets</p>
                <p className="text-gray-500 text-xs">excluding primary residence</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
            <p className="text-white text-sm font-semibold mb-3">Our 4-Step Verification Process</p>
            <div className="space-y-3">
              {[
                { step: 'Identity Verification', desc: 'Government ID + selfie via Plaid Identity', product: 'Plaid Identity', cost: '$1.80' },
                { step: 'Bank Account Connection', desc: 'Link accounts to verify balances and assets', product: 'Plaid Balance', cost: '$0.10' },
                { step: 'Income Verification', desc: 'Verify income via bank deposits, payroll, or W2 upload', product: 'Plaid Income', cost: '$3-12.99' },
                { step: 'Net Worth Confirmation', desc: 'Cross-reference assets across all linked accounts', product: 'Plaid Assets', cost: '$6/acct' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-dark-900/40">
                  <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                    <div>
                      <p className="text-white text-sm font-medium">{s.step}</p>
                      <p className="text-gray-500 text-xs">{s.desc}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-gold-400 text-xs font-mono">{s.cost}</p>
                    <p className="text-gray-600 text-[10px]">{s.product}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PrivacyNote>
            {"🔒 All financial data is processed by Plaid and never stored on our servers. Verification is consent-based and user-permissioned. We never sell consumer data."}
          </PrivacyNote>
          <PlaidLinkButton onClick={() => setStep(1)} label="Start Verification" />
        </div>
      ),
    },
    // Step 1: Identity
    {
      title: 'Step 1: Identity Verification',
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
                <p className="text-gray-500 text-xs">Trusted by 12,000+ financial institutions</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Government ID uploaded', done: true },
                { label: 'Selfie captured and matched', done: true },
                { label: 'SSN last-4 confirmed', done: true },
                { label: 'Identity verified', done: true },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">&#10003;</div>
                  <span className="text-sm text-gray-300">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 text-lg">&#10003;</span>
            <div>
              <p className="text-emerald-400 text-sm font-medium">Identity Confirmed</p>
              <p className="text-emerald-400/60 text-xs">Amanda Bradford — KYC compliant</p>
            </div>
          </div>
          <PlaidLinkButton onClick={() => setStep(2)} label="Continue to Bank Connection" />
        </div>
      ),
    },
    // Step 2: Bank Connection + Balances
    {
      title: 'Step 2: Connect Bank Accounts',
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm">Link your bank and investment accounts so we can verify your asset balances for accredited investor status.</p>
          <div className="space-y-3">
            {[
              { bank: 'Chase Sapphire Checking', balance: '$47,832.19', status: 'Connected', icon: '🏦' },
              { bank: 'Schwab Brokerage', balance: '$892,445.00', status: 'Connected', icon: '📊' },
              { bank: 'Fidelity 401(k)', balance: '$234,100.50', status: 'Connected', icon: '📈' },
            ].map((a, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-dark-700 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{a.bank}</p>
                    <p className="text-emerald-400 text-xs">{a.status} via Plaid</p>
                  </div>
                </div>
                <p className="text-white text-sm font-mono">{a.balance}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-xs">Total Verified Assets</p>
              <p className="text-white font-bold text-lg">$1,174,377.69</p>
            </div>
            <div className="w-full bg-dark-900 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-emerald-400 text-xs mt-1">Exceeds $1M net worth threshold &#10003;</p>
          </div>
          <PrivacyNote>{"🔒 Balance data is checked once for verification and not stored. Plaid Balance API: $0.10 per account."}</PrivacyNote>
          <PlaidLinkButton onClick={() => setStep(3)} label="Continue to Income Verification" />
        </div>
      ),
    },
    // Step 3: Income Verification
    {
      title: 'Step 3: Income Verification',
      content: (
        <div className="space-y-6">
          <p className="text-gray-400 text-sm">We verify income through multiple Plaid products for maximum accuracy. Choose your preferred method:</p>
          <div className="space-y-3">
            {[
              {
                method: 'Bank Income',
                desc: 'Analyze deposit patterns across linked bank accounts to verify recurring income',
                cost: '$6/account',
                coverage: 'Works for all income types',
                recommended: true,
              },
              {
                method: 'Payroll Income',
                desc: 'Pull verified income directly from your payroll provider (ADP, Gusto, etc.)',
                cost: '$12.99',
                coverage: 'Covers 85% of US workforce',
                recommended: false,
              },
              {
                method: 'Document Upload',
                desc: 'Upload W2, 1099, or paystubs — OCR extracts and verifies income data',
                cost: '$3.00',
                coverage: 'Universal fallback',
                recommended: false,
              },
            ].map((m, i) => (
              <div key={i} className={`p-4 rounded-lg border ${m.recommended ? 'bg-gold-500/5 border-gold-500/30' : 'bg-dark-700 border-white/10'} cursor-pointer hover:border-gold-500/40 transition`}>
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-sm font-semibold">{m.method}</p>
                    {m.recommended && <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-medium">RECOMMENDED</span>}
                  </div>
                  <span className="text-gold-400 text-xs font-mono">{m.cost}</span>
                </div>
                <p className="text-gray-500 text-xs">{m.desc}</p>
                <p className="text-gray-600 text-[10px] mt-1">{m.coverage}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-dark-700 border border-emerald-500/20">
            <p className="text-white text-sm font-medium mb-2">Bank Income Analysis Results</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Average Monthly Deposits</span>
                <span className="text-white font-medium">$22,450</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Annualized Income</span>
                <span className="text-emerald-400 font-bold">$269,400</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Income Streams Detected</span>
                <span className="text-white font-medium">3 (salary, investment, consulting)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Consistency</span>
                <span className="text-emerald-400 font-medium">24 months verified &#10003;</span>
              </div>
            </div>
          </div>
          <PlaidLinkButton onClick={() => setStep(4)} label="Complete Verification" />
        </div>
      ),
    },
    // Step 4: Verified Dashboard
    {
      title: 'Verification Complete',
      content: (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-gold-500/10 to-emerald-500/10 border border-gold-500/20 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
              <span className="text-4xl">&#10003;</span>
            </div>
            <h4 className="text-white font-bold text-lg">Amanda Bradford</h4>
            <p className="text-emerald-400 text-sm font-medium mb-4">Accredited Investor — Fully Verified</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Identity (Plaid IDV)</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Assets: $1.17M</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Income: $269K</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; KYC Compliant</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Identity', product: 'Plaid IDV', cost: '$1.80' },
              { label: 'Balances', product: 'Plaid Balance', cost: '$0.30' },
              { label: 'Income', product: 'Plaid Bank Income', cost: '$6.00' },
              { label: 'Total', product: 'Per investor', cost: '$8.10' },
            ].map((p, i) => (
              <div key={i} className={`p-2 rounded-lg text-center ${i === 3 ? 'bg-gold-500/10 border border-gold-500/20' : 'bg-dark-700 border border-white/5'}`}>
                <p className="text-gray-500 text-[10px]">{p.label}</p>
                <p className={`text-sm font-bold ${i === 3 ? 'text-gold-400' : 'text-white'}`}>{p.cost}</p>
                <p className="text-gray-600 text-[9px]">{p.product}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-3">Your Deal Flow</p>
            {[
              { name: 'Zipline \u2014 Series D Extension', amount: '$5-20M allocation', tag: 'Robotics/Delivery', status: 'Closing Mar 15' },
              { name: 'Anthropic \u2014 Secondary Shares', amount: 'Min $100K', tag: 'AI/Enterprise', status: 'Open' },
              { name: 'SpaceX \u2014 Tender Offer', amount: 'Min $250K', tag: 'Aerospace', status: 'Limited' },
            ].map((d, i) => (
              <div key={i} className="flex items-center justify-between p-3 mb-2 rounded-lg bg-dark-700 border border-white/5 hover:border-gold-500/30 transition cursor-pointer">
                <div>
                  <p className="text-white text-sm font-medium">{d.name}</p>
                  <p className="text-gray-500 text-xs">{d.tag}</p>
                </div>
                <div className="text-right">
                  <p className="text-gold-400 text-xs font-medium">{d.amount}</p>
                  <p className="text-gray-600 text-[10px]">{d.status}</p>
                </div>
              </div>
            ))}
          </div>
          <SecondaryButton onClick={() => setStep(0)}>{"\u2190 Back to Start"}</SecondaryButton>
        </div>
      ),
    },
  ]

  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{steps[step].title}</h3>
      <StepDots total={steps.length} current={step} />
      {steps[step].content}
    </div>
  )
}

/* =========================================
   SINGLES NETWORK — Tiered Verification
   ========================================= */
function DatingMatching() {
  const [step, setStep] = useState(0)

  if (step === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Singles Network Verification</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          AmandasList Singles uses a tiered verification model. Everyone verifies their identity.
          Additional data sharing is optional and unlocks richer matches \u2014 on a quid pro quo basis.
        </p>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-dark-700 border border-pink-500/30 relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 text-[10px] font-semibold">REQUIRED</span>
              <p className="text-white text-sm font-semibold">Tier 1: Identity Verification</p>
            </div>
            <p className="text-gray-500 text-xs mb-2">Government ID + selfie match via Plaid Identity. Proves you are a real person. Every user on the platform is identity-verified \u2014 no bots, no catfish.</p>
            <p className="text-gold-400 text-xs font-mono">Plaid Identity: $1.80/user</p>
          </div>

          <div className="p-4 rounded-lg bg-dark-700 border border-white/10 relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-semibold">OPTIONAL</span>
              <p className="text-white text-sm font-semibold">Tier 2: Lifestyle Matching</p>
            </div>
            <p className="text-gray-500 text-xs mb-2">Connect your bank to match with people who share your spending habits. We analyze merchant categories only \u2014 never dollar amounts or balances.</p>
            <div className="p-3 rounded bg-dark-900/50 border border-white/5 mb-2">
              <p className="text-white text-xs font-medium mb-1.5">What We See (Categories Only):</p>
              <div className="flex flex-wrap gap-1.5">
                {['Dining', 'Fitness', 'Travel', 'Shopping', 'Entertainment', 'Coffee', 'Groceries', 'Wellness'].map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[10px] border border-pink-500/15">{c}</span>
                ))}
              </div>
              <p className="text-gray-600 text-[10px] mt-1.5">NEVER: dollar amounts, account numbers, balances, or specific transaction details.</p>
            </div>
            <p className="text-gold-400 text-xs font-mono">Plaid Transactions: $1/user/month \u00B7 2yr history \u00B7 refreshes 3-4x daily</p>
          </div>

          <div className="p-4 rounded-lg bg-dark-700 border border-white/10 relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-semibold">OPTIONAL UPGRADE</span>
              <p className="text-white text-sm font-semibold">Tier 3: Income & Net Worth Verification</p>
            </div>
            <p className="text-gray-500 text-xs mb-3">Verify your income or net worth to unlock a "Verified Income" badge. This works on a <strong className="text-white">quid pro quo</strong> basis:</p>
            <div className="p-3 rounded-lg bg-gold-500/5 border border-gold-500/20 mb-3">
              <p className="text-white text-xs font-semibold mb-2">Quid Pro Quo Permissions</p>
              <div className="space-y-2">
                <div className="flex gap-2 items-start">
                  <span className="text-gold-400 text-xs mt-0.5">{"\u2194"}</span>
                  <p className="text-gray-300 text-xs">You can only see other people\u2019s verified income if you share yours</p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-gold-400 text-xs mt-0.5">{"\u2194"}</span>
                  <p className="text-gray-300 text-xs">Profiles show "Income Verified" badge, but the bracket is only visible to other verified users</p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-gold-400 text-xs mt-0.5">{"\u2194"}</span>
                  <p className="text-gray-300 text-xs">Creates trust through mutual transparency \u2014 both sides opt in equally</p>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              {[
                { method: 'Bank Income', cost: '$6/acct', desc: 'Verify via bank deposit analysis' },
                { method: 'Payroll Income', cost: '$12.99', desc: 'Verify via payroll provider' },
                { method: 'Document Upload', cost: '$3.00', desc: 'Upload W2, 1099, or paystubs' },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-dark-900/40 text-xs">
                  <div>
                    <span className="text-white font-medium">{m.method}</span>
                    <span className="text-gray-500 ml-2">{m.desc}</span>
                  </div>
                  <span className="text-gold-400 font-mono">{m.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PrivacyNote>{"🔒 All data sharing is consent-based and user-permissioned. You control what you share and can revoke access at any time. Data is never sold to third parties."}</PrivacyNote>
        <PlaidLinkButton onClick={() => setStep(1)} label="Verify My Identity (Required)" />
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Identity Verified!</h3>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg">&#10003;</div>
          <div>
            <p className="text-emerald-400 font-medium text-sm">Amanda Bradford \u2014 Identity Verified</p>
            <p className="text-emerald-400/60 text-xs">Real person confirmed via Plaid IDV</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">You can now browse and match with other verified singles. Want to unlock richer matching?</p>

        <div className="space-y-3">
          <button onClick={() => setStep(2)} className="w-full p-4 rounded-lg bg-dark-700 border border-purple-500/20 hover:border-purple-500/40 transition text-left">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">&#9734;</span>
                <p className="text-white text-sm font-semibold">Enable Lifestyle Matching</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 text-[10px]">+$1/mo</span>
            </div>
            <p className="text-gray-500 text-xs">Connect bank to match on spending habits (Erewhon, SoulCycle, etc.)</p>
          </button>

          <button onClick={() => setStep(3)} className="w-full p-4 rounded-lg bg-dark-700 border border-gold-500/20 hover:border-gold-500/40 transition text-left">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-400">&#9733;</span>
                <p className="text-white text-sm font-semibold">Verify Income / Net Worth</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-400 text-[10px]">QUID PRO QUO</span>
            </div>
            <p className="text-gray-500 text-xs">Share yours to see others\u2019. Mutual transparency builds trust.</p>
          </button>

          <button onClick={() => setStep(4)} className="w-full py-3 text-gray-500 text-sm hover:text-gray-300 transition">
            Skip for now \u2192 Browse with identity verification only
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-white">Lifestyle Matches Unlocked</h3>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Identity</span>
          <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs border border-purple-500/20">&#10003; Lifestyle</span>
          <span className="px-3 py-1 rounded-full bg-dark-700 text-gray-500 text-xs border border-white/5">&#9675; Income (not verified)</span>
        </div>
        <p className="text-gray-400 text-sm">Matched based on shared spending patterns</p>
        {[
          { name: 'Sarah K.', age: 31, match: 94, shared: ['Erewhon', 'SoulCycle', 'Soho House', 'Sweetgreen'], bio: 'Founder, wellness junkie', income: true },
          { name: 'James R.', age: 34, match: 87, shared: ['Whole Foods', 'Equinox', 'Delta Airlines', 'Blue Bottle'], bio: 'VC, world traveler', income: true },
          { name: 'Maya L.', age: 29, match: 82, shared: ['Erewhon', 'Reformation', 'The Wing', 'Drybar'], bio: 'Product designer, dog mom', income: false },
        ].map((m, i) => (
          <div key={i} className="p-5 rounded-xl bg-dark-700 border border-white/10 hover:border-pink-500/30 transition cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">{m.name.charAt(0)}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold">{m.name}, {m.age}</p>
                    <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white">&#10003;</span>
                    {m.income && <span className="px-1.5 py-0.5 rounded bg-gold-500/15 text-gold-400 text-[9px]">&#128274; Income Verified</span>}
                  </div>
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
            {m.income && (
              <div className="mt-2 p-2 rounded bg-gold-500/5 border border-gold-500/10">
                <p className="text-gold-400 text-[10px]">&#128274; This person verified their income. Verify yours to see their bracket.</p>
              </div>
            )}
          </div>
        ))}
        <button onClick={() => setStep(3)} className="w-full py-3 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/15 transition font-medium text-sm">
          &#9733; Verify My Income to Unlock Theirs
        </button>
        <SecondaryButton onClick={() => setStep(0)}>{"\u2190 Back to Start"}</SecondaryButton>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-white">Full Verification \u2014 All Tiers Unlocked</h3>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Identity</span>
          <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs border border-purple-500/20">&#10003; Lifestyle</span>
          <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 text-xs border border-gold-500/20">&#10003; Income: $150K-200K</span>
        </div>
        <p className="text-gray-400 text-sm">Full matches with lifestyle + income visibility (quid pro quo)</p>
        {[
          { name: 'Sarah K.', age: 31, match: 94, shared: ['Erewhon', 'SoulCycle', 'Soho House'], bio: 'Founder, wellness junkie', income: '$200K-250K', verified: true },
          { name: 'James R.', age: 34, match: 87, shared: ['Whole Foods', 'Equinox', 'Delta Airlines'], bio: 'VC, world traveler', income: '$300K+', verified: true },
          { name: 'Maya L.', age: 29, match: 82, shared: ['Erewhon', 'Reformation', 'The Wing'], bio: 'Product designer, dog mom', income: null, verified: false },
        ].map((m, i) => (
          <div key={i} className="p-5 rounded-xl bg-dark-700 border border-white/10 hover:border-pink-500/30 transition cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">{m.name.charAt(0)}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold">{m.name}, {m.age}</p>
                    <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white">&#10003;</span>
                  </div>
                  <p className="text-gray-500 text-xs">{m.bio}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-pink-400 font-bold text-lg">{m.match}%</p>
                <p className="text-gray-500 text-[10px]">lifestyle match</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {m.shared.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[11px] border border-pink-500/15">{s}</span>
              ))}
            </div>
            {m.verified ? (
              <div className="p-2 rounded bg-gold-500/5 border border-gold-500/10 flex items-center justify-between">
                <span className="text-gold-400 text-xs font-medium">&#10003; Verified Income</span>
                <span className="text-white text-xs font-semibold">{m.income}</span>
              </div>
            ) : (
              <div className="p-2 rounded bg-dark-900/50 border border-white/5">
                <p className="text-gray-500 text-[10px]">This person has not verified their income</p>
              </div>
            )}
          </div>
        ))}
        <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20">
          <p className="text-white text-xs font-semibold mb-1">Quid Pro Quo in Action</p>
          <p className="text-gray-400 text-[11px]">You verified your income ($150K-200K), so you can see Sarah\u2019s ($200K-250K) and James\u2019s ($300K+). Maya hasn\u2019t verified, so no income is shown for her \u2014 and she can\u2019t see yours either.</p>
        </div>
        <SecondaryButton onClick={() => setStep(0)}>{"\u2190 Back to Start"}</SecondaryButton>
      </div>
    )
  }

  // Step 4: Basic browse (identity only)
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white">Browse \u2014 Identity Verified Only</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Identity Verified</span>
      </div>
      <p className="text-gray-400 text-sm">Basic matching \u2014 all users are verified real people. Upgrade anytime for lifestyle or income matching.</p>
      {[
        { name: 'Sarah K.', age: 31, bio: 'Founder, wellness junkie, weekend hiker', hasLifestyle: true, hasIncome: true },
        { name: 'James R.', age: 34, bio: 'VC at Founders Fund, world traveler', hasLifestyle: true, hasIncome: true },
        { name: 'Maya L.', age: 29, bio: 'Product designer, dog mom, bookworm', hasLifestyle: false, hasIncome: false },
      ].map((m, i) => (
        <div key={i} className="p-4 rounded-xl bg-dark-700 border border-white/10 hover:border-pink-500/30 transition cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">{m.name.charAt(0)}</div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-white font-semibold">{m.name}, {m.age}</p>
                <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white">&#10003;</span>
              </div>
              <p className="text-gray-500 text-xs">{m.bio}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {m.hasLifestyle && <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] border border-purple-500/15">&#128274; Lifestyle data available</span>}
            {m.hasIncome && <span className="px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 text-[10px] border border-gold-500/15">&#128274; Income verified</span>}
          </div>
          {(m.hasLifestyle || m.hasIncome) && (
            <p className="text-gray-600 text-[10px] mt-1">Connect your bank to unlock their lifestyle data. Verify income to see their bracket.</p>
          )}
        </div>
      ))}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => setStep(2)} className="py-3 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/15 transition font-medium text-xs">
          Enable Lifestyle Matching
        </button>
        <button onClick={() => setStep(3)} className="py-3 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/15 transition font-medium text-xs">
          Verify Income
        </button>
      </div>
      <SecondaryButton onClick={() => setStep(0)}>{"\u2190 Back to Start"}</SecondaryButton>
    </div>
  )
}

/* =========================================
   JOB MARKETPLACE — Employment + Income
   ========================================= */
function JobMarketplace() {
  const [step, setStep] = useState(0)

  if (step === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Job Marketplace Verification</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          AmandasList Jobs verifies your identity, current/past employment, and income
          so you only see roles that are a step up. Employers see verified candidates, not resume fiction.
        </p>

        <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
          <p className="text-white text-sm font-semibold mb-3">Verification Flow</p>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-dark-900/50 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-white text-sm font-semibold">Identity Verification</p>
                <span className="text-gold-400 text-xs font-mono ml-auto">$1.80</span>
              </div>
              <p className="text-gray-500 text-xs ml-7">Government ID + selfie via Plaid Identity. KYC compliant.</p>
            </div>

            <div className="p-3 rounded-lg bg-dark-900/50 border border-gold-500/20">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-white text-sm font-semibold">Employment Verification via W2 Detection</p>
              </div>
              <p className="text-gray-500 text-xs ml-7 mb-2">We connect to your bank via Plaid Transactions and detect W2 payroll deposits to confirm your current or most recent employer.</p>
              <div className="ml-7 p-3 rounded bg-dark-700 border border-white/5">
                <p className="text-white text-xs font-medium mb-1">How W2 Detection Works:</p>
                <div className="space-y-1">
                  {[
                    'Plaid scans 2 years of transaction history for payroll deposits',
                    'Identifies employer name from deposit metadata (e.g. "GOOGLE INC PAYROLL")',
                    'Confirms pay frequency, employer, and income level',
                    'Last deposit date determines if currently employed or departed',
                  ].map((s, i) => (
                    <p key={i} className="text-gray-500 text-[11px] flex gap-1.5"><span className="text-gold-400">&#8226;</span> {s}</p>
                  ))}
                </div>
              </div>
              <p className="text-gold-400 text-xs font-mono ml-7 mt-2">Plaid Transactions: $1/user/month</p>
            </div>

            <div className="p-3 rounded-lg bg-dark-900/50 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-white text-sm font-semibold">Left Over 1 Year Ago? Fallback Verification</p>
              </div>
              <p className="text-gray-500 text-xs ml-7 mb-2">If Plaid transactions show no payroll deposits in the past 12 months, we use a tiered fallback system:</p>
              <div className="ml-7 space-y-2">
                {[
                  {
                    tier: 'Tier 1',
                    method: 'Plaid Payroll Income',
                    desc: 'Direct verification from payroll provider (ADP, Gusto, Workday). Shows employer name, job title, pay rate \u2014 even after departure. Covers 85% of US workforce.',
                    cost: '$12.99',
                    color: 'emerald',
                  },
                  {
                    tier: 'Tier 2',
                    method: 'Plaid Document Upload',
                    desc: 'Upload W2, 1099, offer letter, or final paystub. OCR extracts and verifies employer + income. Works for any employer.',
                    cost: '$3.00',
                    color: 'blue',
                  },
                  {
                    tier: 'Tier 3',
                    method: 'Work Email Verification',
                    desc: 'Verify you had a @company.com email address. We send a one-time code. Works if you still have email access (common with Google Workspace alumni).',
                    cost: 'Free',
                    color: 'purple',
                  },
                  {
                    tier: 'Tier 4',
                    method: 'Automated Reference Check',
                    desc: 'Integration with Truework API \u2014 contacts employer HR system directly for employment verification. Covers 75%+ of US employers. 1-2 business day turnaround.',
                    cost: '$15-30',
                    color: 'amber',
                  },
                ].map((t, i) => (
                  <div key={i} className={`p-2.5 rounded-lg bg-dark-700 border border-${t.color}-500/15`}>
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold bg-${t.color}-500/20 text-${t.color}-400`}>{t.tier}</span>
                        <p className="text-white text-xs font-medium">{t.method}</p>
                      </div>
                      <span className="text-gold-400 text-[10px] font-mono">{t.cost}</span>
                    </div>
                    <p className="text-gray-500 text-[10px] leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <PrivacyNote>{"🔒 Your exact salary is never shown to employers. We verify income brackets and employment history only. All data is consent-based and user-permissioned."}</PrivacyNote>
        <PlaidLinkButton onClick={() => setStep(1)} label="Start Employment Verification" />
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Employment Detected via Plaid</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">&#10003; Identity Verified</span>
        </div>

        <div className="p-4 rounded-lg bg-dark-700 border border-emerald-500/20">
          <p className="text-white text-sm font-semibold mb-3">W2 Payroll Deposits Detected</p>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-dark-900/50">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white text-sm font-medium">Current Employer</p>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px]">ACTIVE</span>
              </div>
              <p className="text-gold-400 text-sm font-semibold">Meta Platforms, Inc.</p>
              <div className="flex gap-4 mt-1 text-xs text-gray-500">
                <span>Payroll: Bi-weekly</span>
                <span>Last deposit: Feb 14, 2026</span>
                <span>Duration: 2.3 years</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-dark-900/50">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white text-sm font-medium">Previous Employer</p>
                <span className="px-2 py-0.5 rounded-full bg-gray-500/15 text-gray-400 text-[10px]">DEPARTED</span>
              </div>
              <p className="text-white text-sm">Stripe, Inc.</p>
              <div className="flex gap-4 mt-1 text-xs text-gray-500">
                <span>Last deposit: Sep 30, 2023</span>
                <span>Duration: 1.8 years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-dark-700 border border-white/10">
          <p className="text-white text-sm font-medium mb-2">Verified Income Bracket</p>
          <div className="flex items-center gap-3">
            <p className="text-emerald-400 font-bold text-2xl">$150K-200K</p>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px]">Verified via Plaid</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">Based on W2 payroll deposit analysis. Exact amount never disclosed.</p>
        </div>

        <PlaidLinkButton onClick={() => setStep(2)} label="View Jobs That Pay More" />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Jobs For You</h3>
        <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/20">
          &#10003; Verified: Meta \u00B7 $150K-200K
        </span>
      </div>
      <p className="text-gray-400 text-sm">Showing only roles that pay more than your verified income at Meta</p>
      {[
        { title: 'VP of Product', company: 'Series B Fintech Startup', salary: '$220K-280K', location: 'Austin, TX', delta: '+$40K-100K', match: 'Top match' },
        { title: 'Head of Growth', company: 'Consumer Social (Pre-IPO)', salary: '$200K-260K + equity', location: 'Remote', delta: '+$20K-80K', match: 'High match' },
        { title: 'GM, Marketplace', company: 'Quora', salary: '$250K-320K', location: 'SF / Remote', delta: '+$70K-140K', match: 'Top match' },
        { title: 'Chief Product Officer', company: 'Health Tech Series C', salary: '$280K-350K + 1.5% equity', location: 'NYC / Remote', delta: '+$100K-170K', match: 'Top match' },
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
          <p className="text-emerald-400 text-xs mt-1 font-medium">{"\u2191"} {j.delta} vs your current verified income</p>
        </div>
      ))}
      <SecondaryButton onClick={() => setStep(0)}>{"\u2190 Back to Start"}</SecondaryButton>
    </div>
  )
}

/* =========================================
   MAIN PLAID DEMO SECTION
   ========================================= */
export default function PlaidDemo() {
  const [activeTab, setActiveTab] = useState('investor')

  return (
    <section id="plaid-demo" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A85EA]/30 bg-[#0A85EA]/10 text-[#0A85EA] text-sm mb-4">
            Powered by Plaid
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Three Verticals, Three <span className="text-gold-400">Verification Flows</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each AmandasList vertical has a custom Plaid integration tailored to its verification needs.
            All data is consent-based and user-permissioned. We never sell consumer data.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
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
          {activeTab === 'investor' && <InvestorVerification />}
          {activeTab === 'dating' && <DatingMatching />}
          {activeTab === 'jobs' && <JobMarketplace />}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-dark-800 border border-white/5">
          <p className="text-white text-sm font-semibold mb-4 text-center">Plaid Products Used Across Verticals</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'Identity Verification', cost: '$1.80/user', verticals: 'All 3' },
              { label: 'Transactions', cost: '$1/user/mo', verticals: 'Singles, Jobs' },
              { label: 'Bank Income', cost: '$6/account', verticals: 'Investors' },
              { label: 'Payroll Income', cost: '$12.99', verticals: 'Jobs fallback' },
              { label: 'Document Income', cost: '$3.00', verticals: 'Jobs fallback' },
              { label: 'Balance', cost: '$0.10/acct', verticals: 'Investors' },
            ].map((p, i) => (
              <div key={i} className="p-3 rounded-lg bg-dark-900/50 border border-white/5 text-center">
                <p className="text-white text-xs font-semibold mb-0.5">{p.cost}</p>
                <p className="text-gray-500 text-[10px] mb-1">{p.label}</p>
                <p className="text-gold-400 text-[9px]">{p.verticals}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
