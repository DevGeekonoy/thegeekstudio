import heroVideo from "../assets/banner-video.mp4";
import Video from "./Video";
import Achivements from "./Achivements";
import Principal from "./Principal";
import Services from "./Services";
// import Blog from "./Blog";
import OurPartners from "./OurPartners";
import { Link } from "react-router-dom";
import Popup from './Popup'
const HeroSection = () => {
  return (
    <>  
    <Popup/>
      <section className="h-screen relative flex justify-start items-center ">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            className="w-full h-screen object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#222222] opacity-80"></div>
        </div>
        <div className="container mx-auto    h-full flex justify-start items-center lg:px-10 px-4 relative z-10 border-[#FFFFFF80] border-opacity-50  border-l border-r ">
          <div className="text-white ">
            <p className="text-[#EF3A37] text-2xl font-bold lg:text-2xl mb-3 uppercase">
              [ The Geek Studio ]
            </p>
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white mb-8 break-words">
              Iridescent Innovations Creating
              <br /> Enchantment Every Step
              <br /> Of The Way
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl text-white mb-8">
              We work rigorously towards providing your brand
              <br /> with the best possible platform
            </p>
            <button className="px-8 py-3 uppercase bg-[#EF3A37] text-white text-sm font-semibold transition duration-300 ease-in-out hover:bg-red-600">
              <Link to="/contact-us">Get in touch</Link>
            </button>
          </div>
        </div>
        <div className=" hidden md:block absolute bottom-20 left-0 w-full border-b border-[#FFFFFF80] border-opacity-50"></div>
      </section>
      <Video />
      <Achivements />
      <Principal />
      <Services />
      <OurPartners />
      {/* <Blog /> */}
    </>
  );
};

export default HeroSection;
