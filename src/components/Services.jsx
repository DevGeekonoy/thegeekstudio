import React from "react";
import Icon1 from "../assets/socialMediaImages/Icon1.svg";
import Icon2 from "../assets/socialMediaImages/Icon2.svg";
import Icon3 from "../assets/socialMediaImages/Icon3.svg";
import Icon4 from "../assets/socialMediaImages/Icon4.svg";
import Icon5 from "../assets/socialMediaImages/Icon5.svg";
import Icon6 from "../assets/socialMediaImages/Icon6.png";
import { Link } from "react-router-dom";
const icons = [
  {
    id: 1,
    title: "Digital Marketing",
    image: Icon5,
    url: "digital-marketing",
  },
  {
    id: 2,
    title: "Web & App Development",
    image: Icon6,
    url: "web-app-development",
  },
  {
    id: 3,
    title: "Public Relations",
    image: Icon3,
    url: "public-relations",
  },
  {
    id: 4,
    title: "Customer Retention",
    image: Icon2,
    url: "customer-retention",
  },
  {
    id: 5,
    title: "Branding",
    image: Icon1,
    url: "branding",
  },
  {
    id: 6,
    title: "Custom Development",
    image: Icon4,
    url: "custom-development",
  },
];

const Services = () => {
  return (
    <div className="bg-[#222222] min-h-screen flex flex-col items-center justify-center py-5 md:py-10">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col text-center md:text-start mb-6 px-2">
          <h3 className="text-3xl font-bold text-[#EF3A37] mb-3">
            [ Services ]
          </h3>
          <h2 className="md:text-3xl text-2xl font-medium text-white mb-3">
            We believe in growth that lasts for a lifetime
          </h2>
          <p className="text-[#FFFFFF] md:text-2xl  text-xl font-medium mb-12">
            We use a vast range of strategies to never let your growth go
            stagnant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center border border-[#777777] border-opacity-25">
          {icons.map((icon) => (
            <Link to={`/${icon.url}`} key={icon.id}>
              <div
                className='flex flex-col py-10 md:py-16 sm:py-16 items-center  hover:bg-[#EF3A37] hover:text-white transition-colors duration-300 border border-[#777777] border-opacity-25  '
              >
                <img
                  src={icon.image}
                  alt={icon.title}
                  className="text-white w-24 h-24 mb-2"
                />
                <p className=" font-bold text-white text-center mt-4">
                  {icon.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
