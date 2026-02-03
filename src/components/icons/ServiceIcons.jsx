// Colorful, detailed dental icons with filled shapes for visual richness

export function RootCanalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth body */}
      <path d="M40 10c-8 0-14 4-17 7s-5 8-5 12c0 6 3 10 3 15s-1 12-2 18c-1.5 9 3 13 7 13s6.5-4 7.5-11c.5-3 2-6 5-6s4.5 3 5 6c1 7 3.5 11 7.5 11s8.5-4 7-13c-1-6-2-13-2-18s3-9 3-15c0-4-2-9-5-12s-9-7-17-7z" fill="#fee2e2" stroke="#f43f5e" strokeWidth="2.5"/>
      {/* Root lines */}
      <path d="M40 35v18" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M35 38v12" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <path d="M45 38v12" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      {/* Sparkle */}
      <circle cx="33" cy="22" r="2" fill="#f43f5e" opacity="0.4"/>
    </svg>
  )
}

export function ExtractionIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth */}
      <path d="M40 16c-7 0-11 3-13 5.5S24 27 24 30c0 5 2 8 2 12s-1 9-1.5 14c-1 7 2.5 10 5.5 10s5-3 5.5-8c.4-2.5 1.5-5 4-5s3.6 2.5 4 5c.5 5 2.5 8 5.5 8s6.5-3 5.5-10c-.5-5-1.5-10-1.5-14s2-7 2-12c0-3-1-5.5-3-8s-6-5.5-13-5.5z" fill="#ffedd5" stroke="#f97316" strokeWidth="2.5"/>
      {/* Arrow up */}
      <path d="M40 8v20" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M34 14l6-6 6 6" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function FillingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth */}
      <path d="M40 10c-8 0-14 4-17 7s-5 8-5 12c0 6 3 10 3 15s-1 12-2 18c-1.5 9 3 13 7 13s6.5-4 7.5-11c.5-3 2-6 5-6s4.5 3 5 6c1 7 3.5 11 7.5 11s8.5-4 7-13c-1-6-2-13-2-18s3-9 3-15c0-4-2-9-5-12s-9-7-17-7z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2.5"/>
      {/* Filling area */}
      <rect x="31" y="22" width="18" height="14" rx="4" fill="#0ea5e9" opacity="0.3" stroke="#0ea5e9" strokeWidth="2"/>
      {/* Tool */}
      <path d="M52 18l8-8" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="62" cy="8" r="3" fill="#0ea5e9" opacity="0.5"/>
    </svg>
  )
}

export function CheckupIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mirror handle */}
      <rect x="37" y="42" width="6" height="28" rx="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/>
      {/* Mirror head */}
      <circle cx="40" cy="28" r="16" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/>
      <circle cx="40" cy="28" r="10" fill="#0d9488" opacity="0.15"/>
      {/* Shine */}
      <path d="M34 22a8 8 0 0 1 8-6" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      {/* Checkmark */}
      <path d="M35 28l3.5 3.5L44 25" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function WhiteningIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth */}
      <path d="M38 14c-7 0-11 3-13 5.5S22 25 22 28c0 5 2 8 2 12s-1 9-1.5 14c-1 7 2.5 10 5.5 10s5-3 5.5-8c.4-2.5 1.5-5 4-5s3.6 2.5 4 5c.5 5 2.5 8 5.5 8s6.5-3 5.5-10c-.5-5-1.5-10-1.5-14s2-7 2-12c0-3-1-5.5-3-8s-6-5.5-13-5.5z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5"/>
      {/* Sparkle rays */}
      <path d="M58 12l-4 4" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 20h-6" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M58 28l-4-4" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Star */}
      <circle cx="58" cy="20" r="2" fill="#f59e0b"/>
    </svg>
  )
}

export function VeneersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back tooth */}
      <path d="M40 16c-7 0-11 3-13 5.5S24 27 24 30c0 5 2 8 2 12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2.5" opacity="0.5"/>
      <path d="M56 30c0-3-1-5.5-3-8s-6-5.5-13-5.5" stroke="#8b5cf6" strokeWidth="2.5" opacity="0.5"/>
      {/* Veneer layer */}
      <rect x="28" y="20" width="24" height="18" rx="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2.5"/>
      {/* Shine on veneer */}
      <path d="M33 25a3 3 0 0 1 4-2" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      {/* Sparkles */}
      <circle cx="55" cy="14" r="2" fill="#8b5cf6" opacity="0.5"/>
      <circle cx="60" cy="22" r="1.5" fill="#8b5cf6" opacity="0.3"/>
    </svg>
  )
}

