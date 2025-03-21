import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      imageName: 'landscape_painting.jpg',
      imageUrl: 'https://via.placeholder.com/200x150?text=Landscape+Painting',
      description: 'A beautiful landscape oil painting.',
      price: 150.00,
      type: 'Painting',
    },
    {
      id: 2,
      imageName: 'modern_art.jpg',
      imageUrl: 'https://via.placeholder.com/200x150?text=Modern+Art',
      description: 'Abstract modern art piece.',
      price: 200.00,
      type: 'Painting',
    },
    {
      id: 3,
      imageName: 'camera.jpg',
      imageUrl: 'https://via.placeholder.com/200x150?text=Camera',
      description: 'High-resolution digital camera.',
      price: 350.00,
      type: 'Image',
    },
    {
       id: 4,
       imageName: 'portrait.jpg',
       imageUrl: 'https://via.placeholder.com/200x150?text=Portrait',
       description: 'A stunning portrait painting.',
       price: 180.00,
       type: 'Painting',
    },
    {
        id: 5,
        imageName: 'city_image.jpg',
        imageUrl: 'https://via.placeholder.com/200x150?text=City+Image',
        description: 'A vibrant city image.',
        price: 90.00,
        type: 'Image',
    },
  ];

  const handleViewDetails = (productId) => {
    // Implement your logic to view full details here.
    alert(`View details for product ID: ${productId}`);
    // You can use a modal, navigate to a new page, etc.
  };

  return (
    <div className="container mt-22 mx-auto p-4">
      <h2 className="text-4xl text-center font-bold mb-4">Product List</h2>
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
              onClick={() => handleViewDetails(product.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;