import { useEffect, useState } from 'react'
import { Menu, X, Hospital, Phone } from 'lucide-react'

// Simple scroll-to helper
const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Departments', id: 'departments' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleClick = (id) => {
    scrollToId(id)
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button className="flex items-center gap-2" onClick={() => handleClick('home')} aria-label="Go to home">
            <div className="p-2 rounded-md bg-blue-600 text-white"><Hospital className="w-5 h-5" /></div>
            <span className="font-semibold text-gray-800">HMS Care</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button key={l.id} onClick={() => handleClick(l.id)} className="text-gray-700 hover:text-blue-700 transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={onBook} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-sm transition-colors">
              <Phone className="w-4 h-4" /> Book Appointment
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md hover:bg-blue-50" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <button key={l.id} onClick={() => handleClick(l.id)} className="text-left px-2 py-2 rounded-md hover:bg-blue-50">
                  {l.label}
                </button>
              ))}
              <button onClick={() => { onBook(); setOpen(false) }} className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" /> Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
