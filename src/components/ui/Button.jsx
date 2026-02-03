const variants = {
  primary:
    'bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/25 hover:shadow-teal-700/30',
  whatsapp:
    'bg-whatsapp hover:bg-whatsapp-dark text-white shadow-lg shadow-whatsapp/25',
  outline:
    'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
