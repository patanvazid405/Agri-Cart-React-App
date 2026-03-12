import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Layout() {
  const { itemCount } = useCart()

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <NavLink className="brand" to="/">
            <img className="brand-logo" src="/logo.svg" alt="AgriCart" />
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
            <NavLink className="cart-link" to="/cart">
              Cart
              <span>{itemCount}</span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-copy">
            <h3>AgriCart</h3>
            <p>Indian market vegetables, fruits, grains, rice, dairy, and daily essentials in a cleaner online shopping flow.</p>
            <p>Kisan Nagar, Nellore, Andhra Pradesh 524002</p>
          </div>
          <div>
            <h4>Delivery</h4>
            <p>Fast doorstep delivery with fresh-stock replenishment every day.</p>
            <h4>Support</h4>
            <p>Call us : +91 9876543210</p>
            <p>Email : agricart@gmail.com</p>
          </div>
          <div className="footer-map">
            <h4>Find Us</h4>
            <a
              className="map-link-card"
              href="https://www.google.com/maps/place/Kisan+Nagar,+Nellore,+Andhra+Pradesh+524002"
              target="_blank"
              rel="noreferrer"
            >
              <span className="map-favicon">
                <img src="/logo.svg" alt="" />
              </span>
              <span>
                <strong>Open Location in Maps</strong>
                <small>Kisan Nagar, Nellore, Andhra Pradesh 524002</small>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
