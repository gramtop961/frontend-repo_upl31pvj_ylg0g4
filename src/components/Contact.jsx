import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('Thank you! We will reach out soon.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-slate-600">Have questions? Send us a message.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button disabled={loading} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Hospital Address</h3>
              <p className="text-slate-600 mt-2">123 Health Ave, Wellness City, 10001</p>
              <p className="text-slate-600">Phone: (123) 456-7890</p>
              <p className="text-slate-600">Email: support@hmscare.com</p>
            </motion.div>

            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093987!2d144.9537353153167!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778a9d2f5a6!2sHospital!5e0!3m2!1sen!2s!4v1611814510!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
