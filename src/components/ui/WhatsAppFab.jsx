import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppUrl('Hi! I\'d like to book a dental appointment.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full flex items-center justify-center shadow-lg animate-pulse-whatsapp transition-colors duration-200"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
