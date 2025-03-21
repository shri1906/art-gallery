import React, { useState } from 'react';

const Gallery = () => {
  const products = [
    {
      id: 1,
      imageName: 'landscape_painting.jpg',
      imageUrl: 'slide1.jpg',
      description: 'A beautiful landscape oil painting.',
      price: 150.00,
      type: 'Painting',
    },
    {
      id: 2,
      imageName: 'modern_art.jpg',
      imageUrl: 'slide2.jpg',
      description: 'Abstract modern art piece.',
      price: 200.00,
      type: 'Painting',
    },
    {
      id: 3,
      imageName: 'camera.jpg',
      imageUrl: 'slide3.jpg',
      description: 'High-resolution digital camera.',
      price: 350.00,
      type: 'Image',
    },
    {
      id: 4,
      imageName: 'portrait.jpg',
      imageUrl: 'slide4.jpg',
      description: 'A stunning portrait painting.',
      price: 180.00,
      type: 'Painting',
    },
    {
      id: 5,
      imageName: 'city_image.jpg',
      imageUrl: 'product1.jpg',
      description: 'A vibrant city image.',
      price: 90.00,
      type: 'Image',
    },
    {
      id: 6,
      imageName: 'city_image.jpg',
      imageUrl: 'product2.jpg',
      description: 'A vibrant city image.',
      price: 90.00,
      type: 'Image',
    },
    {
      id: 7,
      imageName: 'city_image.jpg',
      imageUrl: 'product3.jpg',
      description: 'A vibrant city image.',
      price: 90.00,
      type: 'Image',
    },
    {
      id: 8,
      imageName: 'city_image.jpg',
      imageUrl: 'product4.jpg',
      description: 'A vibrant city image.',
      price: 90.00,
      type: 'Image',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mt-22 mx-auto p-4">
      <h2 className="text-5xl text-center font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded p-4 shadow-md">
            <img
              src={product.imageUrl}
              alt={product.description}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-1">{product.description}</h2>
            <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Image: {product.imageName}</p>
            <p className="text-sm text-gray-500">Type: {product.type}</p>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => openModal(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-teal-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative m-2">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.description}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedProduct.description}</h2>
            <p className="text-gray-600">Price: ${selectedProduct.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Image: {selectedProduct.imageName}</p>
            <p className="text-sm text-gray-500">Type: {selectedProduct.type}</p>
            <button
              className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;