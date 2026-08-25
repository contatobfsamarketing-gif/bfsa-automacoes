import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300'

  const variants = {
    primary: 'bg-gold-gradient text-dark font-bold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 active:scale-95',
    secondary: 'border border-gold text-gold hover:bg-gold/10 hover:scale-105 active:scale-95',
  }

  const content = (
    <span className="relative z-10">{children}</span>
  )

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  )
}
