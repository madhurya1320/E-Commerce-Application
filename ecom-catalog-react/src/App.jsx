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

  useEffect(() => {
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
      })
      .catch(err => console.error('Fetch error:', err));
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
      {/* Snowflakes */}
      {[...Array(9)].map((_, i) => (
        <div key={i} className="snowflake">❄</div>
      ))}
      
      {/* Christmas Tree */}
      <div className="christmas-tree">🎄</div>

      <div className='container'>
        <h1>Maddy's Store 🎄</h1>
        <p className="subtitle">Cozy deals, warm vibes, and festive finds.</p>
        
        <div className="row align-items-center mb-4">
          <div className='col-md-3 col-sm-12 mb-3'>
            <CategoryFilter categories={categories} onSelect={handleCategorySelect} />
          </div>
          <div className='col-md-5 col-sm-12 mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='🎁 Search magical gifts...'
              onChange={handleSearchChange}
              value={searchTerm}
            />
          </div>
          <div className='col-md-4 col-sm-12 mb-3'>
            <select className='form-control' onChange={handleSortChange} value={sortOrder}>
              <option value="asc">🎅 Price: Low to High</option>
              <option value="desc">🦌 Price: High to Low</option>
            </select>
          </div>
        </div>

        <div>
          {filteredProducts.length ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p>❄️ No products available - check back soon!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App