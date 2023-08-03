import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import FooterLogo from "../assets/images/FooterLogo.svg";
import Map2 from "../assets/images/Map2.svg";
import { FaArrowUp } from "react-icons/fa";
import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+918712345687";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@thegeekstudio.ae";
  };

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowBackToTop(true);
        setShowWhatsApp(true);
      } else {
        setShowBackToTop(false);
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="bg-[#222222] py-16 md:pb-16 xl:h-[650px] md:h-[600px]">
        <div
          className="object-cover bg-no-repeat bg-bottom bg-contain w-full md:h-[500px] h-auto"
          style={{
            backgroundImage: `url(${Map2})`,
            backgroundPosition: "right bottom 0px ",
          }}
        >
          <div className="container mx-auto h-auto px-4 flex flex-col justify-center items-center md:flex-row">
            <div className="md:w-2/5 text-center md:text-start">
              <h3 className=" text-2xl md:text-3xl font-bold text-[#EF3A37] mb-3 ">
                [ The Geek Studio ]
              </h3>
              <h2 className=" text-white text-3xl md:text-5xl font-bold mb-3 ">
                Stay with us
              </h2>
              <h4 className="text-[16px] text-[#777777] font-medium">
                Social media
              </h4>
              <div className="flex gap-2 mt-4 justify-center md:justify-start ">
                <a
                  href="https://www.instagram.com/thegeekstudio_ae/"
                  target="_blank"
                >
                  <FaInstagram
                    size={42}
                    className="text-[#fff] bg-[#EF3A37] rounded-full p-2 hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100093491574263"
                  target="_blank"
                >
                  <BiLogoFacebookCircle
                    size={42}
                    className="text-[#fff] bg-[#EF3A37] rounded-full p-2 hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-geek-studio/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={42}
                    className="text-[#fff] bg-[#EF3A37] rounded-full p-2 hover:bg-[#000000] hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>
              <h4 className="text-[16px] text-[#777777] mt-4 font-medium">
                Phone Number
              </h4>
              <p
                className="cursor-pointer text-white text-xl font-medium"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                onClick={handlePhoneClick}
              >
                +971 548887187
              </p>
              <h4 className="text-[16px] text-[#777777]  mt-4 font-medium">
                Email
              </h4>
              <p
                className="cursor-pointer text-white text-xl font-medium mb-4"
                onClick={handleEmailClick}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                info@thegeekstudio.ae
              </p>
              <button className="text-white font-bold text-[14px] px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full">
                <Link to="/contact-us">Get in touch</Link>
              </button>
            </div>
            <div className="md:w-3/5 h-full  mt-16 md:mt-0 ml-0 ">
              <div className="flex  mb-10 md:mb-10">
                <img
                  src={FooterLogo}
                  alt="Dummy Logo"
                  className="w-full h-28 lg:h-40 "
                />
              </div>

              <div className="text-center mt-5 md:mt-0">
                <a
                  href="https://goo.gl/maps/8UcLGaf1UjdtF8F1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click here to get the map"
                  className="text-[14px] font-medium border border-[#777777] px-4 md:px-6 py-3 text-white mb-3"
                >
                  Jumeirah Lakes Towers, Astrolabs, Dubai UAE
                </a>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto">
          <div className=" mt-5 text-[#777777] text-lg">
            <p>
              &copy; {new Date().getFullYear()} The Geek Studio. All rights
              reserved.
            </p>
          </div>
        </div>
        </div>
       
      </footer>
      <footer className="bg-[#222222] text-white  relative flex flex-col">
        {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-white text-[#15102A] text-2xl p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-300 hover:text-[#EF3A37]"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>
        )}

        {showWhatsApp && <ContactButton />}
      </footer>
    </>
  );
};

export default Footer;
