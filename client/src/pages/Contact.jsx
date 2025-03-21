import React, { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto mt-22 p-4">
      <h2 className="text-5xl font-bold text-center mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row items-stretch">
        {/* Image Section */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4 h-auto md:h-[515px]">
          <img
            src="contact-us.png" // Replace with your image path
            alt="Contact Us"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 h-auuto md:h-[515px] flex items-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-full px-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm">
                <FaUser className="mx-2 text-gray-600 text-2xl" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-0 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm">
                <FaEnvelope className="mx-2 text-gray-600 text-2xl" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-0 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="flex items-start border rounded-md border-gray-300 shadow-sm">
                <FaMessage className="mx-2 mt-2 text-gray-600 text-2xl" />
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 outline-0 rounded-md"
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm font-medium cursor-pointer text-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">Or you can reach us at:</p>
        <p className="text-lg text-gray-700">
          Email:{" "}
          <a
            href="mailto:contact@example.com"
            className="text-indigo-600 hover:underline"
          >
            contact@brushandbeyond.com
          </a>
        </p>
        <p className="text-lg text-gray-700">Phone: +91 7310941087</p>
      </div>
    </div>
  );
};

export default Contact;