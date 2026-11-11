import { motion } from 'framer-motion'
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return <motion.button whileTap={{ scale: 0.97 }} className={`rounded-full px-6 py-3 text-sm font-semibold transition ${variant === 'primary' ? 'bg-indigo text-white shadow-[0_0_24px_rgba(108,99,255,.25)] hover:bg-lavender hover:text-ink' : 'border border-white/15 bg-white/[.04] text-white hover:border-lavender hover:bg-white/[.08]'} ${className}`} {...props}>{children}</motion.button>
}
