import { CLINIC } from './constants'

export function getWhatsAppUrl(message = '') {
  const base = CLINIC.whatsappBase
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getServiceWhatsAppUrl(serviceName) {
  return getWhatsAppUrl(`Hi, I'd like to book an appointment for ${serviceName}. Could you help me schedule a visit?`)
}
