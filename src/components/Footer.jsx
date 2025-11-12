import { Facebook, Instagram, Twitter, Hospital } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white"><Hospital className="w-5 h-5" /></div>
            <span className="font-semibold">HMS Care</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">Compassionate care, modern technology, and trusted specialists.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#departments" className="hover:text-white">Departments</a></li>
            <li><a href="#doctors" className="hover:text-white">Doctors</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} HMS Care. All rights reserved.
      </div>
    </footer>
  )
}
