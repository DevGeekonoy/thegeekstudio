import React from "react";
import beautiful from "../assets/beautiful-city.jpg";
import { Link } from "react-router-dom";

const BeautifulCity = () => {
  const containerStyle = {
    backgroundImage: `url(${beautiful})`,
    backgroundPosition: "center",  
    backgroundSize: "cover",
  };

  return (
    <div className="container px-4 mb-10 relative flex flex-col justify-start items-center mx-auto">
      <div
        style={containerStyle}
        className=" inset-0 bg-no-repeat w-full bg-cover bg-center h-[400px] transform translate-y-24"
      >
        <div className="md:p-24 p-4 w-full md:w-1/2 flex flex-col justify-start items-center">
          <div className="text-center md:text-start mb-6 flex flex-col">
            <h2 className="md:text-3xl text-3xl font-extrabold text-[#fff] block">
              Get a Free Marketing Consultation For Your Business
            </h2>
            <button className="text-white font-bold text-[14px] px-8 py-3 bg-[#EF3A37] block md:w-48 mt-5">
            <Link to="/contact-us">REACH US</Link>  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulCity;
