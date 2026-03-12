import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'

const CART_STORAGE_KEY = 'agricart-cart'
const CartContext = createContext(null)

function readStoredCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (productId) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId)
      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { productId, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, nextQuantity) => {
    setCartItems((currentItems) => {
      if (nextQuantity <= 0) {
        return currentItems.filter((item) => item.productId !== productId)
      }

      return currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity: nextQuantity } : item,
      )
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.productId !== productId))
  }

  const clearCart = () => setCartItems([])

  const cartProducts = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId)
          return product
            ? { ...product, quantity: item.quantity, lineTotal: item.quantity * product.price }
            : null
        })
        .filter(Boolean),
    [cartItems],
  )

  const subtotal = cartProducts.reduce((sum, item) => sum + item.lineTotal, 0)
  const itemCount = cartProducts.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    addToCart,
    cartProducts,
    clearCart,
    itemCount,
    removeFromCart,
    subtotal,
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
