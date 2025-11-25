'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [count, setCount] = useState(0)
  const targetCount = 22.7

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = targetCount / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= targetCount) {
          setCount(targetCount)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:col-span-1"
          >
            <div className="text-7xl font-bold text-white mb-4">
              {count.toFixed(1)}%
            </div>
            <div className="text-2xl text-blue-100 font-semibold">
              Nederlandse bedrijven
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI is geen toekomst meer, het is het heden
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
              Volgens het CBS gebruikt al bijna een kwart van de Nederlandse bedrijven
              AI-technologie. Dit percentage groeit elk jaar exponentieel.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">75%</div>
                <div className="text-blue-100">Groei verwacht tot 2030</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">2.1M</div>
                <div className="text-blue-100">Banen getransformeerd</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
