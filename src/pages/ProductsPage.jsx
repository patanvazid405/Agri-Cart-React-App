import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const selectedCategory = searchParams.get('category') || 'All'

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const searchTerm = query.trim().toLowerCase()
      const matchesQuery =
        searchTerm.length === 0 ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)

      return matchesCategory && matchesQuery
    })
  }, [query, selectedCategory])

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSearchParams({})
      return
    }

    setSearchParams({ category })
  }

  return (
    <section className="container section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Product Listing</span>
          <h1>Browse agricultural products</h1>
          <p className="section-copy">Filter by category, inspect details, and add groceries or farm supplies straight to your cart.</p>
        </div>
        <div className="results-card">
          <strong>{filteredProducts.length}</strong>
          <span>Products available</span>
        </div>
      </div>

      <div className="catalog-toolbar">
        <div className="filter-pills">
          {categories.map((category) => (
            <button
              className={category === selectedCategory ? 'pill active' : 'pill'}
              key={category}
              onClick={() => handleCategoryChange(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <label className="search-box">
          <span>Search products</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tomatoes, rice, eggs..."
            type="search"
            value={query}
          />
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products matched your filters.</h3>
          <p>Try another category or broaden the search term.</p>
        </div>
      )}
    </section>
  )
}

export default ProductsPage
