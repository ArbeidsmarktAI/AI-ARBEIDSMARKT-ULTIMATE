'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function VoorStudenten() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationPaths = [
    {
      title: 'Data Science & AI',
      description: 'Leer machine learning, deep learning en big data analytics. Essentieel voor de toekomst.',
      demand: 'Zeer Hoog',
      salary: '€45.000 - €75.000',
      duration: '4 jaar Bachelor + 2 jaar Master',
      skills: ['Python', 'Machine Learning', 'Statistics', 'Big Data'],
      icon: '🤖',
    },
    {
      title: 'Software Engineering',
      description: 'Ontwikkel complexe systemen en applicaties. AI-tools maken ontwikkelaars productiever.',
      demand: 'Zeer Hoog',
      salary: '€40.000 - €70.000',
      duration: '4 jaar Bachelor',
      skills: ['Programming', 'Software Architecture', 'DevOps', 'Cloud'],
      icon: '💻',
    },
    {
      title: 'Cyber Security',
      description: 'Bescherm organisaties tegen digitale bedreigingen. AI speelt grote rol in detectie.',
      demand: 'Hoog',
      salary: '€45.000 - €80.000',
      duration: '4 jaar Bachelor + specialisatie',
      skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'AI Security'],
      icon: '🔒',
    },
    {
      title: 'Verpleegkunde',
      description: 'Mensgerichte zorg met AI-ondersteuning. Altijd vraag naar goede verpleegkundigen.',
      demand: 'Zeer Hoog',
      salary: '€30.000 - €50.000',
      duration: '4 jaar HBO',
      skills: ['Patiëntenzorg', 'Medische technologie', 'Communicatie', 'Ethiek'],
      icon: '🏥',
    },
    {
      title: 'Creative Industries',
      description: 'Combineer creativiteit met technologie. AI als tool, niet als vervanger.',
      demand: 'Gemiddeld',
      salary: '€28.000 - €55.000',
      duration: '4 jaar Bachelor',
      skills: ['Creative Direction', 'AI Design Tools', 'Storytelling', 'UX Design'],
      icon: '🎨',
    },
    {
      title: 'Business Analytics',
      description: 'Vertaal data naar business insights. Combinatie van business en technologie.',
      demand: 'Hoog',
      salary: '€38.000 - €65.000',
      duration: '4 jaar Bachelor',
      skills: ['Data Analysis', 'Business Intelligence', 'SQL', 'Visualization'],
      icon: '📊',
    },
  ]

  const tips = [
    {
      title: 'Focus op AI-literacy',
      description: 'Begrijp de basics van AI, ongeacht je studierichting.',
      icon: '🧠',
    },
    {
      title: 'Ontwikkel soft skills',
      description: 'Creativiteit, kritisch denken en communicatie zijn onvervangbaar.',
      icon: '💡',
    },
    {
      title: 'Blijf leren',
      description: 'De technologie evolueert snel. Levenslang leren is de nieuwe norm.',
      icon: '📚',
    },
    {
      title: 'Experimenteer met AI-tools',
      description: 'Gebruik ChatGPT, Midjourney, en andere tools om te leren.',
      icon: '🔬',
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
            Voor Studenten
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bereid je voor op een toekomst waarin AI een centrale rol speelt. Ontdek welke opleidingen en vaardigheden belangrijk zijn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waarom is dit belangrijk?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            Tegen 2030 zal AI een fundamentele rol spelen in bijna elk beroep. Het gaat niet meer om
            óf AI onderdeel wordt van je werk, maar hóe je ermee omgaat. Studenten die nu de juiste
            keuzes maken, hebben een enorm voordeel op de arbeidsmarkt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-100">Van toekomstige banen bestaat nog niet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">50%</div>
              <div className="text-blue-100">Meer vraag naar AI-vaardigheden</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">2030</div>
              <div className="text-blue-100">AI in elk beroep geïntegreerd</div>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Toekomstbestendige Opleidingen
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{path.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {path.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {path.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Vraag:</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                      {path.demand}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Salaris:</span>
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                      {path.salary}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Duur:</span>
                    <span className="text-gray-900 dark:text-white text-sm">
                      {path.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Tips voor Studenten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
