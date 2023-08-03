import React from "react";
import banner from "../assets/banner.jpg";
import BeautifulCity from "./BeautifulCity";
import OurTeam from "./OurTeam";
const AboutUs = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[450px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container w-full h-full px-4 mx-auto flex flex-col justify-center md:items-start items-center ">
          <div className="text-center md:text-start mb-6">
            <h6 className="text-2xl  font-bold text-[#EF3A37] mb-3">
              [ ABOUT US ]
            </h6>
            <h1 className="md:text-5xl text-3xl font-extrabold text-[#fff]">
              Get To Know Us More!
            </h1>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto my-10 md:my-20">
        <div className="flex flex-col text-center md:text-start mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF3A37] mb-3">
            [ ABOUT US ]
          </h3>
          <h2 className=" text-2xl md:text-3xl font-medium text-[#222222]">
            Prioritising Our Clients
          </h2>
        </div>
      </div>
      <div className="container-fluid mx-auto my-14  flex flex-col justify-center ">
        <div className="border-t border-[#777777] border-opacity-20 w-full ">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="md:pr-2 py-12  border-b md:border-b-0 border-[#777777] border-opacity-20 border-r-none md:border-r">
              <h1 className="text-2xl font-medium mb-4  text-[#222222]">
                We tend to think outside the box
              </h1>
              <p className="text-[#777777]">
                Here at The Geek Studio, we believe in capturing every brand’s
                individual, true essence and working alongside them to help them
                reach the goals they desire and so genuinely deserve. Our
                ingenuity and ebullient attitude offer our clients the best of
                both worlds and make it a delightful experience for them to work
                with us.
              </p>
            </div>

            <div className="md:pl-5 py-12">
              <h1 className="text-2xl font-medium mb-4  text-[#222222]">
                We make the inevitable possible
              </h1>
              <p className="text-[#777777]">
                Our sole purpose is to pull you from the ground up and place you
                on a pedestal that is solely made and meant for your brand. The
                Geek Studio works rigorously towards effectively providing the
                best marketing strategies in a strikingly compelling and
                engaging manner that will pique the curiosity of anyone looking
                into growing their engagement efficiently and get swarmed with
                all the deserved attention in the market.
              </p>
            </div>
          </div>
          <div className="border-t border-[#777777] border-opacity-20 w-full">
            {" "}
          </div>
        </div>
      </div>

      <div className="container flex mx-auto  bg-[#EF3A37] h-auto md:h-80 w-full relative my-10 md:my-20">
        <div className=" p-7 md:p-24  ml-2 sm:ml-0">
          <h1 className="text-[20px] font-bold text-[#fff] mb-3">
            [ We Play By The Team ]
          </h1>
          <h3 className="text-2xl text-white font-bold inline-block">
            At The Geek Studio, we truly believe in the strength of social
            interaction. Working cohesively as a team, we achieve remarkable
            results, delivering excellence in all our endeavors.
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 my-20">
        <div className="flex flex-col text-center md:text-start mb-6">
          <h3 className="text-2xl  font-bold text-[#EF3A37] mb-3">
            [ MAIN PRINCIPLES ]
          </h3>
          <h2
            className=" text-2xl md:text-3xl font-medium text-[#222222]"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            4 Main Principles We Stand By
          </h2>
        </div>
      </div>
      <div className=" container-fluid mx-auto md:py-0  flex flex-col justify-center ">
        <div className="border-t border-[#777777] border-opacity-20 w-full ">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:h-60   h-auto">
            <div className="py-12  border-b md:border-b-0 md:p-2 md:py-14 lg:py-10 border-[#777777] border-opacity-20 border-r-none md:border-r ">
              <h1 className="text-2xl lg:text-[23px] md:text-[20px] font-medium mb-2 text-[#222222]">
                Geek Ingenuity
              </h1>
              <p className="text-[#777777]">
                We infuse every project with our inner geek, embracing
                unconventional ideas and innovative thinking to deliver truly
                remarkable and distinctive marketing solutions.
              </p>
            </div>

            <div className="py-12   md:p-2 md:py-14 lg:py-10 md:ml-3">
              <h1 className="text-2xl lg:text-[23px] md:text-[20px] font-medium mb-4 text-[#222222]">
                Data Driven Creativity
              </h1>
              <p className="text-[#777777]">
                Our strategies are rooted in data, ensuring that every creative
                decision is backed by insights, leading to campaigns that not
                only inspire but also deliver tangible results.
              </p>
            </div>
          </div>
          <div className="border-t border-[#777777] border-opacity-20 w-full">
            {" "}
          </div>
          <div className="container py-12 md:py-0 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="py-12  border-b md:border-b-0 md:p-2 md:py-14 lg:py-10 border-r-none md:border-r  border-[#777777] border-opacity-20">
              <h1 className="text-2xl  lg:text-[23px] md:text-[20px] font-medium mb-4 text-[#222222]">
                Client Centric Focus
              </h1>
              <p className="text-[#777777]">
                We believe in forging strong partnerships with our clients,
                understanding their unique needs and aspirations, and tailoring
                our solutions to exceed their expectations.
              </p>
            </div>

            <div className="py-12   md:p-2 md:py-14 lg:py-10 md:ml-3">
              <h1 className="text-2xl lg:text-[23px] md:text-[20px] font-medium mb-4 text-[#222222]">
                Continuous Evolution
              </h1>
              <p className="text-[#777777]">
                In the ever-changing digital landscape, we thrive on continuous
                learning and adapting, staying at the fore front of marketing
                trends and technologies to provide cutting-edge solutions that
                keep our clients ahead of the competition.
              </p>
            </div>
          </div>
          <div className="border-b border-[#777777] border-opacity-20 w-full">
            {" "}
          </div>
        </div>
      </div>
      <OurTeam />
      <BeautifulCity />
    </>
  );
};

export default AboutUs;
