import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import Group from "../assets/marketing/Group.png";
import svm from "../assets/marketing/svm.png";
import smm from "../assets/marketing/smm.png";
import opm from "../assets/marketing/opm.png";
import contentmarketing from "../assets/marketing/content-marketing.png";
import emailmarketing from "../assets/marketing/emailmarketing.png";
import marketingstaragerty from "../assets/marketing/stragety.png";
import influencer from "../assets/marketing/influencer.png";
import affilliate from "../assets/marketing/affilliate.png";
import videomarketing from "../assets/marketing/videomarketing.png";
import ecommerce from "../assets/marketing/ecommerce.png";
import webanalatics from "../assets/marketing/webanalatics.png";
import webmarketing from "../assets/marketing/webmarketing.png";
import traffic from "../assets/marketing/webmarketing.png";
import digitalmarket1 from "../assets/marketing/digitalmarket1.jpg";
import digitalmarket2 from "../assets/marketing/digitalmarket2.jpg";
import BeautifulCity from "./BeautifulCity";

const DigitalMarketing = () => {
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
              Digital Marketing
            </h1>
          </div>
        </div>
      </div>
      <div className=" container-fluid mx-auto sm:py-0">
        <div className=" w-full ">
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto justify-center sm:items-center  flex flex-wrap">
              <div className="w-full md:w-1/2   sm:h-auto   text-white">
                <img src={`${digitalmarket1}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>

              <div
                className="w-full md:w-1/2 border-b md:border-b-0 border-[#222222] border-opacity-25 border-r-none"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <div className="p-4 sm:pr-20  ">
                  <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                    [ BUILT ON THE FOUNDATION ]
                  </h1>
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    Digital Marketing
                  </h1>
                  <p className="md:mb-8  text-[#222222]">
                    Building a strong online presence is crucial for businesses
                    to succeed in today’s digital environment. Our expertise at
                    The Geek Studio is in providing complete digital marketing
                    solutions that produce quantifiable outcomes. We enable your
                    brand to realize its full potential in the digital sphere
                    with our strategic approach and cutting-edge methods. The
                    complexity of the internet environment is understood by our
                    team of digital marketing specialists, who also keep up with
                    the always changing trends and algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          <div className="container-fluid mx-auto px-4 sm:px-0">
            <div className="container-fluid mx-auto justify-center sm:items-center flex flex-wrap">
              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlepublice}
                onMouseLeave={handlepublice}
              >
                <div className="border-b md:border-b-0 text-[#222222]  sm:pl-20  border-r-none md:border-r">
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    What We Offer
                  </h1>
                  <p className="md:mb-8  text-[#222222]">
                    We use a multi-channel strategy to increase your online
                    presence, ranging from social media management and content
                    marketing to search engine optimization (SEO) and
                    pay-per-click (PPC) advertising.
                  </p>
                  <ul className="list-disc list-inside mt-4 ">
                    <li>Search Engine Optimisation</li>
                    <li>Search Engine Marketing</li>
                    <li>Organic and paid social media marketing</li>
                    <li>Online Reputation Management</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>Marketing Strategy</li>
                    <li>Influencer Marketing</li>
                    <li>Affiliate Marketing</li>
                    <li>Video Marketing</li>
                    <li>E-Commerce Marketing</li>
                    <li>Web Analytics &amp; Optimization</li>
                    <li>Mobile Marketing &amp; Advertising</li>
                    <li>Lead and Traffic Generation</li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-1/2  sm:h-auto  text-white">
              <img src={`${digitalmarket2}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  mb-10">
            Our Digital Marketing Services
          </h3>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0">
              <img src={`${Group}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white  ">
                Search Engine Optimisation (SEO)
              </h3>
              <p className="text-white">
                We offer a range of digital marketing services, including SEO,
                social media marketing, email marketing, and more. Our goal is
                to help your business grow and reach a wider audience through
                effective digital strategies.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${svm}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Search Engine Marketing (SEM)
              </h3>
              <p className="text-white">
                To attract relevant visitors to your website and improve
                visibility in search engine results pages (SERPs), we develop
                targeted and optimized advertising campaigns on search engines,
                such as Google Ads.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-32 md:h-32  w-22 h-22 md:mr-12 mb-5 sm:mb-0 ">
              <img src={`${smm}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Social Media Marketing
              </h3>
              <p className="text-white">
                Using platforms like Facebook, Instagram, Twitter, LinkedIn, and
                more, we plan and put into action organic and paid social media
                campaigns to engage your target audience, raise brand awareness,
                increase traffic, and generate leads.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-32 md:h-32  w-22 h-22 md:mr-12 mb-5 sm:mb-0 ">
              <img src={`${opm}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Online Repuation Management
              </h3>
              <p className="text-white">
                Our online reputation management services assist you in keeping
                an eye on and managing the online reputation of your company,
                ensuring positive sentiment and effectively responding to any
                bad comments or reviews to uphold a favorable brand image.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${contentmarketing}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Content Marketing
              </h3>
              <p className="text-white">
                Through blog posts, articles, videos, infographics, and more, we
                provide relevant and compelling content that connects with your
                target audience, builds brand credibility, and promotes organic
                traffic and conversions.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${emailmarketing}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Email Marketing
              </h3>
              <p className="text-white">
                Through tailored and targeted email communications, our email
                marketing campaigns assist you in establishing a direct
                connection with your audience, nurturing prospects, and
                developing client relationships.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img
                src={`${marketingstaragerty}`}
                alt="Digital Marketing Image"
              />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Marketing Strategy
              </h3>
              <p className="text-white">
                We create specialized digital marketing plans that are based on
                the objectives of your company, the demographics of your target
                market, and the competitive landscape of your sector.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${influencer}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Influencer Marketing
              </h3>
              <p className="text-white">
                We work with influencers who are pertinent to your sector or
                specialty to take advantage of their credibility and reach,
                resulting in genuine brand endorsements that increase engagement
                and conversion rates.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${affilliate}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Affiliate Marketing
              </h3>
              <p className="text-white">
                By collaborating with affiliates who market your goods or
                services and receive commissions for generating leads or sales,
                our affiliate marketing programs help you increase your reach.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${videomarketing}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Video Marketing
              </h3>
              <p className="text-white">
                We produce engaging video content for platforms like YouTube,
                social media, and websites that tells the story of your company,
                engages your audience, and encourages sales.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${ecommerce}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                E-Commerce Marketing
              </h3>
              <p className="text-white">
                In order to give your customers a seamless online buying
                experience, we apply strategies and techniques to improve
                exposure, drive traffic, and optimize conversions for your
                e-commerce store.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 w-22 md:h-28 h-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${webanalatics}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Web Analytics and Optimisation
              </h3>
              <p className="text-white">
                We make use of web analytics technologies to assess user
                behavior, website performance, and conversion metrics, allowing
                us to make data- driven decisions and continuously improve your
                digital marketing efforts.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${webmarketing}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Mobile Marketing and Advertsing
              </h3>
              <p className="text-white">
                To successfully target mobile users, reach them on their
                devices, and encourage engagement and conversions, we design
                mobile marketing strategies and mobile advertising campaigns.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-24 h-24  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${traffic}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Traffic and Lead Generation
              </h3>
              <p className="text-white">
                To successfully target mobile users, reach them on their
                devices, and encourage engagement and conversions, we design
                mobile marketing strategies and mobile advertising campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default DigitalMarketing;
