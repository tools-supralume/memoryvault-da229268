'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-white">⏰ MemoryVault</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Preserve Today&apos;s Magic for Tomorrow
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Create digital time capsules with photos, videos, and messages that unlock on future dates.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Early Access</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg text-gray-900 mb-4"
          />
          
            href="https://buy.stripe.com/test_00000000000"
            className="block w-full bg-white text-purple-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Pre-order for $9
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <span className="text-3xl mb-4 block">📸</span>
            <h3 className="text-xl font-semibold mb-2">Multi-Media</h3>
            <p className="text-white/80">Photos, videos, voice notes, and written messages.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <span className="text-3xl mb-4 block">📅</span>
            <h3 className="text-xl font-semibold mb-2">Auto Delivery</h3>
            <p className="text-white/80">Set any date and it unlocks automatically.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <span className="text-3xl mb-4 block">✨</span>
            <h3 className="text-xl font-semibold mb-2">AI-Enhanced</h3>
            <p className="text-white/80">Smart prompts help capture meaningful moments.</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-white/60">
        <p>© 2025 MemoryVault. All rights reserved.</p>
      </footer>
    </div>
  )
}