export function CrownIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crown */}
      <path d="M18 35l8-18 14 10 14-10 8 18" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="18" y="35" width="44" height="10" rx="2" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="2.5"/>
      {/* Jewels */}
      <circle cx="31" cy="27" r="2.5" fill="#0ea5e9" opacity="0.5"/>
      <circle cx="40" cy="22" r="2.5" fill="#0ea5e9" opacity="0.5"/>
      <circle cx="49" cy="27" r="2.5" fill="#0ea5e9" opacity="0.5"/>
      {/* Tooth below */}
      <path d="M25 45c-1 3-2 7-2 10 0 5 3 7 5.5 7s5-2.5 5.5-7c.3-2 1-4 3-4s2.7 2 3 4c.5 4.5 3 7 5.5 7s6.5-2 5.5-7c-.5-3-1.5-7-2-10" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2.5"/>
    </svg>
  )
}

export function GumIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gum line */}
      <path d="M10 32c4-8 12-12 30-12s26 4 30 12" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.5"/>
      {/* Teeth */}
      <path d="M28 20v18c0 3 2 5 5 5s5-2 5-5V20" fill="white" stroke="#ec4899" strokeWidth="2"/>
      <path d="M42 20v18c0 3 2 5 5 5s5-2 5-5V20" fill="white" stroke="#ec4899" strokeWidth="2"/>
      {/* Healthy sparkle */}
      <circle cx="56" cy="24" r="2" fill="#ec4899" opacity="0.4"/>
      <path d="M18 40c2 3 3 6 3 10" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

export function KidsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Happy tooth face */}
      <path d="M40 8c-9 0-15 4-18 8s-5 9-5 14c0 6 3 11 3 16s-1 13-2 19c-1.5 10 3 14 7.5 14s7-4 8-12c.5-3.5 2-7 5.5-7s5 3.5 5.5 7c1 8 4 12 8 12s9-4 7.5-14c-1-6-2-14-2-19s3-10 3-16c0-5-2-10-5-14s-9-8-18-8z" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5"/>
      {/* Eyes */}
      <circle cx="33" cy="28" r="3" fill="#10b981"/>
      <circle cx="47" cy="28" r="3" fill="#10b981"/>
      {/* Smile */}
      <path d="M33 36c2 3 4.5 4.5 7 4.5s5-1.5 7-4.5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Rosy cheeks */}
      <circle cx="27" cy="34" r="3" fill="#10b981" opacity="0.15"/>
      <circle cx="53" cy="34" r="3" fill="#10b981" opacity="0.15"/>
    </svg>
  )
}

export function BracesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three teeth */}
      <rect x="8" y="18" width="18" height="24" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2.5"/>
      <rect x="31" y="14" width="18" height="28" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2.5"/>
      <rect x="54" y="18" width="18" height="24" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2.5"/>
      {/* Brackets */}
      <rect x="13" y="27" width="8" height="6" rx="1.5" fill="#6366f1" opacity="0.8"/>
      <rect x="36" y="25" width="8" height="6" rx="1.5" fill="#6366f1" opacity="0.8"/>
      <rect x="59" y="27" width="8" height="6" rx="1.5" fill="#6366f1" opacity="0.8"/>
      {/* Wire */}
      <line x1="21" y1="30" x2="36" y2="28" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="28" x2="59" y2="30" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      {/* Extension wires */}
      <line x1="4" y1="31" x2="13" y2="30" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="67" y1="30" x2="76" y2="31" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ImplantIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crown part */}
      <path d="M28 8h24c2 0 4 2 4 4v10c0 2-2 4-4 4H28c-2 0-4-2-4-4V12c0-2 2-4 4-4z" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5"/>
      {/* Abutment */}
      <path d="M34 26h12v6H34z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
      {/* Screw body */}
      <path d="M35 32l-3 10h16l-3-10z" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5"/>
      {/* Screw threads */}
      <line x1="33" y1="38" x2="47" y2="38" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="33.5" y1="42" x2="46.5" y2="42" stroke="#64748b" strokeWidth="1.5" opacity="0.7"/>
      {/* Screw tip */}
      <path d="M34 50l6 10 6-10" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Bone lines */}
      <path d="M22 38c-3 1-5 4-5 8s2 7 5 9" stroke="#64748b" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
      <path d="M58 38c3 1 5 4 5 8s-2 7-5 9" stroke="#64748b" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
    </svg>
  )
}

const ICON_MAP = {
  checkup: CheckupIcon,
  filling: FillingIcon,
  extraction: ExtractionIcon,
  rootcanal: RootCanalIcon,
  whitening: WhiteningIcon,
  veneers: VeneersIcon,
  crown: CrownIcon,
  braces: BracesIcon,
  kids: KidsIcon,
  implant: ImplantIcon,
  gum: GumIcon,
}

export default function ServiceIcon({ name, ...props }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon {...props} />
}
