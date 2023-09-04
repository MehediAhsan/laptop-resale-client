import React, { useState } from 'react';

const LaptopTimeline = () => {
    const laptopData = [
        {
          name: 'Osborne 1',
          description: 'The first commercially successful portable computer, weighing 24.5 pounds.',
          image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', // Image file path or URL
          features: 'Zilog Z80 CPU, 5-inch display, dual floppy drives',
          releaseYear: 1981,
        },
        {
          name: 'Compaq Portable',
          description: 'One of the first IBM-compatible portable computers, known for its "luggable" design.',
          image: 'compaq-portable.jpg',
          features: 'Intel 8088 CPU, 9-inch display, 10MB hard drive',
          releaseYear: 1982,
        },
        {
          name: 'IBM ThinkPad 700C',
          description: 'Introduced the iconic ThinkPad series, featuring a black magnesium case and a TrackPoint.',
          image: 'thinkpad-700c.jpg',
          features: 'Intel 486 CPU, 10.4-inch color TFT display, 120MB hard drive',
          releaseYear: 1992,
        },
        {
          name: 'Apple PowerBook G3',
          description: 'A significant laptop in Apple\'s history, known for its innovative design.',
          image: 'powerbook-g3.jpg',
          features: 'PowerPC G3 CPU, 14.1-inch display, hot-swappable drive bays',
          releaseYear: 1997,
        },
        {
          name: 'Dell XPS 13',
          description: 'A popular modern ultrabook with a compact design and high-resolution display.',
          image: 'xps-13.jpg',
          features: 'Various configurations with Intel Core processors, InfinityEdge display',
          releaseYear: 2012,
        },
        {
          name: 'Microsoft Surface Laptop 4',
          description: 'A premium laptop with a focus on productivity and a sleek aluminum build.',
          image: 'surface-laptop-4.jpg',
          features: 'Various configurations with Intel or AMD processors, PixelSense display',
          releaseYear: 2021,
        },
        // Add more laptops as needed
      ];
      const [currentLaptopIndex, setCurrentLaptopIndex] = useState(0);

  const navigateTimeline = (direction) => {
    if (direction === 'prev') {
      setCurrentLaptopIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (direction === 'next') {
      setCurrentLaptopIndex((prevIndex) =>
        prevIndex < laptopData.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const currentLaptop = laptopData[currentLaptopIndex];
      
  return (
    <section className="py-10">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Laptop History Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full mr-4"
              onClick={() => navigateTimeline('prev')}
              disabled={currentLaptopIndex === 0}
            >
              Previous
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full ml-4"
              onClick={() => navigateTimeline('next')}
              disabled={currentLaptopIndex === laptopData.length - 1}
            >
              Next
            </button>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={currentLaptop.image}
              alt={`Laptop - ${currentLaptop.name}`}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {currentLaptop.name}
              </h3>
              <p className="">{currentLaptop.description}</p>
              <p className="mt-4">
                <strong>Key Features:</strong> {currentLaptop.features}
              </p>
              <p className="mt-2">
                <strong>Release Year:</strong> {currentLaptop.releaseYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopTimeline;
