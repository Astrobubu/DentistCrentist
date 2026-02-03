import { Calendar, MessageCircle, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { CLINIC } from '../../utils/constants'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function CtaSection() {
  return (
    <section id="book" className="relative py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-teal-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Calendar className="w-4 h-4" />
          Easy Scheduling
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
          Ready to Book Your Visit?
        </h2>
        <p className="text-teal-100 text-lg mb-3 max-w-lg mx-auto">
          Schedule your appointment today — flexible timing, warm environment, bilingual team.
        </p>
        <p className="font-arabic text-teal-200/70 text-base mb-10" dir="rtl">
          احجز موعدك اليوم — أوقات مرنة وفريق ثنائي اللغة
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={CLINIC.calendlyUrl} className="!bg-white !text-teal-700 hover:!bg-gray-50 !shadow-lg w-full sm:w-auto !px-8 !py-3.5">
            <Calendar className="w-5 h-5" />
            Book on Calendly
          </Button>
          <Button
            href={getWhatsAppUrl("Hi! I'd like to schedule a dental appointment.")}
            variant="whatsapp"
            className="w-full sm:w-auto !px-8 !py-3.5"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </Button>
          <Button href={`tel:${CLINIC.phone}`} variant="outline" className="!border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto !px-8 !py-3.5">
            <Phone className="w-5 h-5" />
            {CLINIC.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  )
}
