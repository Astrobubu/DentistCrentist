import { Shield, Zap, Globe, CreditCard, Microscope, HeartHandshake } from 'lucide-react'
import { BlobThree } from '../ui/Blobs'

const features = [
  {
    icon: Microscope,
    title: 'Modern Technology',
    titleAr: 'تقنيات حديثة',
    desc: 'Digital X-rays, 3D scanning, and laser dentistry for precise, comfortable treatments.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Sterilization Standards',
    titleAr: 'معايير التعقيم',
    desc: 'Exceeding DHA sterilization protocols. Autoclave-tested equipment for every patient.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Bilingual Team',
    titleAr: 'فريق ثنائي اللغة',
    desc: 'Fluent in English, Arabic, Hindi & Urdu. Everyone feels at home here.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Zap,
    title: 'Same-Day Emergency',
    titleAr: 'طوارئ بنفس اليوم',
    desc: 'Toothache at 7pm? We\'ll see you. Emergency slots available every day.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: CreditCard,
    title: 'Tabby & Insurance Accepted',
    titleAr: 'تابي والتأمين مقبول',
    desc: 'Split your payment into 4 interest-free installments with Tabby. We also accept major insurance providers.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: HeartHandshake,
    title: 'Gentle & Honest Care',
    titleAr: 'رعاية لطيفة وصادقة',
    desc: 'No upselling. No unnecessary procedures. Just what your teeth actually need.',
    color: 'from-rose-500 to-rose-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <BlobThree className="absolute -top-40 -right-40 w-[500px] h-[500px] text-teal-50 animate-blob" />
      <BlobThree className="absolute -bottom-32 -left-32 w-[400px] h-[400px] text-cream animate-blob-reverse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-4 tracking-wide">
            Why Patients Choose Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4">
            A Clinic Built Around <span className="text-teal-600">Your Comfort</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We believe great dentistry means more than just fixing teeth — it's about how the experience feels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group card-hover bg-white rounded-2xl p-7 border border-gray-100 hover:border-teal-200/60">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-lg shadow-gray-200/50 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{f.title}</h3>
              <p className="font-arabic text-gray-400 text-sm mb-3" dir="rtl">{f.titleAr}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
