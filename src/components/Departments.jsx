import { motion } from 'framer-motion'

const departments = [
  'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Dermatology', 'Gynecology', 'Gastroenterology'
]

export default function Departments() {
  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Departments</h2>
          <p className="mt-3 text-slate-600">Specialized units for complete care</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 text-center font-medium text-slate-800 shadow-sm"
            >
              {d}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
