import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
export default function Navbar({ onOpenCategories }) {
  const { count, setIsOpen } = useCart()
  return <header className="fixed top-0 z-30 w-full border-b border-white/[.07] bg-ink/80 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    <div className="flex items-center gap-4"><button onClick={onOpenCategories} aria-label="Open categories" className="text-white/70 transition hover:text-white"><Menu size={21} /></button><Link to="/home" className="font-display text-2xl font-bold tracking-[.3em] sm:text-3xl">ECLYPSE</Link></div>
    <div className="hidden max-w-md flex-1 items-center px-10 md:flex"><div className="group flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5 transition duration-300 focus-within:border-lavender focus-within:shadow-[0_0_22px_rgba(168,156,255,.28)]"><Search size={16} className="text-white/40 transition-colors duration-300 group-focus-within:text-lavender" /><input className="w-full bg-transparent text-sm outline-none placeholder:text-white/35" placeholder="Search the extraordinary..." /></div></div>
    <div className="flex items-center gap-4"><button onClick={() => setIsOpen(true)} className="relative text-white/70 hover:text-white"><ShoppingBag size={20} />{count > 0 && <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo px-1 text-[9px]">{count}</span>}</button><Link to="/login" className="hidden h-8 w-8 items-center justify-center rounded-full bg-lavender text-xs font-bold text-ink sm:flex">E</Link></div>
  </div></header>
}
