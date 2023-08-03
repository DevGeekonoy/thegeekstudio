import React from "react";
import customerrete from "../assets/custom/webdev1.png";
import customerbig from "../assets/custom/webdev-2.png";
import banner from "../assets/banner.jpg";
import app1 from "../assets/webapp/app1.png";
import app2 from "../assets/webapp/app2.png";
import app3 from "../assets/webapp/app3.png";
import app4 from "../assets/webapp/app4.png";
import BeautifulCity from "./BeautifulCity";

const WebappDevelopment = () => {
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
              Web & App Development
            </h1>
          </div>
        </div>
      </div>
      <div className=" container-fluid mx-auto ">
        <div className="container-fluid mx-auto ">
          <div className="container-fluid mx-auto sm:items-center md:h-screen justify-center flex flex-wrap">
            <div className="w-full md:h-screen md:w-1/2 ">
              <img
                src={`${customerrete}`}
                alt=""
                class="object-cover w-full md:h-screen"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="p-4 border-b md:border-b-0 md:pl-5 border-[#222222] border-opacity-25 border-r-none  h-full lg:pr-48 ">
                <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                  [ BUILT ON THE FOUNDATION ]
                </h1>
                <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                  Web Development
                </h1>
                <p className="  md:mb-1 lg:mb-5  text-[#222222]">
                  We at The Geek Studio are a team of web designers in Dubai who
                  specialize in developing cutting-edge, approachable, and
                  result-driven websites. We think that a company's website can
                  reveal a lot about it. And why not, since your company's
                  website is the only online representation of your business?
                </p>
                <p className="  md:mb-1 lg:mb-5  text-[#222222]">
                  As a top provider of app development services, we are proud of
                  our educated staff of seasoned app developers with knowledge
                  of a range of platforms and technologies. We distinguish
                  ourselves by specialising in particular markets or app
                  categories, providing a strong portfolio, and emphasising
                  customer collaboration and UX/UI design to meet their goals.
                </p>
                <p className="  md:mb-1 lg:mb-5  text-[#222222]">
                  As a top provider of app development services, we are proud of
                  our educated staff of seasoned app developers with knowledge
                  of a range of platforms and technologies. We distinguish
                  ourselves by specialising in particular markets or app
                  categories, providing a strong portfolio, and emphasising
                  customer collaboration and UX/UI design to meet their goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mx-auto ">
          <div className="container-fluid mx-auto sm:items-center md:h-screen justify-center flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="border-b md:border-b-0 text-[#222222] p-4 sm:pl-20   lg:pl-40  border-r-none md:border-r">
                <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                  What We Offer
                </h1>
                <p className="lg:mb-8 md:mb-2  text-[#222222]">
                  Your website must capture the greatest number of visitors to
                  turn them into potential clients and advance your business to
                  the next level. With this in mind, we develop a website that
                  appears at the top of search engine results using the most
                  recent web design technologies and effective SEO techniques.
                </p>
                <ul className="list-disc list-inside lg:mt-4 ">
                  <li>App Design and Development</li>
                  <li>Website Design and Development</li>
                  <li>Web servicing and maintenance</li>
                  <li>Branding design- logo creation</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:h-screen md:w-1/2 ">
              <img
                src={`${customerbig}`}
                alt=""
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  ">
            In the modern world, web design
          </h3>
          <h3 className="text-3xl font-medium text-white  mb-10">
            and development are essential.
          </h3>
          <p className="text-white  font-medium mb-2 md:mb-5">
            You should be aware that things have changed a little if you're
            entering the dynamic world of business. Numerous business
            opportunities are now available in the online environment. Every
            business, from a florist to a large corporation, is working hard to
            dominate the online market. There are many rivals and fierce
            competition. How do you think you can increase your clientele?
            Create a website, to begin with!
          </p>
          <p className="text-white  font-medium mb-2 md:mb-5">
            Over 1.5 billion web pages are now accessible online. How can you be
            distinctive? You have a right to ask these questions, and it is
            shrewd of you to accept our assistance.
          </p>
          <p className="text-white  font-medium mb-2 md:mb-5">
            The greatest website designers in Dubai work for The Geek Studio,
            and they are aware of how daunting it can all be! Even if your
            product is excellent, it will be difficult to sell if your website
            doesn't receive enough traffic.
          </p>
          <p className="text-white  font-medium mb-2 md:mb-5">
            You can develop a website that is responsive, user-friendly, and
            speaks to your target audience with the assistance of our team of
            skilled and imaginative professionals. We provide web design
            services in Dubai in such a way that it appears more often and
            appears on the top. With visibility skyrocketing, there’s nothing
            that can stop your business from growing exponentially.
          </p>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center  mt-10 md:mt-20">
            <div className=" md:w-16 md:h-16 h-22 w-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${app1}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                App Design and Development
              </h3>
              <p className="text-white">
                Creating unique apps that improve user interaction, streamline
                processes, and perfectly represent your brand.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-16 md:h-16 h-22 w-22 md:mr-7 mb-5 sm:mb-0">
              <img src={`${app2}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Website Design and Development
              </h3>
              <p className="text-white">
                unique, responsive websites that are expertly created to improve
                your online presence and generate results.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-28 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${app3}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Web Servicing and Maintenancet
              </h3>
              <p className="text-white">
                Web maintenance is crucial to ensuring that your website is
                serving its intended function. Monitoring website traffic,
                updating content, and making sure the website is secure are all
                the services that we provide.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center ">
            <div className=" md:w-24 md:h-22 h-22 w-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${app4}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Mobile Specific Website Designing
              </h3>
              <p className="text-white">
                A functional, accessible, and visually appealing website must be
                designed for the mobile web and tested to ensure it works
                properly and that's what we provide.
              </p>
            </div>
          </div>
        
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default WebappDevelopment;
