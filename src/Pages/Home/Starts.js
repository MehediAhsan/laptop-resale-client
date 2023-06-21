import React from 'react';
import { FaBriefcase, FaUsers, FaChartBar } from 'react-icons/fa';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="py-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-6 bg-accent shadow-lg rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaBriefcase className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-100">200+</h3>
            <p className="text-base-100">Projects</p>
          </div>
          <div className="p-6 bg-accent shadow-lg rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-100">5000+</h3>
            <p className="text-base-100">Clients</p>
          </div>
          <div className="p-6 bg-accent shadow-lg rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaChartBar className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-100">
              <CountUp start={0} end={150} duration={2} />
              <span className="text-base">%</span>
            </h3>
            <p className="text-base-100">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
