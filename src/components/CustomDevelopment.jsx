import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import custom1 from "../assets/custom/custom1.png";
import custom2 from "../assets/custom/custom2.png";
import custom3 from "../assets/custom/custom3.png";
import custom4 from "../assets/custom/custom4.png";
import custom5 from "../assets/custom/custom5.png";
import customdev1 from '../assets/custom/customdev1.jpg'
import customdev2 from '../assets/custom/customdev2.jpg'
import BeautifulCity from "./BeautifulCity";
const CustomDevelopment = () => {
  const [isActive, setIsActive] = useState(true);
  const [pubretantion, setpubretantion] = useState(true);

  const handleHover = () => {
    setIsActive(!isActive);
  };
  const handlepublice = () => {
    setpubretantion(!pubretantion);
  };
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[450px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container md:text-start text-center  h-full px-4 mx-auto flex flex-col justify-center md:items-start items-center ">
          <div className="md:text-start text-center  mb-6">
            <h6 className="text-2xl  font-bold text-[#EF3A37] mb-3">
              [ SERVICES ]
            </h6>
            <h1 className="md:text-5xl text-3xl font-extrabold text-[#fff]">
              Custom Development
            </h1>
          </div>
        </div>
      </div>
      <div className=" container-fluid mx-auto  ">
        <div className=" w-full ">
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto sm:items-center justify-center flex flex-wrap">
              <div className="w-full md:w-1/2  sm:h-auto   text-white py-5 sm:py-0">
                 <img src={`${customdev1}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>

              <div
                className="w-full md:w-1/2 px-4 sm:px-0 py-5 sm:py-0"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <div className="border-[#222222] border-b md:border-b-0 border-opacity-25  sm:pr-20 md:pr-48 md:pl-5 responsive-right lg:pr-56 lg:py-20 ">
                  <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                    [ BUILT ON THE FOUNDATION ]
                  </h1>
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    Custom Development
                  </h1>
                  <p className="md:mb-8 mb-2 text-[#222222]">
                    We at The Geek Studio are aware that every firm has
                    different needs and specifications for software and
                    technological solutions. Because of this, we provide
                    thorough custom development services that are targeted to
                    your business goals. Our skilled team of developers excels
                    in creating dependable and scalable web platforms, mobile
                    apps, and software applications that are in line with your
                    vision and provide smooth user experiences. From design to
                    implementation, we collaborate directly with you to
                    comprehend your objectives, examine your operations, and
                    create specialized solutions that boost productivity and
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mx-auto  py-5 sm:py-0">
            <div className="container-fluid mx-auto sm:items-center justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2 px-4 sm:px-0 pb-10 sm:pb-0" 
                onMouseEnter={handlepublice}
                onMouseLeave={handlepublice}
              >
                <div className="border-b  md:border-b-0 text-[#222222] sm:pl-20 md:pl-40 responsive lg:pl-40 lg:py-20 border-r-none md:border-r">
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    What We Offer
                  </h1>
                  <p className="md:mb-8 mb-2 text-[#222222]">
                    We have the versatility to manage projects of any complexity
                    thanks to our in-depth expertise in a variety of
                    technologies and programming languages. Whether you require
                    an e-commerce platform that is easy to use or a fully
                    tailored business software solution, our custom development
                    services are created to satisfy your particular needs.
                  </p>
                  <ul className="list-disc list-inside mt-4 ">
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>Website Maintenance</li>
                    <li>Turnkey Websites</li>
                    <li>Web optimization</li>
                    <li>Digital Strategies</li>
                    <li>Bringing back compromised websites</li>
                  </ul>
                </div>
              </div>

              {/* <div className="w-full md:w-1/2 md:h-screen">
              <img src={`${customdev2}`} alt=""   className="object-cover md:h-screen" loading="lazy"/>
              </div> */}
               <div className="w-full md:h-screen md:w-1/2 ">
              <img
                src={`${customdev2}`}
                alt=""
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  mb-10">
            Our Custom Development Services
          </h3>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${custom1}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Website Maintenance
              </h3>
              <p className="text-white">
                We offer dependable website maintenance services so you can
                concentrate on your core business operations while we make sure
                your website operates flawlessly, is safe, and keeps up with
                current industry trends.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-32 md:h-32 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${custom2}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Turnkey Websites
              </h3>
              <p className="text-white">
                Our turnkey website solutions provide an easy way to immediately
                build your online presence. We offer professionally designed,
                fully functional, and scalable websites that are ready for
                launch and can be customized to match your branding needs.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${custom3}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Web Optimisations
              </h3>
              <p className="text-white">
                Our team does thorough assessments and puts optimization tactics
                into place to improve your website’s functionality, speed, and
                user experience while increasing conversion rates and search
                engine visibility.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${custom4}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Digital Strategies
              </h3>
              <p className="text-white">
                We create thorough digital strategies that are customized to
                your company’s goals, utilizing a variety of digital marketing
                channels and strategies to raise brand awareness, improve
                traffic, and produce quality leads.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${custom5}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Restoration of Compromised Websites
              </h3>
              <p className="text-white">
                Our seasoned team moves quickly to review and restore your
                website’s security in the tragic case of a compromised website,
                guaranteeing a safe and secure online presence for your company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default CustomDevelopment;
