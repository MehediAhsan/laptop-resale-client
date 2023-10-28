import React from 'react';
import { FaBriefcase, FaUsers, FaChartBar } from 'react-icons/fa';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="py-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="p-6 text-primary shadow-md rounded-lg shadow-secondary -skew-x-1 -skew-y-1 cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaBriefcase className="text-white text-2xl text-center" />
            </div>
            <h3 className="text-3xl font-semibold text-center"><CountUp start={0} end={200} duration={20} />+</h3>
            <p className="text-center text-xl">Projects</p>
          </div>
          <div className="p-6 text-primary shadow-md rounded-lg shadow-secondary -skew-x-1 -skew-y-1 cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaUsers className="text-white text-2xl text-center" />
            </div>
            <h3 className="text-3xl font-semibold text-center"><CountUp start={0} end={5000} duration={20} />+</h3>
            <p className="text-center text-xl">Clients</p>
          </div>
          <div className="p-6 text-primary shadow-md rounded-lg shadow-secondary -skew-x-1 -skew-y-1 cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
              <FaChartBar className="text-white text-2xl text-center" />
            </div>
            <h3 className="text-3xl font-semibold text-center">
              <CountUp start={0} end={150} duration={20} />
              <span className="text-base">%</span>
            </h3>
            <p className="text-center text-xl">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
