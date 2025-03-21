import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Abstract Art", imageUrl: "./product1.jpg", price: "$50", description: "A stunning abstract painting with vibrant colors." },
    { id: 2, name: "Modern Sculpture", imageUrl: "./product2.jpg", price: "$120", description: "A beautifully crafted modern sculpture made of stone." },
    { id: 3, name: "Landscape Painting", imageUrl: "./product3.jpg", price: "$80", description: "A peaceful landscape scene capturing nature’s beauty." },
    { id: 4, name: "Portrait Sketch", imageUrl: "./product4.jpg", price: "$60", description: "A detailed pencil sketch of a classic portrait." },
  ];

  // State for modal visibility and selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open Modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProduct]);

  return (
    <div className="mx-auto mt-22">
      {/* Carousel */}
      <Carousel />

      {/* Who We Are Section */}
      <div className="mt-8 text-center px-6">
        <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our Art Gallery! We are a collective of passionate artists and art enthusiasts,
          dedicated to showcasing and promoting unique artwork from around the world. Our gallery
          provides a platform for emerging and established artists to present their masterpieces to a
          global audience. Whether you are a collector, an interior designer, or someone who simply
          appreciates fine art, we have something special for you. We believe that art has the power
          to inspire, connect, and transform spaces, and we strive to bring you the most captivating
          pieces available.
        </p>
      </div>

      {/* Product Listings */}
      <div className="mt-12 px-4 mb-12">
        <h2 className="text-4xl font-semibold mb-6 text-center">Our Products</h2>
        <p className="text-lg text-gray-600 text-center mb-6 px-6">
          Our collection includes a diverse range of artworks, from vibrant abstract paintings to
          intricately detailed sculptures. Each piece is carefully curated to ensure the highest quality
          and artistic value. Whether you are looking for a bold centerpiece or a subtle addition to your
          collection, you will find something that resonates with your aesthetic.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className=" rounded-lg overflow-hidden shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => openModal(product)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal Component */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-teal-800">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative m-2">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full max-h[50vh] object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold mt-4">{selectedProduct.name}</h3>
            <p className="text-gray-700 text-lg mt-2">{selectedProduct.description}</p>
            <p className="text-gray-800 text-2xl font-bold mt-2">{selectedProduct.price}</p>
            <button
              className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* What We Do Section */}
      <div className="mt-12 text-center px-6 py-12">
        <h2 className="text-4xl font-semibold mb-4">What We Do</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our gallery is not just about showcasing art; we aim to create a thriving art community.
          We organize exhibitions, workshops, and artist meetups to encourage artistic expression and
          appreciation. Our services include art consultations, custom commissions, and framing solutions.
          We also collaborate with interior designers and businesses to curate artwork that enhances
          spaces and brings creative visions to life. Whether you are an artist looking for a platform
          or an art lover searching for the perfect piece, we are here to assist you.
        </p>
      </div>

      {/* Contact Us Section */}
      <div
        className="mt-12 text-center py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('slide1.jpg')" }}
      >
        <div className="bg-opacity-50 py-10 px-6 rounded-lg inline-block">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg 0">Have questions? We'd love to hear from you!</p>
          <p className="text-lg 0 mt-2">
            📧 Email:{" "}
            <a href="mailto:contact@artgallery.com" className=" hover:underline">
              contact@brushandbeyond.com
            </a>
          </p>
          <p className="text-lg mt-2">
            📞 Phone:{" "}
            <a href="tel:+917310941087" className=" hover:underline">
              +91-7310941087
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;