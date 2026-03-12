import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Layout() {
  const { itemCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <NavLink className="brand" to="/">
            <img className="brand-logo" src="/logo.svg" alt="AgriCart" />
          </NavLink>

          <button
            className={isMenuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={isMenuOpen ? 'nav-links is-open' : 'nav-links'}>
            <NavLink onClick={closeMenu} to="/">
              Home
            </NavLink>
            <NavLink onClick={closeMenu} to="/products">
              Shop
            </NavLink>
            <NavLink onClick={closeMenu} to="/checkout">
              Checkout
            </NavLink>
            <NavLink className="cart-link" onClick={closeMenu} to="/cart">
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
            <p>Call us : +91 0025896301</p>
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
