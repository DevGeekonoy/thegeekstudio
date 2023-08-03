import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import branding1 from "../assets/branding/branding1.png";
import branding2 from "../assets/branding/branding2.png";
import branding3 from "../assets/branding/branding3.png";
import branding4 from "../assets/branding/branding4.png";
import branding5 from "../assets/branding/branding5.png";
import branding6 from "../assets/branding/branding6.png";
import branding7 from "../assets/branding/branding7.png";
import brad1 from "../assets/branding/brad1.jpg";
import brad2 from "../assets/branding/brad2.jpg";
import BeautifulCity from "./BeautifulCity";

const Branding = () => {
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
              Branding
            </h1>
          </div>
        </div>
      </div>
      <div className=" container-fluid mx-auto ">
        <div className=" w-full ">
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto justify-center sm:items-center flex flex-wrap">
              <div className="w-full md:w-1/2    sm:h-auto   text-white">
              <img src={`${brad1}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>

              <div
                className="w-full md:w-1/2"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <div className="p-4 border-[#222222] border-b md:border-b-0 border-opacity-25 sm:pr-20 md:pr-48 md:pl-5 responsive-right lg:pr-56 lg:py-20 ">
                  <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                    [ BUILT ON THE FOUNDATION ]
                  </h1>
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    Branding
                  </h1>
                  <p className="md:mb-8 mb-2 text-[#222222]">
                    At The Geek Studio, we recognize the critical part that
                    strong branding plays in determining a company’s success.
                    Our knowledgeable team is committed to assisting your
                    business in standing out and leaving a significant imprint
                    on the marketplace. We create captivating brand identities
                    that connect with your target audience through our unique
                    and strategic approach, placing your company as a leader in
                    its sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto sm:items-center justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlepublice}
                onMouseLeave={handlepublice}
              >
                <div className="border-b md:border-b-0 border-opacity-25 border-r-none text-[#222222] p-4 sm:pl-20 md:pl-40 responsive lg:pl-40 lg:py-20 border-r-none md:border-r">
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    What We Offer
                  </h1>
                  <p className="md:mb-8 mb-2 text-[#222222]">
                    We methodically construct every facet of your brand, from
                    logo design and visual identity to brand messaging and
                    market positioning, to guarantee consistency, relevance, and
                    memorability. Our creative methodology combines artistic
                    flair with industry data to produce appealing graphics that
                    convey the distinctive story of your business.
                  </p>
                  <ul className="list-disc list-inside mt-4 ">
                    <li>Branding Strategy</li>
                    <li>Brand Architecture</li>
                    <li>Nomenclature</li>
                    <li>Logo Designing & Brand Identity</li>
                    <li>Color Harmonies</li>
                    <li>Brand Guidelines</li>
                    <li>Brand Positioning</li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-1/2    text-white">
              <img src={`${brad2}`} alt=""   class="object-cover " loading="lazy"/>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  mb-10">
            Our Branding Services
          </h3>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-20 w-22 md:h-20 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding1}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Brand Strategy
              </h3>
              <p className="text-white">
                To direct all branding efforts, create a detailed plan that
                outlines the goals, target market, key messaging, and
                positioning of your brand.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24  w-22 h-22 md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding2}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Brand Architecture
              </h3>
              <p className="text-white">
                To effectively explain your brand portfolio, create a structured
                framework that groups your brand & product or service offerings,
                sub-brands, and their connections.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-20 w-22 md:h-20 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding3}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Nomenclature
              </h3>
              <p className="text-white">
                Develop product/service names, taglines, and brand names that
                strategically reflect your brand strategy and appeal to your
                target market.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding4}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Logo Designing and Brand Identity
              </h3>
              <p className="text-white">
                Design an eye-catching and enduring logo that embodies the
                principles of your company, and establish a consistent brand
                identity that displays your company&#39;s character across all
                touchpoints.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-20 w-22 md:h-20 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding5}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Color Harmonies
              </h3>
              <p className="text-white">
                Choose a color scheme that is harmonious and dependable,
                reinforces brand identification, and creates a visual connection
                with your audience.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding6}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Branding Guideline
              </h3>
              <p className="text-white">
                Establish precise standards that spell out how your brand should
                be expressed orally and graphically to preserve consistency and
                brand integrity throughout all communication channels.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-32 md:h-32 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${branding7}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Brand Positioning
              </h3>
              <p className="text-white">
                By placing your brand differently in the minds of your target
                customer, emphasizing its unique value proposition, and
                highlighting your company’s competitive advantages, you may set
                your brand apart from those of your rivals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default Branding;
