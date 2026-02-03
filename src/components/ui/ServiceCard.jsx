import { Clock, MessageCircle } from 'lucide-react'
import ServiceIcon from '../icons/ServiceIcons'
import { getServiceWhatsAppUrl } from '../../utils/whatsapp'

const colorMap = {
  rose: { iconBg: 'bg-rose-50', border: 'border-rose-100', hover: 'hover:border-rose-300', timeBg: 'bg-rose-50', timeText: 'text-rose-700', timeBorder: 'border-rose-200', accent: 'bg-rose-500' },
  orange: { iconBg: 'bg-orange-50', border: 'border-orange-100', hover: 'hover:border-orange-300', timeBg: 'bg-orange-50', timeText: 'text-orange-700', timeBorder: 'border-orange-200', accent: 'bg-orange-500' },
  sky: { iconBg: 'bg-sky-50', border: 'border-sky-100', hover: 'hover:border-sky-300', timeBg: 'bg-sky-50', timeText: 'text-sky-700', timeBorder: 'border-sky-200', accent: 'bg-sky-500' },
  teal: { iconBg: 'bg-teal-50', border: 'border-teal-100', hover: 'hover:border-teal-300', timeBg: 'bg-teal-50', timeText: 'text-teal-700', timeBorder: 'border-teal-200', accent: 'bg-teal-500' },
  amber: { iconBg: 'bg-amber-50', border: 'border-amber-100', hover: 'hover:border-amber-300', timeBg: 'bg-amber-50', timeText: 'text-amber-700', timeBorder: 'border-amber-200', accent: 'bg-amber-500' },
  violet: { iconBg: 'bg-violet-50', border: 'border-violet-100', hover: 'hover:border-violet-300', timeBg: 'bg-violet-50', timeText: 'text-violet-700', timeBorder: 'border-violet-200', accent: 'bg-violet-500' },
  pink: { iconBg: 'bg-pink-50', border: 'border-pink-100', hover: 'hover:border-pink-300', timeBg: 'bg-pink-50', timeText: 'text-pink-700', timeBorder: 'border-pink-200', accent: 'bg-pink-500' },
  emerald: { iconBg: 'bg-emerald-50', border: 'border-emerald-100', hover: 'hover:border-emerald-300', timeBg: 'bg-emerald-50', timeText: 'text-emerald-700', timeBorder: 'border-emerald-200', accent: 'bg-emerald-500' },
  indigo: { iconBg: 'bg-indigo-50', border: 'border-indigo-100', hover: 'hover:border-indigo-300', timeBg: 'bg-indigo-50', timeText: 'text-indigo-700', timeBorder: 'border-indigo-200', accent: 'bg-indigo-500' },
  slate: { iconBg: 'bg-slate-50', border: 'border-slate-100', hover: 'hover:border-slate-300', timeBg: 'bg-slate-50', timeText: 'text-slate-700', timeBorder: 'border-slate-200', accent: 'bg-slate-500' },
}

export default function ServiceCard({ service }) {
  const whatsAppUrl = getServiceWhatsAppUrl(service.name)
  const c = colorMap[service.color] || colorMap.teal

  return (
    <div className={`group card-hover bg-white rounded-2xl overflow-hidden border ${c.border} ${c.hover} flex flex-col relative`}>
      {/* Top accent line */}
      <div className={`h-1 ${c.accent} w-full opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Icon area */}
      <div className={`${c.iconBg} px-5 py-6 flex items-center justify-center relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <ServiceIcon name={service.icon} className="w-16 h-16 relative" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-gray-900 text-[15px] leading-snug mb-1">
          {service.name}
        </h3>
        <p className="font-arabic text-gray-400 text-[13px] mb-3 leading-relaxed" dir="rtl">
          {service.nameAr}
        </p>

        {/* Time estimate — prominent */}
        <div className={`flex items-center gap-2 ${c.timeBg} ${c.timeText} border ${c.timeBorder} rounded-xl px-3.5 py-2.5 mb-5`}>
          <Clock className="w-4 h-4 shrink-0" />
          <div>
            <p className="font-bold text-sm leading-none">{service.time}</p>
            <p className="text-[10px] opacity-70 mt-0.5">estimated chair time</p>
          </div>
        </div>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-whatsapp text-white hover:bg-whatsapp-dark transition-all duration-200 shadow-md shadow-whatsapp/15 hover:shadow-lg hover:shadow-whatsapp/25"
        >
          <MessageCircle className="w-4 h-4" />
          Book via WhatsApp
        </a>
      </div>
    </div>
  )
}
