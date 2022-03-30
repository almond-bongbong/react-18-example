import React, { useState } from 'react';
import ProductList from '../components/product-list';

function TransitionPage() {
  const [filterTerm, setFilterTerm] = useState('');

  const updateFilterHandler = (event) => {
    setFilterTerm(event.target.value);
  };

  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${filterTerm}`);
  }

  return (
    <div>
      <input type="text" onChange={updateFilterHandler} />
      <ProductList products={products} />
    </div>
  );
}

export default TransitionPage;
