import React from 'react';
import {ProductItem} from './ProductItem';

export const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {productsData.map((product) => (
        <ProductItem key={product.id} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  );
};


