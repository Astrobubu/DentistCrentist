import { SERVICE_CATEGORIES } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'
import { BlobOne, BlobTwo } from '../ui/Blobs'

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-cream overflow-hidden">
      {/* Background blobs */}
      <BlobOne className="absolute top-20 -right-48 w-[500px] h-[500px] text-teal-100/40 animate-blob" />
      <BlobTwo className="absolute bottom-20 -left-48 w-[450px] h-[450px] text-teal-100/30 animate-blob-reverse" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-bold mb-4 tracking-wide">
            What We Offer
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-500 text-lg">
            From emergencies to smile makeovers — every treatment comes with transparent time estimates so you can plan your day.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id}>
              {/* Category heading */}
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <h3 className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-heading font-bold text-base shadow-lg shadow-teal-600/20">
                  <span className="text-xl">{category.emoji}</span>
                  {category.title}
                  {category.subtitle && (
                    <span className="text-teal-200 font-medium text-sm">({category.subtitle})</span>
                  )}
                </h3>
                <span className="font-arabic text-gray-400 text-sm font-medium" dir="rtl">
                  {category.titleAr}
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
