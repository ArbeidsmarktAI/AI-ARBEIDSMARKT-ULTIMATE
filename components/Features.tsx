'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      title: 'Voor Werkenden',
      description: 'Ontdek hoe AI jouw beroep beïnvloedt en welke vaardigheden je nodig hebt om relevant te blijven.',
      icon: '💼',
      href: '/voor-werkenden',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Voor Studenten',
      description: 'Bereid je voor op een toekomst waarin AI een centrale rol speelt. Leer welke opleidingen en vaardigheden belangrijk zijn.',
      icon: '🎓',
      href: '/voor-studenten',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Sectoranalyse',
      description: 'Diepgaande analyses van hoe AI verschillende sectoren transformeert, van zorg tot technologie.',
      icon: '📊',
      href: '/over-ons',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Contact & Feedback',
      description: 'Heb je vragen of wil je meer weten? Neem contact met ons op voor persoonlijk advies.',
      icon: '💬',
      href: '/contact',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ontdek de Mogelijkheden
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Van praktische tools tot diepgaande analyses. Alles wat je nodig hebt om de AI-revolutie te begrijpen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Lees meer
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
