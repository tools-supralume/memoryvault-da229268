'use client'

import React, { useState } from 'react'

export default function Home() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  const [capsuleName, setCapsuleName] = useState('')
  const [unlockDate, setUnlockDate] = useState('')
  const [message, setMessage] = useState('')

  const handleFileSelect = (type: string) => {
    if (!selectedFiles.includes(type)) {
      setSelectedFiles([...selectedFiles, type])
    }
  }

  const removeFile = (type: string) => {
    setSelectedFiles(selectedFiles.filter(f => f !== type))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
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
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it works</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Preserve Today's
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Magic </span>
            for Tomorrow
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create interactive digital time capsules that combine photos, videos, voice notes, and heartfelt messages. 
            Unlock them automatically on future dates for unforgettable surprise experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('creator')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
            >
              Create Your Time Capsule →
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500">Opens December 25, 2025</span>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl">
              <span className="text-4xl">💝</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Our First Christmas</h3>
              <p className="text-gray-600 text-sm">Contains: 12 photos, 3 videos, 1 voice note</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MemoryVault?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just storage - create immersive experiences that bring your memories to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Media Support</h3>
              <p className="text-gray-600">Upload photos, videos, voice recordings, and written messages all in one beautiful time capsule.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Delivery</h3>
              <p className="text-gray-600">Set any future date and your time capsule will automatically unlock and be delivered via email.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Enhanced</h3>
              <p className="text-gray-600">Smart prompts help you capture meaningful moments and create richer, more engaging experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Create Magic in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Your Memories</h3>
              <p className="text-gray-600">Add photos, videos, voice notes, and write heartfelt messages for your future self or loved ones.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set the Date</h3>
              <p className="text-gray-600">Choose when you want your time capsule to unlock - birthdays, anniversaries, or any special date.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience the Magic</h3>
              <p className="text-gray-600">Receive a beautiful interactive experience delivered automatically on your chosen date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Capsule Creator */}
      <section id="creator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Create Your Time Capsule
            </h2>
            <p className="text-xl text-gray-600">
              Start preserving your memories for the future
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      activeStep >= step ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {activeStep > step ? '✓' : step}
                    </div>
                    {step < 3 && (
                      <div className={`h-1 w-20 mx-2 ${
                        activeStep > step ? 'bg-purple-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {activeStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Add Your Memories</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Capsule Name
                  </label>
                  <input
                    type="text"
                    value={capsuleName}
                    onChange={(e) => setCapsuleName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Our Wedding Day, Baby's First Year"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { type: 'photos', icon: '📷', label: 'Photos' },
                    { type: 'videos', icon: '🎬', label: 'Videos' },
                    { type: 'voice', icon: '🎤', label: 'Voice Notes' },
                    { type: 'text', icon: '📝', label: 'Text' },
                  ].map(({ type, icon, label }) => (
                    <button
                      key={type}
                      onClick={() => handleFileSelect(type)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedFiles.includes(type)
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                      {selectedFiles.includes(type) && (
                        <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-2 mx-auto">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {selectedFiles.length > 0 && (
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-purple-900 mb-2">Selected Media Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFiles.map((file) => (
                        <span
                          key={file}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          {file}
                          <button
                            onClick={() => removeFile(file)}
                            className="ml-2 text-purple-600 hover:text-purple-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => setActiveStep(2)}
                  disabled={!capsuleName || selectedFiles.length === 0}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            )}
            
            {activeStep === 2 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">When Should It Unlock?</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unlock Date
                  </label>
                  <input
                    type="date"
                    value={unlockDate}
                    onChange={(e) => setUnlockDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add a Message for the Future
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Write a heartfelt message that will be delivered with your time capsule..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    disabled={!unlockDate}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{capsuleName}</h4>
                    <span className="text-sm text-purple-600">Unlocks: {unlockDate}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{message}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Contains: {selectedFiles.join(', ')}</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800 text-sm">
                    🎉 Your time capsule will be automatically delivered via email on {unlockDate}. 
                    You'll receive a beautiful interactive experience to relive these memories!
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Edit
                  </button>
                  
                    href="https://buy.stripe.com/test_00000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                  >
                    Create for $9
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Create unlimited memories for one low price
          </p>
          
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white max-w-md mx-auto">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">$9</div>
              <div className="text-purple-100">per time capsule</div>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                Unlimited photos & videos
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                Voice recordings
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                Written messages
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                Automatic delivery
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                Interactive experience
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                AI-powered prompts
              </li>
            </ul>
            
            
              href="https://buy.stripe.com/test_00000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-purple-600 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Creating Memories
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white">⏰</span>
              </div>
              <span className="text-lg font-bold">MemoryVault</span>
            </div>
            <p className="text-gray-400 text-sm">
              Preserving today's memories for tomorrow's magic.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              © 2025 MemoryVault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
