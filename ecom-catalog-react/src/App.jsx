import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './ProductList.jsx'
import CategoryFilter from './CategoryFilter.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        
        const allProducts = data.flatMap(category => 
          (category.products || []).map(product => ({
            ...product,
            categoryId: category.id
          }))
        );
        
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId === "" ? null : Number(categoryId));
  };

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = !selectedCategory || Number(product.categoryId) === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <>
      <div className='app-container'>
        {/* Header */}
        <header className='app-header'>
          <div className='header-content'>
            <div className='logo-section'>
              <h1 className='app-title'>Maddy's Store</h1>
              <p className='app-tagline'>Premium E-Commerce Solutions</p>
            </div>
          </div>
        </header>

        <main className='container'>
          {/* Filter Section */}
          <div className='filter-section'>
            <div className='filter-container'>
              <div className='filter-group'>
                <label className='filter-label'>Category</label>
                <CategoryFilter categories={categories} onSelect={handleCategorySelect} />
              </div>

              <div className='filter-group'>
                <label className='filter-label'>Search</label>
                <div className='search-wrapper'>
                  <input
                    type='text'
                    className='form-control search-input'
                    placeholder='Search products...'
                    onChange={handleSearchChange}
                    value={searchTerm}
                  />
                  <span className='search-icon'>🔍</span>
                </div>
              </div>

              <div className='filter-group'>
                <label className='filter-label'>Sort By</label>
                <select className='form-control sort-select' onChange={handleSortChange} value={sortOrder}>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {selectedCategory && (
              <button className='clear-filters-btn' onClick={() => handleCategorySelect("")}>
                ✕ Clear Filters
              </button>
            )}
          </div>

          {/* Products Section */}
          <section className='products-section'>
            {loading ? (
              <div className='loading-container'>
                <div className='spinner'></div>
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <>
                <div className='products-header'>
                  <h2>Products <span className='product-count'>({filteredProducts.length})</span></h2>
                </div>
                <ProductList products={filteredProducts} />
              </>
            ) : (
              <div className='empty-state'>
                <div className='empty-icon'>📦</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className='app-footer'>
          <p>&copy; 2025 Maddy's Store. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;