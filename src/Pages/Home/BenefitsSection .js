import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHandshake, FaRecycle } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Competitive Prices',
      description:
        'Get the best value for your old laptops with our competitive pricing.',
      icon: <FaDollarSign size={48} />,
    },
    {
      title: 'Hassle-Free Transactions',
      description:
        'We make the process simple and convenient, ensuring a smooth transaction.',
      icon: <FaHandshake size={48} />,
    },
    {
      title: 'Eco-Friendly Recycling',
      description:
        'Contribute to sustainability by recycling your old devices through us.',
      icon: <FaRecycle size={48} />,
    },
  ];

  return (
    <section className=" text-white py-16 pb-36">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-14 text-primary">
          Why <span className='text-neutral'>Choose Us?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-red-500">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">{benefit.title}</h3>
              <p className="text-gray-800">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
