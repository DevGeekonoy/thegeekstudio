import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import digital from "../assets/services/digital.svg";
import webapp from "../assets/services/webdev.svg";
import publice from "../assets/services/public.png";
import webgraphi from "../assets/services/web-graphic.png";
import brandingg from "../assets/services/branding.png";
import customerer from "../assets/services/customer.png";
import customdev from "../assets/services/customdev.png";
import publicwhite from "../assets/services/publicwhite.png";
import customerwhite from "../assets/services/customerwhite.png";
import marketingblack from "../assets/services/marketingblack.png";
import brandingwhite from "../assets/services/brandingwhite.png";
import BeautifulCity from "./BeautifulCity";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [isActive, setIsActive] = useState(true);
  const [pubretantion, setpubretantion] = useState(true);
  const [customer, setcustomer] = useState(true);
  const [marketing, setmarketing] = useState(true);
  const [branding, setBranding] = useState(true);
  const [webgraphic, setwebgraphic] = useState(true);
  const handleHover = () => {
    setIsActive(!isActive);
  };
  const handlepublice = () => {
    setpubretantion(!pubretantion);
  };
  const handlesetcustomer = () => {
    setcustomer(!customer);
  };
  const handlebranding = () => {
    setBranding(!branding);
  };
  const handlewebgraphic = () => {
    setwebgraphic(!webgraphic);
  };
  const handlemarketing = () => {
    setmarketing(!marketing);
  };

  const marketingStyle = {
    backgroundColor: isActive ? "#EF3A37" : "#fff",
    color: isActive ? "#fff" : "#EF3A37",
  };
  const customerStyle = {
    backgroundColor: customer ? "#EF3A37" : "#fff",
    color: customer ? "#fff" : "#EF3A37",
  };
  const pubretantionStyle = {
    backgroundColor: pubretantion ? "#EF3A37" : "#fff",
    color: pubretantion ? "#fff" : "#EF3A37",
  };
  const brandingStyle = {
    backgroundColor: branding ? "#EF3A37" : "#fff",
    color: branding ? "#fff" : "#EF3A37",
  };
  const webgraphicStyle = {
    backgroundColor: webgraphic ? "#EF3A37" : "#fff",
    color: webgraphic ? "#fff" : "#EF3A37",
  };
  const digitalStyle = {
    backgroundColor: marketing ? "#EF3A37" : "#fff",
    color: marketing ? "#fff" : "#EF3A37",
  };
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[450px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container w-full h-full px-4 mx-auto flex flex-col justify-center items-start">
          <div className="text-center md:text-start mb-6">
            <h3 className="text-2xl  font-bold text-[#EF3A37] mb-3">
              [ SERVICES ]
            </h3>
            <h2 className="md:text-5xl text-3xl font-extrabold text-[#fff]">
              Our geeks here believe in growth <br /> that lasts for a lifetime
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-20">
        <div className="flex flex-col text-center md:text-start mb-6">
          <h3 className="text-2xl  font-bold text-[#EF3A37] mb-3">
            [ SERVICES ]
          </h3>
          <h2 className=" text-3xl font-medium text-[#222222]">
            Strategies to never let your growth go stagnant
          </h2>
        </div>
      </div>
      <div className=" container-fluid mx-auto md:py-0   ">
        <div className="border-t  border-[#222222] border-opacity-25 w-full ">
          <div className="container-fluid mx-auto">
            {/* <div className="container-fluid mx-auto justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2 "
                onMouseEnter={handlemarketing}
                onMouseLeave={handlemarketing}
              >
                <div
                  className={`p-4 sm:pl-20 md:pl-40 responsive lg:pl-40 py-12 border-b md:border-b-0 border-[#222222] border-opacity-25 border-r-none md:border-r ${
                    marketing
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] text-white transition-all"
                  }`}
                >
                  <img 
                  src={marketing ? marketingblack : digital}
                   className="w-16 h-16 mb-5" />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      marketing ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Digital Marketing
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      marketing ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Building a strong online presence is crucial for businesses
                    to succeed in today’s digital environment. Our expertise at
                    The Geek Studio is in providing complete digital marketing
                    solutions that produce quantifiable outcomes. We enable your
                    brand to realize its full potential in the digital sphere
                    with our strategic approach and cutting-edge methods...
                  </p>
                  <Link
                    className={`text-${
                      marketing ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                    to="/digital-marketing"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div
                className="w-full md:w-1/2"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <div
                  className={`p-4 sm:pr-20 md:pr-48 md:pl-5 responsive-right  lg:pr-56 py-12 ${
                    isActive
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] text-white transition-all"
                  }`}
                >
                  <img
                    src={isActive ? webapp : customdev}
                    className="w-16 h-16 mb-5 mt-6 text-white"
                  />

                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      isActive ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Custom Development
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      isActive ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    We at The Geek Studio are aware that every firm has
                    different needs and specifications for software and
                    technological solutions. Because of this, we provide
                    thorough custom development services that are targeted to
                    your business goals...
                  </p>
                  <Link
                    to="/custom-development"
                    className={`text-${
                      isActive ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="container-fluid mx-auto justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2 "
                onMouseEnter={handlemarketing}
                onMouseLeave={handlemarketing}
              >
                <div
                  className={`p-4 h-full sm:pl-20 md:pl-40 responsive lg:pl-40 py-12 border-b md:border-b-0 border-[#222222] border-opacity-25 border-r-none md:border-r ${
                    marketing
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] text-white transition-all"
                  }`}
                >
                  <img
                    src={marketing ? marketingblack : digital}
                    className="w-16 h-16 mb-5"
                  />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      marketing ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Digital Marketing
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      marketing ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Building a strong online presence is crucial for businesses
                    to succeed in today’s digital environment. Our expertise at
                    The Geek Studio is in providing complete digital marketing
                    solutions that produce quantifiable outcomes. We enable your
                    brand to realize its full potential in the digital sphere
                    with our strategic approach and cutting-edge methods...
                  </p>
                  <Link
                    className={`text-${
                      marketing ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                    to="/digital-marketing"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2" 
               onMouseEnter={handleHover}
               onMouseLeave={handleHover}
              >
                <div
                  className={`p-4  h-full sm:pr-20 md:pr-48 md:pl-5 responsive-right lg:pr-56 py-12 ${
                    isActive
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] text-white transition-all"
                  }`}
                >
                  <img
                    src={isActive ? webapp : customdev}
                    className="w-16 h-16 mb-5 mt-6 text-white"
                  />

                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      isActive ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Custom Development
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      isActive ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    We at The Geek Studio are aware that every firm has
                    different needs and specifications for software and
                    technological solutions. Because of this, we provide
                    thorough custom development services that are targeted to
                    your business goals...
                  </p>
                  <Link
                    to="/custom-development"
                    className={`text-${
                      isActive ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t  border-[#222222] border-opacity-25 w-full">
            {" "}
          </div>
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlepublice}
                onMouseLeave={handlepublice}
              >
                <div
                  className={`border-b h-full md:border-b-0 p-4 sm:pl-20 md:pl-40  responsive lg:pl-40 py-12 border-r-none md:border-r ${
                    pubretantion
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] hover:text-white transition-all"
                  }`}
                >
                  <img
                    src={pubretantion ? publice : publicwhite}
                    className="w-16 h-16 mb-5"
                  />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      pubretantion ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Public Relations
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      pubretantion ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Public relations play a role in influencing how people view
                    a person or a business. You are assigned a point person at
                    The Geek Studio who is aware of your objectives. We'll work
                    with you to determine what is significant about your brand
                    and secure the media coverage you need to increase your
                    authority and advance in...
                  </p>
                  <Link
                    to="/public-relations"
                    className={`text-${
                      pubretantion ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlesetcustomer}
                onMouseLeave={handlesetcustomer}
              >
                <div
                  className={` border-b h-full md:border-b-0 p-4 sm:pr-20 md:pr-48 md:pl-5 responsive-right  lg:pr-56 py-12 ${
                    customer
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] hover:text-white transition-all"
                  }`}
                >
                  <img
                    src={customer ? customerer : customerwhite}
                    className="w-16 h-16 mb-5"
                  />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      customer ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Customer Retention
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      customer ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    The Geek Studio is aware of the crucial role that client
                    retention plays in the long-term success of your company.
                    Our customer-centric approach places a strong emphasis on
                    developing tactics that will help you establish and maintain
                    enduring relationships with your cherished clients.
                  </p>
                  <Link
                    to="/customer-retention"
                    className={`text-${
                      customer ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#222222] border-opacity-25 w-full">
            {" "}
          </div>
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlebranding}
                onMouseLeave={handlebranding}
              >
                <div
                  className={`border-b h-full md:border-b-0 p-4 sm:pl-20 md:pl-40  responsive lg:pl-40 py-12 border-r-none md:border-r ${
                    branding
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] hover:text-white transition-all"
                  }`}
                >
                  <img
                    src={branding ? brandingg : brandingwhite}
                    className="w-16 h-16 mb-5"
                  />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      branding ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Branding
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      branding ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    At The Geek Studio, we recognize the critical part that
                    strong branding plays in determining a company’s success.
                    Our knowledgeable team is committed to assisting your
                    business in standing out and leaving a significant imprint
                    on the marketplace. We create captivating brand identities
                    that connect with your target audience through our unique...
                  </p>
                  <Link
                    className={`text-${
                      branding ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                    to="/branding"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlewebgraphic}
                onMouseLeave={handlewebgraphic}
              >
                <div
                  className={` border-b h-full md:border-b-0 p-4 sm:pr-20 md:pr-48 md:pl-5 responsive-right  lg:pr-56 py-12 ${
                    webgraphic
                      ? "text-[#222222]"
                      : "hover:bg-[#EF3A37] hover:text-white transition-all"
                  }`}
                >
                  <img
                    src={webgraphic ? webgraphi : customdev}
                    className="w-16 h-16 mb-5"
                  />
                  <h1
                    className={`text-2xl font-medium mb-4 ${
                      webgraphic ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    Web & App Development
                  </h1>
                  <p
                    className={`md:mb-8 mb-2 ${
                      webgraphic ? "text-[#222222]" : "text-[#fff]"
                    }`}
                  >
                    We at The Geek Studio are a team of web designers in Dubai
                    who specialize in developing cutting-edge, approachable, and
                    result-driven websites. We think that a company's website
                    can reveal a lot about it. And why not, since your company's
                    website is the only online representation of your
                    business...
                  </p>
                  <Link
                    to="/web-app-development"
                    className={`text-${
                      webgraphic ? "[#EF3A37]" : "[#fff]"
                    } text-[1rem] font-extrabold`}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#222222] border-opacity-25 w-full ">
            {" "}
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default OurServices;
