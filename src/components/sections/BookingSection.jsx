import { useEffect } from 'react'
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import Button from '../ui/Button'
import { BlobOne, BlobTwo } from '../ui/Blobs'
import { CLINIC, WORKING_HOURS } from '../../utils/constants'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function BookingSection() {
  useEffect(() => {
    // Load Calendly widget script
    const existing = document.querySelector('script[src*="calendly.com"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      document.head.appendChild(s)
    }
  }, [])

  return (
    <section id="book" className="relative py-24 bg-white overflow-hidden">
      {/* Blobs */}
      <BlobOne className="absolute -top-32 -right-32 w-[400px] h-[400px] text-teal-50/70 animate-blob" />
      <BlobTwo className="absolute -bottom-40 -left-40 w-[500px] h-[500px] text-cream animate-blob-reverse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-4 tracking-wide">
            Book Your Visit
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4">
            Schedule an <span className="text-teal-600">Appointment</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Pick a time that works for you. Alternatively, message us on WhatsApp and we'll handle the rest.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Calendly embed */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 overflow-hidden relative">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/astrobubu/consultation?hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=0d9488"
              style={{ minWidth: '320px', height: '660px' }}
            />
            {/* Cover "powered by Calendly" branding in top-right corner */}
            <div className="absolute top-0 right-0 w-36 h-10 bg-white z-10 rounded-bl-lg" />
          </div>

          {/* Sidebar with alternatives + info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Quick contact */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
              <h3 className="font-heading font-bold text-lg mb-2">Prefer a Quick Chat?</h3>
              <p className="text-teal-100 text-sm mb-5">Message us on WhatsApp and we'll book for you — usually within minutes.</p>
              <div className="space-y-3">
                <Button
                  href={getWhatsAppUrl("Hi! I'd like to schedule a dental appointment.")}
                  variant="whatsapp"
                  className="!w-full !py-3.5 !rounded-xl !font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <Button
                  href={`tel:${CLINIC.phone}`}
                  variant="outline"
                  className="!w-full !py-3.5 !rounded-xl !font-bold !border-white/30 !text-white hover:!bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                  {CLINIC.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-cream rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-teal-600" />
                <h3 className="font-heading font-bold text-gray-900">Working Hours</h3>
              </div>
              <div className="space-y-2.5">
                {WORKING_HOURS.map((wh) => (
                  <div key={wh.day} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-medium">{wh.day}</span>
                    <span className="text-gray-900 font-bold">{wh.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200/60">
                <p className="font-arabic text-gray-400 text-sm text-center" dir="rtl">مفتوح ٧ أيام في الأسبوع</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-cream rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-teal-600" />
                <h3 className="font-heading font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600 text-sm mb-1">{CLINIC.address}</p>
              <p className="font-arabic text-gray-400 text-sm mb-4" dir="rtl">{CLINIC.addressAr}</p>

              {/* Mini map visual */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-36 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-1" />
                  <p className="text-xs text-teal-700 font-semibold">Jumeirah, Dubai</p>
                </div>
                {/* Decorative roads */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-teal-600" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-px bg-teal-600" />
                  <div className="absolute top-0 bottom-0 right-1/4 w-px bg-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
