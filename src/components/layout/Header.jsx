import { useState, useEffect } from 'react'
import { Menu, X, Clock, Phone } from 'lucide-react'
import ToothIcon from '../ui/ToothIcon'
import { CLINIC, NAV_LINKS } from '../../utils/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md shadow-lg shadow-black/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-teal-600 group-hover:bg-teal-700' : 'bg-white/15 group-hover:bg-white/25'}`}>
              <ToothIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-lg leading-none transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                GCC <span className={scrolled ? 'text-teal-600' : 'text-teal-200'}>Dental</span>
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase transition-colors ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                Clinic & Specialists
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  scrolled
                    ? 'text-gray-600 hover:text-teal-600 hover:bg-teal-50/60'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: hours badge (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
              scrolled
                ? 'bg-teal-50 text-teal-700'
                : 'bg-white/10 text-white/70'
            }`}>
              <Clock className="w-3 h-3" />
              Open 7 Days
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all ${
              scrolled
                ? 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`lg:hidden pb-5 animate-fade-in-up ${scrolled ? 'border-t border-gray-100' : 'border-t border-white/10'}`} style={{ animationDuration: '0.25s' }}>
            <nav className="flex flex-col gap-1 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                    scrolled
                      ? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3 px-2">
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {CLINIC.phoneDisplay}
                </a>
                <div className={`flex items-center justify-center gap-1.5 text-xs pt-1 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                  <Clock className="w-3 h-3" />
                  Mon–Fri 9AM–9PM · Sat 10–6 · Sun 10–4
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
