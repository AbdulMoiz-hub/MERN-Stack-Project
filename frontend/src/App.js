import React, { useState } from 'react';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div>
      <button onClick={toggleForm}>
        {showForm ? 'Hide Product Form' : 'Show Product Form'}
      </button>

      {showForm && <ProductForm />}

      <ProductList />
    </div>
  );
}
export default App;
