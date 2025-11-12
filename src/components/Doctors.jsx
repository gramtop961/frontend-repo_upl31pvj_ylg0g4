import { motion } from 'framer-motion'

const doctors = [
  { name: 'Dr. Sarah Johnson', role: 'Cardiologist', photo: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=640&q=80' },
  { name: 'Dr. Amit Verma', role: 'Neurologist', photo: 'https://images.unsplash.com/photo-1606813907291-76b6619b8e0e?w=640&q=80' },
  { name: 'Dr. Emily Chen', role: 'Pediatrician', photo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=640&q=80' },
  { name: 'Dr. Lucas Brown', role: 'Orthopedic Surgeon', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=640&q=80' },
]

export default function Doctors({ onBook }) {
  return (
    <section id="doctors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Doctors</h2>
          <p className="mt-3 text-slate-600">Experienced specialists dedicated to your health</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, idx) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={d.photo} alt={d.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                <p className="text-slate-600">{d.role}</p>
                <button onClick={onBook} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
