import { Component } from 'react'

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App render error:', error, errorInfo)
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (
        <div className="app-error-shell">
          <div className="app-error-card">
            <p className="eyebrow">Render Error</p>
            <h1>Something is blocking the page from loading.</h1>
            <p>{error.message || 'An unexpected error occurred while rendering the app.'}</p>
            <p className="app-error-help">Open the browser console for the full stack trace while we fix the source issue.</p>
          </div>
        </div>
      )
    }

    return children
  }
}

export default AppErrorBoundary
