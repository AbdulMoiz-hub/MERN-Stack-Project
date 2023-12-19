import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
