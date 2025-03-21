import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-22 p-4">
      <h2 className="text-5xl font-bold text-center mb-8">
        About Our Art Gallery
      </h2>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Welcome to Brush & Beyond, a haven for art lovers and creators alike.
          Founded in 2022, our gallery was born out of a passion for showcasing
          the transformative power of art. We believe that art has the ability
          to inspire, provoke thought, and connect people from all walks of
          life.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          Our journey began with a vision to create a space where both emerging
          and established artists could display their unique perspectives and
          talents. Over the years, we've had the privilege of hosting numerous
          exhibitions featuring diverse styles and mediums, from contemporary
          paintings and sculptures to digital art and photography.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          At Brush & Beyond, our mission is to foster a vibrant and inclusive
          art community. We strive to provide a platform for artists to share
          their work and engage with a wider audience. We are committed to
          promoting artistic excellence and supporting the growth and
          development of artists.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          We believe in making art accessible to everyone, and we regularly host
          workshops, artist talks, and educational programs to encourage art
          appreciation and participation. We are dedicated to creating a
          welcoming and inspiring environment where visitors can discover and
          connect with art.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Our team is comprised of passionate art enthusiasts and professionals
          who are dedicated to providing exceptional service and curating
          outstanding exhibitions. We work closely with artists to ensure their
          vision is realized and with visitors to create a memorable gallery
          experience.
        </p>
        <ul className="mt-4 list-disc list-inside text-lg text-gray-700 leading-relaxed text-justify">
          <li>Sagar Sharma</li>
          <li>Rahul Chandel</li>
          <li>Ashutosh</li>
          {/* Add more team members as needed */}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Visit Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          We invite you to visit our gallery and experience the beauty and power
          of art firsthand. Our gallery is located at Main Market Karanpur,
          Dehradun and is open 10AM -9PM.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          For any inquiries, please contact us at{" "}
          <a href="mailto:contact@artgallery.com" className=" hover:underline">
            contact@brushandbeyond.com
          </a>{" "}
          or{" "}
          <a href="tel:+917310941087" className=" hover:underline">
            +91-7310941087
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
