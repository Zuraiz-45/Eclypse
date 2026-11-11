import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Splash from './pages/Splash'
import Welcome from './pages/Welcome'
import { Login, Signup } from './pages/Auth'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import CartDrawer from './components/CartDrawer'
import CategoryDrawer from './components/CategoryDrawer'
function Page({ children }) { return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>{children}</motion.div> }
export default function App() {
  const location = useLocation()
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  return <><AnimatePresence mode="wait"><Routes location={location} key={location.pathname + location.search}><Route path="/" element={<Splash />} /><Route path="/welcome" element={<Page><Welcome /></Page>} /><Route path="/login" element={<Page><Login /></Page>} /><Route path="/signup" element={<Page><Signup /></Page>} /><Route path="/home" element={<Page><Home onOpenCategories={() => setCategoriesOpen(true)} /></Page>} /><Route path="/product/:id" element={<Page><ProductDetail onOpenCategories={() => setCategoriesOpen(true)} /></Page>} /><Route path="/cart" element={<Page><Cart onOpenCategories={() => setCategoriesOpen(true)} /></Page>} /><Route path="*" element={<Page><NotFound /></Page>} /></Routes></AnimatePresence><CategoryDrawer open={categoriesOpen} onClose={() => setCategoriesOpen(false)} /><CartDrawer /></>
}
