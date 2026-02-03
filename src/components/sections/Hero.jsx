import { ChevronDown, MessageCircle, Shield, Clock, Globe, CreditCard } from 'lucide-react'
import Button from '../ui/Button'
import { BlobOne, BlobTwo, BlobThree } from '../ui/Blobs'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-600 to-teal-800" />

      {/* ---- VISIBLE organic rounded shapes ---- */}
      <BlobOne className="absolute -top-28 -left-28 w-[480px] h-[480px] text-teal-500/25 animate-blob" />
      <BlobTwo className="absolute top-10 -right-20 w-[550px] h-[550px] text-teal-500/15 animate-blob-reverse" />
      <BlobThree className="absolute -bottom-20 left-[15%] w-[350px] h-[350px] text-teal-400/12 animate-blob" />
      <BlobOne className="absolute top-[20%] left-[40%] w-[200px] h-[200px] text-white/[0.06] animate-blob-reverse" />
      <BlobTwo className="absolute bottom-[10%] right-[30%] w-[250px] h-[250px] text-teal-300/10 animate-blob" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* pt-28 accounts for the transparent fixed header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 pb-24 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32">
          {/* Text */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-teal-100 text-sm font-semibold px-4 py-2 rounded-full mb-7 border border-white/10">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Accepting New Patients
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] mb-6 tracking-tight">
              Dental Care that<br />
              Respects{' '}
              <span className="relative">
                <span className="text-teal-200">Your Time</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c40-6 80-6 120-3s56 3 76-1" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>
            </h1>

            <p className="text-teal-50/90 text-lg leading-relaxed max-w-xl mb-3">
              Expert dental solutions for emergency, cosmetic, and family needs — delivered on your schedule by specialists who genuinely care.
            </p>
            <p className="font-arabic text-teal-200/60 text-base mb-8" dir="rtl">
              رعاية أسنان متخصصة تحترم وقتك — حلول طوارئ وتجميل وعائلة
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {/* Book Appointment scrolls DOWN to embedded Calendly */}
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[15px] bg-white text-teal-700 hover:bg-gray-50 shadow-xl shadow-black/10 transition-all duration-200 cursor-pointer"
              >
                Book Appointment
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </a>
              <Button href={getWhatsAppUrl("Hi! I'd like to learn more about your dental services.")} variant="whatsapp" className="!px-8 !py-4 !text-[15px] !font-bold !rounded-2xl">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-teal-200/80 text-sm mb-8">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-300" /> DHA Licensed</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-300" /> Open 7 Days</span>
              <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-teal-300" /> Bilingual Team</span>
            </div>

            {/* ---- Payment methods in hero ---- */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-teal-300/60 font-semibold uppercase tracking-wider mr-1">We accept</span>
              {/* Tabby */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <svg viewBox="0 0 60 18" className="h-4" fill="none">
                  <rect width="60" height="18" rx="3" fill="#3BFFC0" opacity="0.2"/>
                  <text x="30" y="13" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10" fill="#3BFFC0">tabby</text>
                </svg>
              </div>
              {/* Visa */}
              <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <svg viewBox="0 0 40 14" className="h-3.5">
                  <text x="20" y="12" textAnchor="middle" fontFamily="var(--font-body)" fontWeight="700" fontSize="11" fill="white" opacity="0.8">VISA</text>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <svg viewBox="0 0 42 14" className="h-3.5">
                  <circle cx="15" cy="7" r="6" fill="#eb001b" opacity="0.7"/>
                  <circle cx="27" cy="7" r="6" fill="#f79e1b" opacity="0.7"/>
                </svg>
              </div>
              {/* Insurance */}
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <CreditCard className="w-3 h-3 text-teal-200/70" />
                <span className="text-[11px] text-white/70 font-medium">Insurance</span>
              </div>
            </div>
          </div>

          {/* Photo side */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Visible organic shape behind photo */}
              <BlobTwo className="absolute -inset-12 text-teal-400/15" />

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=540&h=660&fit=crop&crop=faces&q=85"
                  alt="Professional dentist in modern clinic"
                  className="relative w-full max-w-[440px] rounded-[2rem] shadow-2xl shadow-black/20 object-cover aspect-[5/6] ml-auto"
                />
                {/* Floating experience card */}
                <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl shadow-black/8 px-6 py-4 flex items-center gap-4 animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-md shadow-teal-500/30">
                    15+
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">Years of Excellence</p>
                    <p className="text-gray-400 text-xs">Trusted by 10,000+ patients</p>
                  </div>
                </div>

                {/* Floating rating card */}
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl shadow-black/8 px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-900 font-bold text-xs">4.9 Rating</p>
                  <p className="text-gray-400 text-[10px]">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Wavy bottom edge ---- */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" fill="none">
          <path d="M0 60C200 100 400 20 600 50C800 80 1000 10 1200 40C1350 60 1420 30 1440 40V100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
