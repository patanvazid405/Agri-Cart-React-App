import { Link, Navigate, useParams } from 'react-router-dom'
import QuantityControl from '../components/QuantityControl'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

function ProductDetailsPage() {
  const { productId } = useParams()
  const product = products.find((entry) => entry.id === productId)
  const { addToCart, cartProducts, updateQuantity } = useCart()

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const cartItem = cartProducts.find((item) => item.id === product.id)

  return (
    <section className="container section">
      <div className="details-grid">
        <div className="details-image-card">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-copy">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="details-price">
            Rs. {product.price} <span>per {product.unit}</span>
          </p>
          <p>{product.description}</p>

          <div className="detail-highlights">
            <div>
              <strong>{product.rating}</strong>
              <span>Customer rating</span>
            </div>
            <div>
              <strong>Fresh</strong>
              <span>Direct farm supply</span>
            </div>
            <div>
              <strong>Daily</strong>
              <span>Restocked inventory</span>
            </div>
          </div>

          <div className="details-actions">
            <button className="btn btn-primary" onClick={() => addToCart(product.id)} type="button">
              Add to Cart
            </button>
            <Link className="btn btn-secondary" to="/cart">
              View Cart
            </Link>
          </div>

          {cartItem ? (
            <div className="details-cart-panel">
              <p>This item is already in your cart.</p>
              <QuantityControl
                onDecrease={() => updateQuantity(product.id, cartItem.quantity - 1)}
                onIncrease={() => updateQuantity(product.id, cartItem.quantity + 1)}
                quantity={cartItem.quantity}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
