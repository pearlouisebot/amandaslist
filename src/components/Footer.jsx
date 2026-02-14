import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer id="waitlist" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the <span className="text-gold-400">Waitlist</span>
        </h2>
        <p className="text-gray-400 mb-8">Be the first to access verified communities and trusted deal flow.</p>
        {submitted ? (
          <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/30">
            <p className="text-gold-400 font-semibold">You're on the list! ✨</p>
            <p className="text-sm text-gray-400 mt-1">We'll reach out when your spot is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500/50"
            />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:brightness-110 transition whitespace-nowrap">
              Apply Now
            </button>
          </form>
        )}
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">© 2026 Amanda's List. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
