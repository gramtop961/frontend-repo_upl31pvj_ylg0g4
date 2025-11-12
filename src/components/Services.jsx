import { motion } from 'framer-motion'
import { Activity, ScanLine, Pill, Scalpel } from 'lucide-react'

const services = [
  { title: 'Emergency Care', desc: '24/7 critical and trauma care with rapid response.', icon: Activity },
  { title: 'Surgery', desc: 'Advanced surgical procedures with precision and care.', icon: Scalpel },
  { title: 'Diagnostics', desc: 'Modern imaging and lab diagnostics for accurate results.', icon: ScanLine },
  { title: 'Pharmacy', desc: 'On-site pharmacy providing verified medicines and guidance.', icon: Pill },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Comprehensive care tailored to your needs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
