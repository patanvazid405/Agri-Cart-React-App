import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/products/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
        <span className="image-hover-label">{product.name}</span>
      </Link>

      <div className="product-content">
        <div className="product-topline">
          <p className="product-category">{product.category}</p>
          <span className="rating-chip">{product.rating} / 5</span>
        </div>
        <Link className="product-title" to={`/products/${product.id}`}>
          {product.name}
        </Link>
        <p className="product-description">{product.shortDescription}</p>

        <div className="product-footer">
          <div>
            <strong>Rs. {product.price}</strong>
            <span>/ {product.unit}</span>
          </div>
          <button className="btn btn-primary" onClick={() => addToCart(product.id)} type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
