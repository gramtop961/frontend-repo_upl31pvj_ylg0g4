import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast; pointer-events-none to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Your Health, Our Priority
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-4 text-white/80 text-lg"
          >
            Trusted, compassionate healthcare powered by modern technology and world-class expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8"
          >
            <button onClick={onBook} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
              Book Appointment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
