import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Badge from './Badge'
import StarRating from './StarRating'
import { useCart } from '../context/CartContext'
export default function ProductCard({ product }) {
  const { addToCart, setIsOpen } = useCart()
  const add = e => { e.preventDefault(); addToCart(product); setIsOpen(true) }
  return <Link to={`/product/${product.id}`}><motion.article whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-2xl border border-white/[.07] bg-surface transition-colors hover:border-indigo/70 hover:shadow-[0_0_28px_rgba(108,99,255,.13)]"><div className="relative aspect-[4/5] overflow-hidden bg-white/[.03]"><img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />{product.badge && <div className="absolute left-3 top-3"><Badge>{product.badge === 'New' ? 'New Arrival' : product.badge}</Badge></div>}<button onClick={add} className="absolute bottom-3 left-3 right-3 translate-y-16 rounded-full bg-white py-2.5 text-xs font-bold text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">Quick add</button></div><div className="space-y-2 p-4"><div className="flex justify-between gap-3"><h3 className="text-sm font-medium">{product.name}</h3><span className="whitespace-nowrap text-sm font-semibold">${product.price}</span></div><div className="flex items-center justify-between"><StarRating rating={product.rating} reviews={false} />{product.originalPrice > product.price && <span className="text-xs text-white/35 line-through">${product.originalPrice}</span>}</div></div></motion.article></Link>
}
