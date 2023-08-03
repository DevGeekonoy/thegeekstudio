import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import public1 from "../assets/public/public1.png";
import public2 from "../assets/public/public2.png";
import public3 from "../assets/public/public3.png";
import public4 from "../assets/public/public4.png";
import public5 from "../assets/public/public5.png";
import publicrelation from "../assets/public/publicrelation.png";
import publicrelationbig from "../assets/public/publicrelationbig.png";
import BeautifulCity from "./BeautifulCity";
const PublicRelations = () => {
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
              Public Relations
            </h1>
          </div>
        </div>
      </div>
      <div className=" container-fluid mx-auto sm:py-0 ">
        <div className=" w-full ">
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto sm:items-center justify-center flex flex-wrap">
              <div className="w-full md:w-1/2  ">
              <img src={`${publicrelation}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>

              <div
                className="w-full md:w-1/2"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <div className="border-b md:border-b-0 border-[#222222] border-opacity-25 p-4 sm:pr-20 md:pr-48 md:pl-5 responsive-right lg:pr-56 lg:py-20 ">
                  <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                    [ BUILT ON THE FOUNDATION ]
                  </h1>
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    Public Relations
                  </h1>
                  <p className=" md:mb-3 lg:mb-8 mb-2 text-[#222222]">
                    Public relations play a role in influencing how people view
                    a person or a business. You are assigned a point person at
                    The Geek Studio who is aware of your objectives. We'll work
                    with you to determine what is significant about your brand
                    and secure the media coverage you need to increase your
                    authority and advance in your field, thanks to our skilled
                    PR team's access to thousands of news media outlets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto  sm:items-center justify-center flex flex-wrap">
              <div
                className="w-full md:w-1/2"
                onMouseEnter={handlepublice}
                onMouseLeave={handlepublice}
              >
                <div className="border-b md:border-b-0 text-[#222222] p-4 sm:pl-20 md:pl-40 responsive lg:pl-40 py-20 border-r-none md:border-r">
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    How Can PR Benefit You?
                  </h1>
                  <p className=" md:mb-3 lg:mb-8 mb-2 text-[#222222]">
                    Public relations may be the most effective type of
                    advertising; with only one effective pitch, it may increase
                    brand recognition, authority, third-party validation, and
                    SEO visibility.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 ">
              <img src={`${publicrelationbig}`} alt=""   class="object-cover w-full h-full" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  mb-10">
            Our Public Relations Services
          </h3>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-[70px] md:h-[70px] w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${public1}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                View What's Newsworthy
              </h3>
              <p className="text-white">
                We'll dig deep into your sector to learn what you're up to and
                how it can help people who are looking for your services.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-28 md:h-22 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${public2}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Remain current
              </h3>
              <p className="text-white">
                The Geek Studio has the resources to connect you with
                journalists and reporters that can use your expert opinion as
                part of their narrative and remain up to speed on industry news
                every day so that you can seize possibilities.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-40 md:h-22 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${public3}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Develop the Message
              </h3>
              <p className="text-white">
                fantastic writers, like those at The Geek Studio, who take the
                time to comprehend the significance of the work they perform,
                are the foundation of fantastic press releases. For a message
                that resonates with your audience, The Geek Studio combines this
                with a thorough understanding of who they are
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-52 md:h-22 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${public4}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Organic Growth
              </h3>
              <p className="text-white">
                PR for organic growth is no longer a one-off endeavor. The
                finest Search Engine Optimization (SEO) you can obtain, in my
                opinion, is having your brand connected with the appropriate
                terms in reputable media sites that appear in searches. In
                addition to being a reputable SEO agency, The Geek Studio is
                more than just an online Marketing Agency; we conduct keyword
                research to give you a long-term presence.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-42 md:h-42 w-22 h-22  md:mr-7 mb-5 sm:mb-0">
              <img src={`${public5}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center ">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Receive Our Advice
              </h3>
              <p className="text-white">
                If we can manage to come up with a PR program that would be
                advantageous to your company, we'll start to develop a plan and
                fully explain it to you. This may cover everything from guest
                blogging and newspapers to television and radio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default PublicRelations;
