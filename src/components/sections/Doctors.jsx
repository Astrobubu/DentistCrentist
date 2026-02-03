import { Globe, Award } from 'lucide-react'
import { DOCTORS } from '../../utils/constants'
import { BlobOne } from '../ui/Blobs'

export default function Doctors() {
  return (
    <section id="doctors" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <BlobOne className="absolute -top-32 -left-40 w-[400px] h-[400px] text-teal-50/60 animate-blob" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-4 tracking-wide">
            Meet the Team
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our <span className="text-teal-600">Specialist</span> Doctors
          </h2>
          <p className="text-gray-500 text-lg">
            A dedicated team of licensed specialists, each bringing years of focused expertise to give you the best care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div key={doc.name} className="group card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200/60">
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                {/* Experience badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-teal-600" />
                  <span className="text-xs font-bold text-gray-700">{doc.experience}</span>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading font-bold text-white text-lg leading-snug">{doc.name}</h3>
                  <p className="font-arabic text-white/70 text-sm" dir="rtl">{doc.nameAr}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <p className="text-teal-600 font-bold text-sm mb-1">{doc.role}</p>
                <p className="font-arabic text-gray-400 text-xs mb-3" dir="rtl">{doc.roleAr}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doc.specialties.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-teal-50 text-teal-700 text-[11px] font-semibold rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Globe className="w-3 h-3" />
                  <span>{doc.languages.join(' · ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
