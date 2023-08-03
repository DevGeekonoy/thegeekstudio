import React, { useState, useEffect } from "react";
import image from "../assets/popup.png";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasVisited", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [isCloseHovered, setIsCloseHovered] = useState(false);

  const handleCloseIconHover = () => {
    setIsCloseHovered((prev) => !prev);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center md:flex-row flex-col flex-wrap justify-center z-50 ">
        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="modal-container bg-white relative border-2 border-[#EF3A37]">
          <AiFillCloseCircle
            onClick={closeModal}
            className={`absolute top-0 md:top-0 right-0 m-4 cursor-pointer ${
              isCloseHovered ? "text-red-500" : "text-[#fff] md:text-[#222222]"
            } transition-colors duration-300`}
            onMouseEnter={handleCloseIconHover}
            onMouseLeave={handleCloseIconHover}
            style={{ fontSize: "24px" }} 
          />

          <div className=" flex items-center md:flex-row flex-col flex-wrap justify-center">
            <div className="w-full md:w-1/2 popup-first">
              <img
                src={`${image}`}
                alt="Placeholder"
                className="w-full md:max-w-full  popup-first popup-img"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 popup-second">
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
                    rows="4"
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
          </div>
        </div>
      </div>
      <ToastContainer />;
    </>
  );
};

export default Popup;
