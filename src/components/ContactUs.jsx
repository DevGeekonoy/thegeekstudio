import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import dubai from "../assets/dubai-towers.png";
import BeautifulCity from "./BeautifulCity";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const showToastMessage = () => {
    toast(
      "Thanks for contacting us, Our team will get back to you shortly :)",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };


  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setFromData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("https://thegeekstudio.onrender.com/sendmail", formData);
      showToastMessage();
      setFromData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container w-full h-full px-4 mx-auto flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-start mb-6">
            <h6 className="text-2xl text-center md:text-start font-semibold text-[#EF3A37] mb-3">
              [ CONTACT US ]
            </h6>
            <h1 className="md:text-5xl  text-3xl font-extrabold text-[#fff]">
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center ">
          <div className="h-auto w-full ">
            <h2 className="text-2xl  w-full md:w-96 mb-10 font-medium text-[#222222] ">
              Get a Free Marketing Consultation For Your Business
            </h2>

            <div className="mt-4 ">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full border-[#CCCCCC] text-[12px] border  shadow-sm focus:border-primary focus:ring focus:ring-primary py-2 px-2 sm:px-3"
                  placeholder="Name"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full border-[#CCCCCC] text-[12px] border  shadow-sm focus:border-primary focus:ring focus:ring-primary mt-6 py-2 px-2 sm:px-3"
                  placeholder="Email"
                />

                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full border-[#CCCCCC] text-[12px] border  shadow-sm focus:border-primary focus:ring focus:ring-primary mt-6 py-2 px-2 sm:px-3"
                  placeholder="Mobile Number"
                />

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="10"
                  required
                  className="block w-full border-[#CCCCCC] text-[12px] border  shadow-sm focus:border-primary focus:ring focus:ring-primary mt-6 py-2 px-2 sm:px-3"
                  placeholder="Message"
                ></textarea>

               
                <button
                  type="submit"
                  className="mt-4 px-8 py-2  bg-[#EF3A37] text-white  shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin h-5 w-5  mr-2">
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-spin rounded-full border-t-2 border-white border-solid h-5 w-5"></div>
                      </span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className=" bg-[#EF3A37]  w-full shadow-md  h-[500px] sm:h-auto  relative">
            <div
              className="object-cover bg-no-repeat  bg-contain relative bottom-0 w-full h-full"
              style={{
                backgroundImage: `url(${dubai})`,
                backgroundPosition: "bottom",
              }}
            >
              <div className="space-y-6 md:p-14 p-5">
                <div className="text-xl pl-5 sm:pl-0 font-semibold flex items-center">
                  <h6 className="text-2xl font-medium text-white mb-3">
                    [ STAY CONNECTED ]
                  </h6>
                </div>
                <div className="text-xl font-semibold flex items-center">
                  <div className="p-2 rounded-full bg-white">
                    <FaPhoneAlt className="text-[#EF3A37] text-xl" />
                  </div>
                  <p
                    className="ml-2 text-white"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    +971 548887187
                  </p>
                </div>
                <div className="text-xl font-semibold flex items-center">
                  <div className="p-2 rounded-full bg-white">
                    <MdEmail className="text-[#EF3A37] text-xl" />
                  </div>
                  <p className="ml-2">
                    <a
                      href="mailto:info@thegeekstudio.ae"
                      className="bold text-white hover:underline"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      info@thegeekstudio.ae
                    </a>
                  </p>
                </div>
                <div className="text-xl font-semibold flex items-center">
                  <div className="p-2 rounded-full bg-white">
                    <FaMapMarkerAlt className="text-[#EF3A37] text-xl" />
                  </div>
                  <p
                    className="ml-2 text-white"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    Jumeirah Lakes Towers, Astrolabs, Dubai UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mx-auto mt-10">
        <h2 className="text-3xl font-medium text-[#222222] text-center">
          How To Find Us
        </h2>
        <div className="mt-10  rounded overflow-hidden relative  ">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7370641167067!2d55.147264199999995!3d25.0768995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad97a03f91%3A0x9cee6adf07ebed17!2sAstroLabs%20Dubai!5e0!3m2!1sen!2sin!4v1689681894091!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: "0px" }}
          ></iframe>
        </div>
      </div>
      <ToastContainer />;
      <BeautifulCity />
    </>
  );
};
export default ContactUs;
