import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ToothIcon from '../ui/ToothIcon'
import { WaveDivider } from '../ui/Blobs'
import { CLINIC, WORKING_HOURS } from '../../utils/constants'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const services = ['Root Canal', 'Tooth Extraction', 'Teeth Whitening', 'Veneers', 'Braces & Aligners', 'Dental Implants', 'Pediatric Dentistry', 'Crowns & Bridges']
const quickLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Meet the Doctors', href: '#doctors' },
  { label: 'Patient Reviews', href: '#reviews' },
  { label: 'Book Appointment', href: '#book' },
]

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wave top */}
      <WaveDivider className="text-gray-900 h-12 -mb-1" />

      <div className="bg-gray-900 text-gray-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center">
                  <ToothIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-lg text-white leading-none block">
                    GCC Dental
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Clinic & Specialists</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Professional dental care in the heart of Dubai. Modern technology, gentle hands, and genuine smiles.
              </p>
              <p className="font-arabic text-gray-500 text-sm" dir="rtl">
                عناية أسنان متخصصة في قلب دبي
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services list */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5">Our Services</h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-5">Contact Us</h4>
              <ul className="space-y-3.5">
                <li>
                  <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors">
                    <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                    {CLINIC.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors">
                    <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" />
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors">
                    <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                    {CLINIC.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>{CLINIC.address}</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Clock className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {WORKING_HOURS.map((wh) => (
                      <div key={wh.day} className="text-xs">
                        <span className="text-gray-500">{wh.day}:</span>{' '}
                        <span className="text-gray-300">{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} GCC Dental Clinic. All rights reserved. DHA Licensed.
            </p>
            <p className="font-arabic text-xs text-gray-600" dir="rtl">
              عيادة جي سي سي لطب الأسنان — مرخصة من هيئة الصحة بدبي
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
