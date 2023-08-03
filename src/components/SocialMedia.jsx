import React from "react";
import Icon1 from "../assets/socialMediaImages/Icon1.svg";
import Icon2 from "../assets/socialMediaImages/Icon2.svg";
import Icon3 from "../assets/socialMediaImages/Icon3.svg";
import Icon4 from "../assets/socialMediaImages/Icon4.svg";
import Icon5 from "../assets/socialMediaImages/Icon5.svg";
import Icon6 from "../assets/socialMediaImages/Icon6.svg";

const icons = [
  {
    id: 1,
    title: "Digital Marketing",
    image: Icon5,
  },
  {
    id: 2,
    title: "Web & App Development",
    image: Icon6,
  },
  {
    id: 3,
    title: "Public Retention",
    image: Icon3,
  },
  {
    id: 4,
    title: "Customer Retention",
    image: Icon2,
  },
  {
    id: 5,
    title: "Branding",
    image: Icon1,
  },
  {
    id: 6,
    title: "Web & Graphic Design",
    image: Icon4,
  },
];

const SocialMedia = () => {
  return (
    <div className="bg-[#222222] min-h-screen flex flex-col items-center justify-center py-8">
      <div className="container mx-auto px-4  py-10">
        <div className="flex flex-col text-center md:text-start mb-6">
          <h3 className="text-3xl font-bold text-[#EF3A37] mb-3">
            [Social Media]
          </h3>
          <h2 className="text-4xl font-bold text-white mb-3">
            We believe in growth that lasts for a lifetime
          </h2>
          <p className="text-white text-[20px]">
            We use a vast range of strategies to never let your growth go
            stagnant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-center">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col py-24 md:py-24 sm:py-16 items-center p-6 hover:bg-[#EF3A37] hover:text-white transition-colors duration-300 border border-white"
            >
              <img
                src={icon.image}
                alt={icon.title}
                className="text-white w-24 mb-2"
              />
              <div className="text-2xl text-white text-center mt-4">
                {icon.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
