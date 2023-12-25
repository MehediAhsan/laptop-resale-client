import React, { useState } from "react";
import SectionTitle from './../../components/SectionTitle';

const LaptopTimeline = () => {
  const laptopData = [
    {
      name: "Osborne 1",
      description:
        "The first commercially successful portable computer, weighing 24.5 pounds.",
      image:
        "https://coimages.sciencemuseumgroup.org.uk/images/168/574/medium_2008_5018.jpg", // Image file path or URL
      features: "Zilog Z80 CPU, 5-inch display, dual floppy drives",
      releaseYear: 1981,
    },
    {
      name: "Compaq Portable",
      description:
        'One of the first IBM-compatible portable computers, known for its "luggable" design.',
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*ohrm_hStJDoB_EH952GdfA.png",
      features: "Intel 8088 CPU, 9-inch display, 10MB hard drive",
      releaseYear: 1982,
    },
    {
      name: "IBM ThinkPad 700C",
      description:
        "Introduced the iconic ThinkPad series, featuring a black magnesium case and a TrackPoint.",
      image:
        "https://helios-i.mashable.com/imagery/articles/058cliFIVNTvJcTRoIJj1dz/hero-image.fill.size_1248x702.v1623366591.jpg",
      features: "Intel 486 CPU, 10.4-inch color TFT display, 120MB hard drive",
      releaseYear: 1992,
    },
    {
      name: "Apple PowerBook G3",
      description:
        "A significant laptop in Apple's history, known for its innovative design.",
      image: "https://512pixels.net/wp-content/uploads/2019/05/bronze-keys.jpg",
      features: "PowerPC G3 CPU, 14.1-inch display, hot-swappable drive bays",
      releaseYear: 1997,
    },
    {
      name: "Dell XPS 13",
      description:
        "A popular modern ultrabook with a compact design and high-resolution display.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVOoJrriu7Ra-xY8c4XW019oKuMmhT7swul8YZ_iOIMU1ch2wkG_ZY2zR7FlsePYlcEM&usqp=CAU",
      features:
        "Various configurations with Intel Core processors, InfinityEdge display",
      releaseYear: 2012,
    },
    {
      name: "Microsoft Surface Laptop 4",
      description:
        "A premium laptop with a focus on productivity and a sleek aluminum build.",
      image:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/04/Surface-laptop-4-headline-shot.jpg",
      features:
        "Various configurations with Intel or AMD processors, PixelSense display",
      releaseYear: 2021,
    },
    // Add more laptops as needed
  ];
  const [currentLaptopIndex, setCurrentLaptopIndex] = useState(0);

  const navigateTimeline = (direction) => {
    if (direction === "prev") {
      setCurrentLaptopIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (direction === "next") {
      setCurrentLaptopIndex((prevIndex) =>
        prevIndex < laptopData.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const currentLaptop = laptopData[currentLaptopIndex];

  return (
    <section className="py-10 pt-36">
      <div className="container mx-auto px-4 md:px-20">
        <SectionTitle one={"Laptop"} two={"History Timeline"}></SectionTitle>
        <div className="relative shadow-md shadow-secondary">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="border hover:bg-secondary cursor-pointer text-white font-semibold px-4 py-2 rounded-full mr-4"
              onClick={() => navigateTimeline("prev")}
              disabled={currentLaptopIndex === 0}
            >
              Previous
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              className="border hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full ml-4"
              onClick={() => navigateTimeline("next")}
              disabled={currentLaptopIndex === laptopData.length - 1}
            >
              Next
            </button>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={currentLaptop.image}
              alt={`Laptop - ${currentLaptop.name}`}
              className="w-full h-64 object-contain object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {currentLaptop.name}
              </h3>
              <p className="">{currentLaptop.description}</p>
              <p className="mt-4">
                <strong className="text-secondary">Key Features:</strong> {currentLaptop.features}
              </p>
              <p className="mt-2">
                <strong className="text-secondary">Release Year:</strong> {currentLaptop.releaseYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopTimeline;
