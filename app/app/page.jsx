'use client'

import { useState } from 'react'

export default function Home() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [capsuleName, setCapsuleName] = useState('')
  const [unlockDate, setUnlockDate] = useState('')
  const [message, setMessage] = useState('')

  const handleFileSelect = (type) => {
    if (!selectedFiles.includes(type)) {
      setSelectedFiles([...selectedFiles, type])
    }
  }

  const removeFile = (type) => {
    setSelectedFiles(selectedFiles.filter(f => f !== type))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">⏰</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MemoryVault</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How it works</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Preserve Today&apos;s
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Magic </span>
          for Tomorrow
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Create interactive digital time capsules that combine photos, videos, voice notes, and heartfelt messages. 
          Unlock them automatically on future dates.
        </p>
        <button 
          onClick={() => document.getElementById('creator')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg"
        >
          Create Your Time Capsule →
        </button>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose MemoryVault?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Media Support</h3>
              <p className="text-gray-600">Upload photos, videos, voice recordings, and written messages.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Delivery</h3>
              <p className="text-gray-600">Set any future date and your capsule will unlock automatically.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Enhanced</h3>
              <p className="text-gray-600">Smart prompts help you capture meaningful moments.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Create Magic in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Upload Your Memories', desc: 'Add photos, videos, voice notes, and heartfelt messages.' },
              { num: '2', title: 'Set the Date', desc: 'Choose when you want your time capsule to unlock.' },
              { num: '3', title: 'Experience the Magic', desc: 'Receive a beautiful interactive experience on your chosen date.' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="creator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Create Your Time Capsule
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    activeStep >= step ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {activeStep > step ? '✓' : step}
                  </div>
                  {step < 3 && <div className={`h-1 w-12 mx-2 ${activeStep > step ? 'bg-purple-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            {activeStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Add Your Memories</h3>
                <input
                  type="text"
                  value={capsuleName}
                  onChange={(e) => setCapsuleName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-6"
                  placeholder="Time Capsule Name (e.g., Our Wedding Day)"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { type: 'photos', icon: '📷', label: 'Photos' },
                    { type: 'videos', icon: '🎬', label: 'Videos' },
                    { type: 'voice', icon: '🎤', label: 'Voice' },
                    { type: 'text', icon: '📝', label: 'Text' },
                  ].map(({ type, icon, label }) => (
                    <button
                      key={type}
                      onClick={() => handleFileSelect(type)}
                      className={`p-4 rounded-xl border-2 ${
                        selectedFiles.includes(type) ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setActiveStep(2)}
                  disabled={!capsuleName || selectedFiles.length === 0}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                  Next Step
                </button>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">When Should It Unlock?</h3>
                <input
                  type="date"
                  value={unlockDate}
                  onChange={(e) => setUnlockDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-6"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-6"
                  placeholder="Write a message for the future..."
                />
                <div className="flex gap-4">
                  <button onClick={() => setActiveStep(1)} className="flex-1 border border-gray-300 py-3 rounded-lg">
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    disabled={!unlockDate}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                  >
                    Preview
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Preview Your Time Capsule</h3>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl mb-6">
                  <h4 className="font-semibold text-gray-900">{capsuleName}</h4>
                  <p className="text-sm text-purple-600 mb-2">Unlocks: {unlockDate}</p>
                  <p className="text-gray-600 text-sm">{message}</p>
                  <p className="text-gray-500 text-xs mt-2">Contains: {selectedFiles.join(', ')}</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setActiveStep(2)} className="flex-1 border border-gray-300 py-3 rounded-lg">
                    Edit
                  </button>
                  
                    href="https://buy.stripe.com/test_00000000000"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-center"
                  >
                    Create for $9
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Simple Pricing</h2>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="text-5xl font-bold mb-2">$9</div>
            <div className="text-purple-100 mb-6">per time capsule</div>
            <ul className="text-left space-y-3 mb-8">
              {['Unlimited photos & videos', 'Voice recordings', 'Written messages', 'Automatic delivery', 'Interactive experience'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="mr-3 text-green-400">✓</span>{feature}
                </li>
              ))}
            </ul>
            
              href="https://buy.stripe.com/test_00000000000"
              className="block w-full bg-white text-purple-600 py-4 rounded-xl font-semibold"
            >
              Start Creating Memories
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span>⏰</span>
            </div>
            <span className="text-lg font-bold">MemoryVault</span>
          </div>
          <p className="text-gray-400 text-sm">Preserving today&apos;s memories for tomorrow&apos;s magic.</p>
          <p className="text-gray-500 text-xs mt-4">© 2025 MemoryVault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
