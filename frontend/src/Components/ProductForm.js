import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/products", product);
      console.log("Product created:", response.data);
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProductForm;
