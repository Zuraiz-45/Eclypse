import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('eclypse-cart') || '[]'))
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => localStorage.setItem('eclypse-cart', JSON.stringify(items)), [items])
  const addToCart = (product, quantity = 1) => setItems(prev => {
    const found = prev.find(item => item.id === product.id)
    return found ? prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...prev, { ...product, quantity }]
  })
  const updateQuantity = (id, quantity) => setItems(prev => quantity < 1 ? prev.filter(item => item.id !== id) : prev.map(item => item.id === id ? { ...item, quantity } : item))
  const removeFromCart = id => setItems(prev => prev.filter(item => item.id !== id))
  const value = useMemo(() => ({ items, isOpen, setIsOpen, addToCart, updateQuantity, removeFromCart, count: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.price * item.quantity, 0) }), [items, isOpen])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)
