// Importing required modules from React and React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing default components used for layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Importing components for the main navigation links
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";

// Importing components for the sub-services under the "Our Services" page
import DigitalMarketing from "./components/DigitalMarketing";
import Branding from "./components/Branding";
import CustomDevelopment from "./components/CustomDevelopment";
import CustomerRetention from "./components/CustomerRetention";
import PublicRelations from "./components/PublicRelations";
import WebappDevelopment from "./components/WebappDevelopment";

// The main App component
const App = () => {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/about-us" element={<AboutUs />} />{" "}
          <Route path="/services" element={<OurServices />} />{" "}
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          <Route path="/digital-marketing" element={<DigitalMarketing />} />{" "}
          <Route path="/branding" element={<Branding />} />{" "}
          <Route path="/custom-development" element={<CustomDevelopment />} />{" "}
          <Route path="/customer-retention" element={<CustomerRetention />} />{" "}
          <Route path="/public-relations" element={<PublicRelations />} />{" "}
          <Route path="/web-app-development" element={<WebappDevelopment />} />{" "}
        </Routes>

        <Footer />

        <ScrollToTop />
      </>
    </Router>
  );
};

export default App;
