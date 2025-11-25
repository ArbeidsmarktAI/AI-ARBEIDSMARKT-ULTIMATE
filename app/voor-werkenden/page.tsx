'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function VoorWerkenden() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Alle Beroepen' },
    { id: 'tech', label: 'Technologie' },
    { id: 'healthcare', label: 'Zorg' },
    { id: 'finance', label: 'Financiën' },
    { id: 'education', label: 'Onderwijs' },
    { id: 'creative', label: 'Creatief' },
  ]

  const professions = [
    {
      title: 'Software Developer',
      category: 'tech',
      impact: 'Hoog',
      description: 'AI-tools zoals GitHub Copilot transformeren ontwikkeling. Focus verschuift naar architectuur en probleemoplossing.',
      skills: ['AI-assisted coding', 'System design', 'Code review'],
      risk: 'low',
    },
    {
      title: 'Data Analyst',
      category: 'tech',
      impact: 'Gemiddeld',
      description: 'AI automatiseert data cleaning en basis analyses. Menselijke interpretatie blijft cruciaal.',
      skills: ['Machine learning basics', 'Data storytelling', 'Advanced analytics'],
      risk: 'medium',
    },
    {
      title: 'Verpleegkundige',
      category: 'healthcare',
      impact: 'Laag',
      description: 'AI ondersteunt diagnoses en administratie. Menselijk contact blijft essentieel.',
      skills: ['Medische technologie', 'Patiëntcommunicatie', 'Data interpretatie'],
      risk: 'low',
    },
    {
      title: 'Accountant',
      category: 'finance',
      impact: 'Hoog',
      description: 'Automatisering van routine boekhouding. Focus op advies en strategische financiële planning.',
      skills: ['Financiële AI tools', 'Consulting', 'Risicomanagement'],
      risk: 'high',
    },
    {
      title: 'Leraar',
      category: 'education',
      impact: 'Gemiddeld',
      description: 'AI biedt gepersonaliseerd leren. Leraren worden mentors en facilitators.',
      skills: ['EdTech platforms', 'Persoonlijke begeleiding', 'Curriculum design'],
      risk: 'low',
    },
    {
      title: 'Grafisch Ontwerper',
      category: 'creative',
      impact: 'Hoog',
      description: 'AI genereert designs, maar creativiteit en strategie blijven menselijk.',
      skills: ['AI design tools', 'Creative direction', 'Brand strategy'],
      risk: 'medium',
    },
    {
      title: 'Marketing Manager',
      category: 'creative',
      impact: 'Gemiddeld',
      description: 'AI automatiseert campagnes en analyses. Strategie en creativiteit zijn key.',
      skills: ['Marketing automation', 'Strategic thinking', 'Customer insights'],
      risk: 'medium',
    },
    {
      title: 'Chirurg',
      category: 'healthcare',
      impact: 'Laag',
      description: 'Robotchirurgie assisteert, maar menselijke expertise is onvervangbaar.',
      skills: ['Robotassisted surgery', 'Precisie', 'Besluitvorming'],
      risk: 'low',
    },
  ]

  const filteredProfessions = professions.filter((prof) => {
    const matchesSearch = prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prof.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || prof.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
      case 'high':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
    }
  }

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'Laag Risico'
      case 'medium':
        return 'Gemiddeld Risico'
      case 'high':
        return 'Hoog Risico'
      default:
        return 'Onbekend'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Voor Werkenden
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe AI jouw beroep beïnvloedt en welke vaardigheden je nodig hebt om relevant te blijven in de toekomst.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="mb-6">
              <label htmlFor="search" className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Zoek jouw beroep
              </label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Bijv. ontwikkelaar, verpleegkundige, designer..."
                  className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary-600 focus:outline-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Filter op sector
              </label>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-primary-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProfessions.map((prof, index) => (
            <motion.div
              key={prof.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {prof.title}
                </h3>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getRiskColor(prof.risk)}`}>
                  {getRiskLabel(prof.risk)}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {prof.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI Impact:</span>
                  <span className="ml-2 text-primary-600 dark:text-primary-400 font-bold">{prof.impact}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Benodigde vaardigheden:</h4>
                <div className="flex flex-wrap gap-2">
                  {prof.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProfessions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Geen resultaten gevonden
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Probeer een andere zoekterm of filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
