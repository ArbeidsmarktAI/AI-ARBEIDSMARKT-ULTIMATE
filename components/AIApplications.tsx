'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function AIApplications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const applications = [
    {
      title: 'Automatisering',
      description: 'Repetitieve taken worden overgenomen door AI, waardoor werknemers zich kunnen richten op creatieve en strategische werkzaamheden.',
      icon: '🤖',
      examples: ['Administratieve processen', 'Dataverwerking', 'Klantenservice bots'],
    },
    {
      title: 'Slimme Planning',
      description: 'AI-gedreven planningssystemen optimaliseren roosters, logistiek en resource allocatie met ongekende precisie.',
      icon: '📅',
      examples: ['Personeelsplanning', 'Supply chain management', 'Project scheduling'],
    },
    {
      title: 'Zorgdiagnoses',
      description: 'Machine learning helpt artsen bij het stellen van snellere en nauwkeurigere diagnoses, wat levens redt.',
      icon: '🏥',
      examples: ['Medische beeldanalyse', 'Vroege detectie', 'Behandelplannen'],
    },
    {
      title: 'Predictieve Analyse',
      description: 'Voorspellende modellen helpen bedrijven trends te identificeren en weloverwogen beslissingen te nemen.',
      icon: '📈',
      examples: ['Marktanalyse', 'Risicobeheer', 'Klantgedrag voorspellen'],
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI-toepassingen in de Praktijk
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe AI vandaag de dag al wordt ingezet in verschillende sectoren.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-4">
            {applications.map((app, index) => (
              <motion.button
                key={app.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary-600 text-white shadow-xl scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{app.icon}</span>
                  <span className="text-xl font-bold">{app.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:w-2/3 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{applications[activeIndex].icon}</span>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {applications[activeIndex].title}
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {applications[activeIndex].description}
            </p>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Voorbeelden:
              </h4>
              <ul className="space-y-3">
                {applications[activeIndex].examples.map((example, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{example}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
