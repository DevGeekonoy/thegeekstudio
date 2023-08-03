import React from "react";

const Principal = () => {
  return (
    <>
      <div className="container px-4 mx-auto my-10 md:my-20">
        <div className="flex flex-col text-center md:text-start mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF3A37] mb-3">
            [ Principal ]
          </h3>
          <h2 className="  text-2xl md:text-3xl font-medium text-[#222222]">
            How We Operate And What We Thrive For
          </h2>
        </div>
      </div>
      <div className="container-fluid mx-auto  md:py-0  md:items-start items-center flex flex-col justify-center md:text-start ">
        <div className="border-t border-[#777777] border-opacity-25 w-full ">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 ">
            <div className=" py-12 border-b md:border-b-0 border-[#777777] border-opacity-25 border-r-none md:border-r ">
              <h3
                className="text-2xl  font-bold text-[#EF3A37]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                [01]
              </h3>
              <h1 className="text-2xl font-medium mb-4 text-[#222222]">
                Individuality, Innovations, And Us
              </h1>
              <p className="text-[#777777] ">
                As a brand marketing agency that caters to a vast audience
                worldwide, we hold a strong belief that every client and brand
                is unique in its individualistic way. We make sure to water
                their needs and standards in a way it helps them bloom in a
                garden of their own and reach heightened flourishments.
              </p>
            </div>

            <div className="md:pl-4 py-12">
              <h3
                className="text-2xl  font-bold text-[#EF3A37]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                [02]
              </h3>
              <h1 className="text-2xl font-medium mb-4 text-[#222222]">
                Abundance Of Growth
              </h1>
              <p className="text-[#777777] ">
                It is vital for The Geek Studio to see all our clients grow and
                get swarmed with a sense of importance and admiration in the
                market. Every individual member of our team is equipped with
                something extraordinary, which can only be achieved through
                vigorous hard work and experience, along with unmatchable talent
                that can undeniably cater to every need your brand holds.
              </p>
            </div>
          </div>
          <div className="border-t border-[#777777] border-opacity-25 w-full"> </div>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
            <div className=" border-b md:border-b-0 py-12 border-r-none md:border-r  border-[#777777] border-opacity-25">
              <h3
                className="text-2xl  font-bold text-[#EF3A37]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                [03]
              </h3>
              <h1 className="text-2xl font-medium mb-4 text-[#222222]">
                Cultivated Credibility
              </h1>
              <p className="text-[#777777] ">
                Credibility built over time is credibility best trusted. We have
                very slowly but surely built up a very trusted platform for our
                clients to put their faith on. Every dedicated member of our
                team works together to come up with robust digital marketing
                strategies and ideologies to provide your brand with a powerful,
                appealing-to-the-masses persona structurally.
              </p>
            </div>

            <div className="md:pl-4 py-12">
              <h3
                className="text-2xl  font-bold text-[#EF3A37]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                [04]
              </h3>
              <h1 className="text-2xl font-medium mb-4 text-[#222222]">
                Altruistic Appeal
              </h1>
              <p className="text-[#777777] ">
                Over the years we’ve very carefully curated strategies that fit
                every client's needs in a compelling and beneficial manner which
                has helped them achieve magnificent milestones through
                performative marketing throughout. This is an outcome of
                intensive research and digital advertising on our part while
                studying the online digital market thoroughly and coming up with
                compelling content to give a brand its own true identity with a
                sense of self.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
