import { Quote } from 'lucide-react'
import { REVIEWS } from '../../utils/constants'
import { BlobTwo, BlobThree } from '../ui/Blobs'

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 bg-cream overflow-hidden">
      {/* Blobs */}
      <BlobTwo className="absolute top-10 -right-40 w-[450px] h-[450px] text-teal-100/30 animate-blob" />
      <BlobThree className="absolute -bottom-40 -left-32 w-[400px] h-[400px] text-amber-50/60 animate-blob-reverse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-bold mb-4 tracking-wide">
            Patient Stories
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4">
            What Our Patients <span className="text-teal-600">Say</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Real experiences from real patients. We're proud of the trust our community places in us.
          </p>
        </div>

        {/* Reviews grid — first row 3, second row 2 centered */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {REVIEWS.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {REVIEWS.slice(3, 5).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* Google rating summary */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <StarRating count={5} />
            <span className="font-heading font-extrabold text-2xl text-gray-900">4.9</span>
          </div>
          <p className="text-gray-400 text-sm">Based on 200+ Google Reviews</p>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="card-hover bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200/50 flex flex-col">
      <Quote className="w-8 h-8 text-teal-200 mb-4 shrink-0" />
      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-sm">{review.name}</p>
          {review.nameAr && <p className="font-arabic text-gray-400 text-xs" dir="rtl">{review.nameAr}</p>}
        </div>
        <div className="text-right">
          <StarRating count={review.rating} />
          <p className="text-[11px] text-gray-400 mt-1">{review.service} · {review.timeAgo}</p>
        </div>
      </div>
    </div>
  )
}
