import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Music2, Youtube } from 'lucide-react'

const links = {
  Explore: ['New arrivals', 'Men', 'Women', 'Accessories', 'Electronics'],
  Help: ['Contact us', 'Shipping & returns', 'FAQs', 'Privacy policy', 'Terms']
}

export default function Footer() {
  return <footer className="mt-24 border-t border-white/10 bg-night px-5 pt-16 sm:pt-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-[.28em]">ECLYPSE</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">A considered universe of objects, ideas, and experiences for those who choose their own orbit.</p>
          <div className="mt-7 flex items-center gap-3">
            {[Instagram, Facebook, Linkedin, Youtube, Music2].map((Icon, index) => <a key={index} href="#social" aria-label="ECLYPSE social platform" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-lavender hover:text-lavender"><Icon size={16} /></a>)}
          </div>
        </div>
        {Object.entries(links).map(([title, items]) => <div key={title}><p className="text-xs uppercase tracking-[.25em] text-lavender">{title}</p><nav className="mt-5 space-y-3">{items.map(item => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="block text-sm text-white/45 transition hover:text-white">{item}</a>)}</nav></div>)}
        <div>
          <p className="text-xs uppercase tracking-[.25em] text-lavender">Stay in orbit</p>
          <p className="mt-5 text-sm leading-6 text-white/45">Sign up for early access, new drops, and stories from ECLYPSE.</p>
          <form onSubmit={event => event.preventDefault()} className="mt-5 flex border-b border-white/20 pb-3 focus-within:border-lavender"><Mail size={17} className="mr-3 text-white/35" /><input type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/30" /><button aria-label="Subscribe" className="text-lavender transition hover:text-white"><ArrowUpRight size={18} /></button></form>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 py-8">
        <p className="text-xs uppercase tracking-[.25em] text-lavender">The people behind the perspective</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {['Alishba Shahbaz', 'Rao Zuraiz'].map((founder, index) => <div key={founder} className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo/20 font-display text-sm text-lavender">{founder.charAt(0)}</div><p className="mt-4 font-display text-lg">{founder}</p><p className="mt-1 text-xs text-white/40">{['Creative direction & brand', 'Technology & growth'][index]}</p></div>)}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 text-xs text-white/30 sm:flex-row"><p>© 2025 ECLYPSE. Shop Beyond the Ordinary.</p><p>Designed with intention by Alishba Shahbaz & Rao Zuraiz.</p></div>
      </div>
    </div>
  </footer>
}
