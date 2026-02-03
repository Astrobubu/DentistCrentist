import { Award, Users, Star, Stethoscope } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience', color: 'from-teal-500 to-teal-600', shadow: 'shadow-teal-500/25' },
  { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/25' },
  { icon: Star, value: '4.9', label: 'Google Rating', color: 'from-amber-500 to-amber-600', shadow: 'shadow-amber-500/25' },
  { icon: Stethoscope, value: '4', label: 'Specialist Doctors', color: 'from-violet-500 to-violet-600', shadow: 'shadow-violet-500/25' },
]

export default function StatsBar() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/[0.06] border border-gray-100/80 p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} ${stat.shadow} shadow-lg flex items-center justify-center shrink-0`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-heading font-extrabold text-2xl text-gray-900 leading-none">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-0.5 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
