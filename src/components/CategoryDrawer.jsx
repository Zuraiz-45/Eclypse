import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const categoryOptions = [
  { label: 'Shop all', value: 'All', description: 'The complete ECLYPSE collection' },
  { label: 'Male', value: 'Male', description: 'Sharp essentials and everyday icons' },
  { label: 'Female', value: 'Female', description: 'Considered pieces with a softer edge' },
  { label: 'Accessories', value: 'Accessories', description: 'The details that define your orbit' },
  { label: 'Electronics', value: 'Electronics', description: 'Technology for a life in motion' },
  { label: 'Sneakers', value: 'Sneakers', description: 'Step beyond the ordinary' },
  { label: 'Watches', value: 'Watches', description: 'Time, reimagined' },
  { label: 'Bags', value: 'Bags', description: 'Carry your own perspective' }
]

export default function CategoryDrawer({ open, onClose }) {
  const navigate = useNavigate()
  const selectCategory = value => {
    navigate(value === 'All' ? '/home' : `/home?category=${value}`)
    onClose()
  }

  return <AnimatePresence>
    {open && <><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .28, ease: 'easeOut' }} onClick={onClose} className="fixed inset-0 z-40 bg-black/70" />
      <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: .36, ease: [0.22, 1, 0.36, 1] }} className="fixed left-0 top-0 z-50 flex h-full w-[min(88vw,390px)] transform-gpu flex-col border-r border-white/10 bg-night p-6 shadow-2xl will-change-transform sm:p-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-6"><div><p className="font-display text-lg tracking-[.25em]">ECLYPSE</p><p className="mt-1 text-[10px] uppercase tracking-[.25em] text-lavender">Explore categories</p></div><button onClick={onClose} aria-label="Close categories" className="text-white/60 hover:text-white"><X size={21} /></button></div>
        <nav className="no-scrollbar flex-1 overflow-auto py-6">{categoryOptions.map((category, index) => <button key={category.value} onClick={() => selectCategory(category.value)} className="group flex w-full items-center justify-between border-b border-white/[.07] py-4 text-left transition hover:border-indigo"><span><span className="block font-display text-xl">{category.label}</span><span className="mt-1 block text-xs text-white/40">{category.description}</span></span><ArrowRight size={17} className="text-white/25 transition group-hover:translate-x-1 group-hover:text-lavender" /><span className="sr-only">Browse {category.label}</span></button>)}</nav>
        <p className="border-t border-white/10 pt-5 text-xs leading-5 text-white/35">Find your next favorite object. Every category, one considered collection.</p>
      </motion.aside>
    </>}
  </AnimatePresence>
}
