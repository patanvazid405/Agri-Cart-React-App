import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, featuredProducts, products } from '../data/products'

function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container sale-banner">
          <div className="sale-copy">
            <span className="sale-kicker">Garden &amp; Agriculture</span>
            <h1>
              Mega
              <br />
              Sale
            </h1>
            <p className="sale-offer">Up to 50% off</p>
            <p className="sale-description">
              Fresh fruits, vegetables, grains, rice, and dairy products at better prices for daily household shopping.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products">
                Shop Now
              </Link>
              <Link className="btn btn-secondary" to="/checkout">
                Checkout
              </Link>
            </div>
          </div>

          <div className="sale-visual">
            <div className="sale-photo-ring">
              <img src="/images/products/hero-farm.jpg" alt="Green agricultural field" />
            </div>
            <div className="sale-bottom-grid">
              <div className="sale-stat-card">
                <strong>100%</strong>
                <span>Fresh stock updates</span>
              </div>
              <div className="sale-stat-card">
                <strong>{products.length}</strong>
                <span>Products in store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Categories</span>
            <h2>Shop by farm product type</h2>
          </div>
          <Link className="text-link" to="/products">
            View all products
          </Link>
        </div>

        <div className="category-grid">
          {categories
            .filter((category) => category !== 'All')
            .map((category) => (
              <Link className="category-card" key={category} to={`/products?category=${encodeURIComponent(category)}`}>
                <h3>{category}</h3>
              </Link>
            ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Popular products this week</h2>
          </div>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
