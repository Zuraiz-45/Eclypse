import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { products } from '../data/products'

const categoryMatches = {
  Male: product => ['Sneakers', 'Watches', 'Electronics'].includes(product.category),
  Female: product => ['Bags', 'Watches', 'Sneakers'].includes(product.category),
  Accessories: product => ['Bags', 'Watches'].includes(product.category)
}

function ProductRow({ title, eyebrow, items }) {
  return <section className="mt-20">
    <div className="flex items-end justify-between">
      <div><p className="text-xs uppercase tracking-[.3em] text-lavender">{eyebrow}</p><h2 className="mt-2 font-display text-3xl">{title}</h2></div>
      <span className="hidden text-xs text-white/35 sm:block">Curated by ECLYPSE</span>
    </div>
    <motion.div layout className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{items.map(product => <ProductCard key={product.id} product={product} />)}</motion.div>
  </section>
}

export default function Home({ onOpenCategories }) {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'All'
  const filtered = active === 'All' ? products : categoryMatches[active] ? products.filter(categoryMatches[active]) : products.filter(product => product.category === active)
  const showEditorial = active === 'All'
  const newArrivals = products.filter(product => product.badge === 'New')
  const saleItems = products.filter(product => product.badge === 'Sale')

  return <><Navbar onOpenCategories={onOpenCategories} /><main className="mx-auto max-w-7xl px-5 pb-10 pt-28 lg:px-8">
    <div className="mb-8 text-center sm:mb-10"><p className="font-display text-5xl font-bold tracking-[.22em] text-white sm:text-7xl lg:text-8xl">ECLYPSE</p><p className="mt-3 text-[10px] uppercase tracking-[.45em] text-lavender sm:text-xs">Shop beyond the ordinary</p></div>
    <section className="relative min-h-[440px] overflow-hidden rounded-3xl bg-surface p-8 sm:p-14">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1A1A24_15%,transparent),url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=85')] bg-cover bg-center opacity-80" />
      <div className="relative max-w-lg"><p className="text-xs uppercase tracking-[.3em] text-lavender">Volume 01 / 2025</p><h1 className="mt-6 font-display text-5xl font-bold leading-none sm:text-7xl">New season<br /><span className="text-lavender">arrivals.</span></h1><p className="mt-6 max-w-sm text-sm leading-6 text-white/55">Considered pieces for a life less ordinary.</p><Button className="mt-8" onClick={() => setParams({ category: 'All' })}>Explore collection</Button></div>
    </section>

    {showEditorial ? <><ProductRow title="New arrivals" eyebrow="Just in" items={newArrivals} /><ProductRow title="The sale edit" eyebrow="Limited pieces" items={saleItems} /></> : <section className="mt-20"><div className="flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.3em] text-lavender">Category edit</p><h2 className="mt-2 font-display text-3xl">{active}</h2></div><button onClick={() => setParams({})} className="text-xs text-white/45 transition hover:text-white">View all</button></div><motion.div layout className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{filtered.map(product => <ProductCard key={product.id} product={product} />)}</motion.div></section>}
  </main><Footer /></>
}
