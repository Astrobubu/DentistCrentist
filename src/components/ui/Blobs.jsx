// Organic blob shapes for section backgrounds
export function BlobOne({ className = '' }) {
  return (
    <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M420.5 301.5Q397 403 295.5 437Q194 471 117.5 385.5Q41 300 118 215Q195 130 297.5 130Q400 130 420.5 215Z" fill="currentColor" />
    </svg>
  )
}

export function BlobTwo({ className = '' }) {
  return (
    <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M448 339Q423 478 291 478Q159 478 107 389Q55 300 107.5 211.5Q160 123 292 123Q424 123 448 211.5Z" fill="currentColor" />
    </svg>
  )
}

export function BlobThree({ className = '' }) {
  return (
    <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M455.5 326.5Q453 453 326.5 453.5Q200 454 126 377Q52 300 126.5 223.5Q201 147 326 146Q451 145 454 222.5Z" fill="currentColor" />
    </svg>
  )
}

export function BlobSmall({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M140 100Q140 150 100 150Q60 150 60 100Q60 50 100 50Q140 50 140 100Z" fill="currentColor" />
    </svg>
  )
}

// Wavy section divider
export function WaveDivider({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`w-full block ${flip ? 'rotate-180' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z"
        fill="currentColor"
      />
    </svg>
  )
}
