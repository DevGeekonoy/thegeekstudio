import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Geek_Studio_Logo 1.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [isMobile, setIsMobile] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div
      className={`bg-[#111111]  ${
        url === "/" ? "md:border-b md:border-[#FFFFFF80] border-opacity-50" : ""
      }`}
    >
      <nav
        className={`container mx-auto px-4 p-3  ${
          url === "/" ? "border-[#FFFFFF80] border-opacity-50 border-l border-r" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex">
            <Link
              to="/"
              className={`text-[15px] font-normal ${
                url === "/" ? "active underline" : "text-[#F0F0F0]"
              }`}
            >
              <img src={logo} alt="" className=" w-full h-20" />
            </Link>
          </div>

          <div className="hidden space-x-6 md:flex">
            <Link
              to="/"
              className={`text-[15px] font-normal ${
                url === "/" ? "active underline" : "text-[#F0F0F0]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`text-[#F0F0F0] text-[15px] font-normal ${
                url === "/about-us" ? "active underline" : "text-[#F0F0F0]"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-[#F0F0F0] text-[15px] font-normal ${
                url === "/services" ? "active underline" : "text-[#F0F0F0]"
              }`}
            >
              Services
            </Link>
            {/* <Link to="/coming-soon" className="text-white">
              Portfolio
            </Link> */}
            {/* <Link to="/coming-soon" className="text-white">
              Our Team
            </Link> */}
          </div>
          <div className="hidden md:flex">
            <Link
              to="/contact-us"
              className={`p-2 px-6 text-[15px] pt-2 uppercase text-black font-bold bg-[#F0F0F0] hover:text-white baseline hover:bg-red-500 md:block transition-all duration-300 ease-in-out ${
                url === "/contact-us"
                  ? "bg-red-500 text-white font-medium"
                  : "text-[#F0F0F0]"
              }`}
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textDecoration: "none",
                display: "inline-block",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              Contact Us
            </Link>
          </div>

          <button
            className="block hamburger md:hidden focus:outline-none p-2 rounded-md text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div
              className="absolute w-screen h-screen bg-black opacity-100"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="w-4/5 max-w-xs bg-white rounded-lg shadow-md relative">
              <button
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex-col items-center py-8 px-2 space-y-6 font-bold overflow-y-auto">
                <Link
                  to="/"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  Services
                </Link>
                {/* <Link
                  to="/coming-soon"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  Portfolio
                </Link> */}
                {/* <Link
                  to="/coming-soon"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  Our Team
                </Link> */}
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-black  hover:bg-gray-100"
                >
                  Contact US
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
