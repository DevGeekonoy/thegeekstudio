import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MaskGroup1 from "../assets/BlogImages/Mask Group1.png";
import MaskGroup2 from "../assets/BlogImages/Mask Group2.png";
import MaskGroup3 from "../assets/BlogImages/Mask Group3.png";

const Carousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const content = [
    {
      id: 1,
      image: MaskGroup1,
      title: "Woven Health",
      description:
        "Woven Health Clinic is a community clinic that offers high-quality medical care at lower costs to adults in Dubai. Their community clinic covers both the uninsured and underinsured...",
      link: "",
      date: "12.04.2023",
    },
    {
      id: 2,
      image: MaskGroup2,
      title: "Sagar Industries",
      description:
        "Sagar Industries a sole proprietorship was established in the year 1998 and proved itself to be the leading manufacturer and exporter of Wire Drawing Machine...",
      link: "",
      date: "12.04.2023",
    },
    {
      id: 3,
      image: MaskGroup3,
      title: "HomeMD",
      description:
        "HomeMD Housecall Services, which has been in business since 2018, is a nurse practitioner-owned organization that strives to care for others with compassion...",
      link: "",
      date: "12.04.2023",
    },
  ];

  const renderCards = () => {
    return content.map((card) => (
      <React.Fragment key={card.id}>
        <a href={card.link} className="block">
          <div className="p-4 rounded-md bg-red-500">
            <div className="aspect-w-10 aspect-h-7">
              <img
                src={card.image}
                alt="product image"
                className="object-cover w-full h-full rounded-md opacity-90"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-600 text-[14px] mb-2">{card.description}</p>
              <p className="text-[#777777] text-[16px]">{card.date}</p>
            </div>
          </div>
        </a>
      </React.Fragment>
    ));
  };
  

  return (
    <>
      <div className="container mx-auto   px-4 my-10 flex flex-wrap  items-center md:items-start justify-center md:justify-start">
        <div className="text-center md:text-start my-8">
          <h3 className="text-2xl font-bold text-[#EF3A37] mb-4">[Blog]</h3>
          <h2 className="text-4xl font-extrabold mb-4">Blogs and Blurbs</h2>
          <p className="text-lg mb-4 text-[#777777]">
            Gain a bit more insight into our experiences
          </p>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center mx-auto px-2 my-10">
        <OwlCarousel className="owl-theme" {...options}>
          {renderCards()}
        </OwlCarousel>
        <button className="text-white text-center text-[22px] my-20 px-8 py-2 bg-[#EF3A37]">
          View More
        </button>
      </div>
    </>
  );
};

export default Carousel;
