'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function OverOns() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectors = [
    {
      name: 'Technologie',
      impact: 'Zeer Hoog',
      description: 'Software ontwikkeling wordt geautomatiseerd, maar vraag naar engineers groeit.',
      trends: ['AI-assisted coding', 'DevOps automation', 'Cloud native development'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Gezondheidszorg',
      impact: 'Hoog',
      description: 'AI ondersteunt diagnoses en behandeling. Menselijk contact blijft cruciaal.',
      trends: ['Medische AI', 'Robotchirurgie', 'Gepersonaliseerde geneeskunde'],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Financiën',
      impact: 'Zeer Hoog',
      description: 'Automatisering van analyse en trading. Focus verschuift naar advies.',
      trends: ['Algorithmic trading', 'Risk assessment AI', 'Fraud detection'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      name: 'Onderwijs',
      impact: 'Gemiddeld',
      description: 'Gepersonaliseerd leren door AI. Leraren worden mentors en coaches.',
      trends: ['Adaptive learning', 'AI tutoring', 'Skills assessment'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Retail',
      impact: 'Hoog',
      description: 'Personalisatie en automatisering transformeren winkelervaring.',
      trends: ['Personalized recommendations', 'Inventory optimization', 'Chatbots'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Transport',
      impact: 'Zeer Hoog',
      description: 'Autonome voertuigen en slimme logistiek veranderen de sector fundamenteel.',
      trends: ['Autonomous vehicles', 'Route optimization', 'Predictive maintenance'],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Huidige Situatie',
      description: '22.7% van Nederlandse bedrijven gebruikt AI. Early adopters zien significante voordelen.',
    },
    {
      year: '2026',
      title: 'Brede Adoptie',
      description: 'Meer dan 50% van bedrijven integreert AI in dagelijkse operaties.',
    },
    {
      year: '2028',
      title: 'Transformatie',
      description: 'AI wordt standaard in de meeste sectoren. Nieuwe beroepen ontstaan.',
    },
    {
      year: '2030',
      title: 'Nieuwe Norm',
      description: 'AI-vaardigheden zijn essentieel. Focus op menselijke creativiteit en strategie.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Over Ons
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe AI verschillende sectoren transformeert en wat dit betekent voor de toekomst van werk in Nederland.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 mb-16 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Onze Missie
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Wij geloven dat kennis over AI essentieel is voor iedereen op de arbeidsmarkt. Onze missie
            is om werkenden en studenten te informeren over de impact van kunstmatige intelligentie,
            zodat zij weloverwogen keuzes kunnen maken over hun carrière en toekomst.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Door toegankelijke informatie, praktische tools en diepgaande analyses willen we een brug
            slaan tussen technologie en de mensen die ermee werken.
          </p>
        </motion.div>

        <div ref={ref} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            AI Impact per Sector
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-3 bg-gradient-to-r ${sector.color}`} />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {sector.name}
                    </h3>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                      {sector.impact}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Trends:</h4>
                    <ul className="space-y-2">
                      {sector.trends.map((trend, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            De AI Tijdlijn
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-blue-100 mb-2">{item.title}</h3>
                      <p className="text-blue-200">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-white rounded-full border-4 border-primary-600 dark:border-primary-400 z-10" />
                  </div>
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
