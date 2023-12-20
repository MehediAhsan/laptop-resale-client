import React from "react";

const AboutUs = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className=" py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex items-center"
          >
            <div className="mr-8">
              <h2 className="text-3xl font-bold mb-4 text-secondary">
                About Our Company
              </h2>
              <p className="text-lg mb-6">
                Laptop Hub is a leading provider of high-quality, pre-owned
                laptops. With a passion for technology and a commitment to
                sustainability, we offer a wide range of refurbished laptops at
                affordable prices.
              </p>
              <p className="text-lg mb-6">
                Our team of experts carefully inspects and refurbishes each
                laptop, ensuring that it meets our strict quality standards. We
                believe that everyone should have access to reliable and
                affordable laptops, which is why we're dedicated to making
                technology more accessible for all.
              </p>
              <p className="text-lg mb-6">
                Whether you're a student, a professional, or someone looking for
                a reliable laptop for everyday use, we've got you covered.
                Explore our collection of refurbished laptops and find the
                perfect device that suits your needs.
              </p>
              <a
                href="#contact"
                className="text-primary hover:text-primary-dark font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex items-center justify-center"
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPbXiJs7NuWL8sZew890KQ_BdX20nyMnwHKdPnC=w768-h768-n-o-v1"
              alt="About Us"
              className="w-full h-auto max-w-lg rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
