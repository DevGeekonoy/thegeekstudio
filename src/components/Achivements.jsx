import { useState } from "react";
const Achivements = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="container-fluid mx-auto md:h-screen h-auto">
      <div className="flex flex-col md:flex-row items-center justify-center md:h-screen h-auto">
        <div className="bg-[#222222] w-full md:w-1/2 px-4 p-5 md:py-0 py-20 flex items-center md:h-screen h-auto justify-center md:text-left text-center">
          <div>
            <span className=" text-2xl md:text-3xl font-bold text-[#EF3A37]  mb-4">
              [ OUR ACHIEVEMENTS ]
            </span>
            <h2 className="text-xl md:text-4xl font-medium text-white text-bold mt-5 md:mt-3 md:w-[500px] w-full">
              We’ve sturdily stationed a significant marketing platform for you
              to lay down your trust on and expect us to deliver the best.
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="flex flex-wrap h-screen">
            <div
           
              className="md:w-1/2 w-full bg-[#222222] flex items-center justify-center transition duration-300 hover:bg-[#EF3A37] border border-[#D9D9D966] border-opacity-25"
            >
              <div className="text-white text-center">
                <p className="text-2xl font-bold">SUCCESS RATES</p>
                <h3
                  className="text-3xl md:text-5xl font-extrabold mt-3"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  93%
                </h3>
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-[#222222] flex items-center justify-center transition duration-300 hover:bg-[#EF3A37] border border-[#D9D9D966] border-opacity-25">
              <div className="text-white text-center">
                <p className="text-2xl font-bold">RETENTION RATE</p>
                <h3
                  className="text-3xl md:text-5xl font-extrabold mt-3"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  98%
                </h3>
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-[#222222] flex items-center justify-center transition duration-300 hover:bg-[#EF3A37] border border-[#D9D9D966] border-opacity-25">
              <div className="text-white text-center">
                <p className="text-2xl font-bold">INDUSTRY EXPERIANCE</p>
                <h3
                  className="text-3xl md:text-5xl font-extrabold mt-3"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  25
                </h3>
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-[#222222] flex items-center justify-center transition duration-300 hover:bg-[#EF3A37] border border-[#D9D9D966] border-opacity-25">
              <div className="text-white text-center">
                <p className="text-2xl font-bold">TEAM MEMBERS</p>
                <h3
                  className="text-3xl md:text-5xl font-extrabold mt-3"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  100+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
