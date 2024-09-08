import React, { useState } from 'react';
import {ProductList} from './ProductList';
import {Modal} from './Modal';
import products from './data.json';

export const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null); // set State để hiển thị modal detail

  // open modal with product details
  const setStateModal = (product) => {
    setProductDetail(product);
  };

  // close modal
  const closeModal = () => {
    setProductDetail(null);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-2xl font-bold">Shoes Shop</h1>
      <ProductList productsData={products} setStateModal={setStateModal} />
      {productDetail && <Modal content={productDetail} closeModal={closeModal} />}
    </div>
  );
};
