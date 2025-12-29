const ProductList = ({ products }) => {
    return (
        <div className="products-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <div className="product-image-wrapper">
                        <img
                            src={product.imageUrl || 'https://via.placeholder.com/300x200?text=Product'}
                            className="product-image"
                            alt={product.name}
                        />
                        <span className="product-badge">Featured</span>
                    </div>
                    
                    <div className="product-content">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        
                        <div className="product-footer">
                            <span className="product-price">${product.price}</span>
                            <button className="product-action-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;