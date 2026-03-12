import { Link } from 'react-router-dom'
import QuantityControl from '../components/QuantityControl'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cartProducts, removeFromCart, subtotal, updateQuantity } = useCart()

  if (cartProducts.length === 0) {
    return (
      <section className="container section">
        <div className="empty-state">
          <h1>Your cart is empty.</h1>
          <p>Add vegetables, fruits, rice, grains, and other farm products to continue.</p>
          <Link className="btn btn-primary" to="/products">
            Browse Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="container section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Cart</span>
          <h1>Review your selected products</h1>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {cartProducts.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p className="product-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p>
                  Rs. {item.price} / {item.unit}
                </p>
              </div>
              <QuantityControl
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                quantity={item.quantity}
              />
              <div className="cart-item-summary">
                <strong>Rs. {item.lineTotal}</strong>
                <button className="text-button" onClick={() => removeFromCart(item.id)} type="button">
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>Rs. {subtotal}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <strong>Free</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>Rs. {subtotal}</strong>
          </div>
          <Link className="btn btn-primary full-width" to="/checkout">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default CartPage
