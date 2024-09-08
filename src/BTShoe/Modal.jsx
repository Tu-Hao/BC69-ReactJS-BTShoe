import React from 'react';

export const Modal = ({ content, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">{content.name}</h2>
        <img src={content.image} alt={content.name} className="w-full h-40 object-cover mb-4" />
        <p>{content.description}</p>
        <p className="mt-4 text-gray-600">Price: {content.price} $</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
