import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Departments from './components/Departments'
import Doctors from './components/Doctors'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Appointment modal component (inline for simplicity)
function AppointmentModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', doctor: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

  if (!open) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${BACKEND}/api/appointment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to book')
      setStatus('Appointment request submitted! Our team will contact you.')
      setForm({ name: '', email: '', phone: '', department: '', doctor: '', message: '' })
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">Book Appointment</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          <div className="grid sm:grid-cols-2 gap-3">
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
            <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="department" value={form.department} onChange={handleChange} placeholder="Department (e.g., Cardiology)" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
            <input name="doctor" value={form.doctor} onChange={handleChange} placeholder="Preferred Doctor (optional)" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Brief note (optional)" rows="3" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          <button disabled={loading} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-60">
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted Healthcare for Everyone</h2>
            <p className="mt-4 text-slate-600">We combine compassionate care with cutting-edge technology to deliver the best outcomes for our patients.</p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
              <li>State-of-the-art facilities</li>
              <li>Experienced specialists and nurses</li>
              <li>Patient-first experience</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80" alt="Hospital" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onBook={() => setOpen(true)} />
      <main>
        <Hero onBook={() => setOpen(true)} />
        <About />
        <Services />
        <Departments />
        <Doctors onBook={() => setOpen(true)} />
        <Contact />
      </main>
      <Footer />

      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
