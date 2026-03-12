import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CheckoutPage() {
  const { cartProducts, clearCart, subtotal } = useCart()
  const [isPlaced, setIsPlaced] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsPlaced(true)
    clearCart()
  }

  if (isPlaced) {
    return (
      <section className="container section">
        <div className="empty-state success-state">
          <h1>Order placed successfully.</h1>
          <p>Your farm products have been confirmed for delivery.</p>
          <Link className="btn btn-primary" to="/products">
            Continue Shopping
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="container section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Checkout</span>
          <h1>Complete your order</h1>
          <p className="section-copy">Review the cart total and enter delivery details before placing the order.</p>
        </div>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input placeholder="Enter your name" required type="text" />
          </label>
          <label>
            Phone Number
            <input placeholder="Enter your phone number" required type="tel" />
          </label>
          <label>
            Delivery Address
            <textarea placeholder="House no, street, village or city, landmark" required rows="4" />
          </label>
          <label>
            Payment Method
            <select defaultValue="cash-on-delivery">
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Card</option>
            </select>
          </label>
          <button className="btn btn-primary" disabled={cartProducts.length === 0} type="submit">
            Place Order
          </button>
        </form>

        <aside className="cart-summary">
          <h2>Checkout summary</h2>
          {cartProducts.length === 0 ? (
            <p className="section-copy">Your cart is empty. Add products before checkout.</p>
          ) : (
            <>
              <div className="checkout-items">
                {cartProducts.map((item) => (
                  <div className="summary-row" key={item.id}>
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <strong>Rs. {item.lineTotal}</strong>
                  </div>
                ))}
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <strong>Rs. {subtotal}</strong>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}

export default CheckoutPage
