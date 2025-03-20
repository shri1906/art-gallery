// Home.jsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/home.css";


const Home = () => {

  // Sample product data
  const products = [
    { id: 1, name: "Abstract Art", imageUrl: "./product1.jpg", price: "$50" },
    {
      id: 2,
      name: "Modern Sculpture",
      imageUrl: "./product2.jpg",
      price: "$120",
    },
    {
      id: 3,
      name: "Landscape Painting",
      imageUrl: "./product3.jpg",
      price: "$80",
    },
    {
      id: 4,
      name: "Portrait Sketch",
      imageUrl: "./product4.jpg",
      price: "$60",
    },
  ];

  return (
    <div className="mx-auto my-22">
      {/* Carousel */}
      
      <Carousel >
        <div>
          <img src="./slide1.jpg" />
        </div>
        <div>
          <img src="./slide2.jpg" />
        </div>
        <div>
          <img src="./slide3.jpg" />
        </div>
        <div>
          <img src="./slide4.jpg" />
        </div>
      </Carousel>
    

      {/* Mini Intro */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to Our Art Gallery
        </h2>
        <p className="text-lg text-gray-600">
          Discover a curated collection of fine art from talented artists. We
          offer a diverse range of paintings, sculptures, and more.
        </p>
      </div>

      {/* Product Listings */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
