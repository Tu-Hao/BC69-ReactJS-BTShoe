import React from 'react';

export const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
      <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-600">{item.price} $</p>
      <button
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setStateModal(item)}
      >
        Detail
      </button>
    </div>
  );
};

