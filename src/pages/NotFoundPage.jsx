import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="container section">
      <div className="empty-state">
        <h1>Page not found.</h1>
        <p>The page you requested does not exist.</p>
        <Link className="btn btn-primary" to="/">
          Go Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
