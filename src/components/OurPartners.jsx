import React from "react";
import wp from "../assets/new-partners/wp.png";
import hyundai from "../assets/new-partners/hyundai.png";
import ig from "../assets/new-partners/ig.png";
import rectangle from "../assets/new-partners/rectangle.png";
import honda from "../assets/new-partners/honda.png";
import gcid from "../assets/new-partners/gcid.png";
import info from "../assets/new-partners/info.png";
import calvin from "../assets/new-partners/calvins.png";
import benz from "../assets/new-partners/benz.png";
import leadstore from "../assets/new-partners/leadstore.png";
import cybersqauard from "../assets/new-partners/cyber.png";
import elan from "../assets/new-partners/elaan.png";
import homemd from "../assets/new-partners/homemd.png";
import bookmyshow from "../assets/new-partners/bookmyshow.png";
import divyasree from "../assets/new-partners/divyasree.png";
import sector from "../assets/new-partners/sector-stack.png";
import minercult from "../assets/new-partners/minercult.png";
import careoneteam from "../assets/new-partners/careoneteam.png";
import ackuretta from "../assets/new-partners/ackuretta.png";
import terrific from "../assets/new-partners/terrrific.png";
import hindhi from "../assets/new-partners/hindhi.png";
import grammi from "../assets/new-partners/grammi.png";
import kinfolk from "../assets/new-partners/kinfolk.png";
import edulamp from "../assets/new-partners/edulmap.png";
import wovenhealth from "../assets/new-partners/wovenhealth.png";
import kemia from "../assets/new-partners/kemia.png";
import police from "../assets/new-partners/police.png";
import davanam from "../assets/new-partners/davanam.png";

const logos = [
  {
    id: 1,
    title: "wp",
    image: wp,
  },

  {
    id: 2,
    title: "hyundai",
    image: hyundai,
  },

  {
    id: 3,
    title: "ig",
    image: ig,
  },
  {
    id: 4,
    title: "rectangle",
    image: rectangle,
  },
  {
    id: 5,
    title: "honda",
    image: honda,
  },
  {
    id: 6,
    title: "gcid",
    image: gcid,
  },
  {
    id: 7,
    title: "info",
    image: info,
  },
  {
    id: 8,
    title: "calvin",
    image: calvin,
  },
  {
    id: 9,
    title: "benz",
    image: benz,
  },
  {
    id: 10,
    title: "leadstore",
    image: leadstore,
  },

  {
    id: 11,
    title: "cybersqauard",
    image: cybersqauard,
  },
  {
    id: 12,
    title: "elan",
    image: elan,
  },
  {
    id: 13,
    title: "homemd",
    image: homemd,
  },
  {
    id: 14,
    title: "bookmyshow",
    image: bookmyshow,
  },
  {
    id: 15,
    title: "divyasree",
    image: divyasree,
  },
  {
    id: 16,
    title: "sector",
    image: sector,
  },
  {
    id: 17,
    title: "minercult",
    image: minercult,
  },
  {
    id: 18,
    title: "careoneteam",
    image: careoneteam,
  },

  {
    id: 19,
    title: "ackuretta",
    image: ackuretta,
  },
  {
    id: 20,
    title: "terrific",
    image: terrific,
  },
  {
    id: 21,
    title: "hindhi",
    image: hindhi,
  },
  {
    id: 22,
    title: "grammi",
    image: grammi,
  },
  {
    id: 23,
    title: "kinfolk",
    image: kinfolk,
  },
  {
    id: 24,
    title: "edulamp",
    image: edulamp,
  },
  {
    id: 25,
    title: "wovenhealth",
    image: wovenhealth,
  },
  {
    id: 26,
    title: "kemia",
    image: kemia,
  },

  {
    id: 27,
    title: "police",
    image: police,
  },
  {
    id: 28,
    title: "davanam",
    image: davanam,
  },
];

const SocialMedia = () => {
  return (
    <>
      <div className=" container mx-auto  flex flex-col justify-center py-5  md:my:0 md:py-10 px-4">
        <div className="text-center md:text-start py-10">
          <h3 className="text-2xl  md:text-3xl font-bold text-[#EF3A37]  mb-3">
            [ OUR PATRONS ]
          </h3>
          <h2 className=" md:text-3xl text-2xl  font-medium mb-3 text-[#222222]">
            Our valuable patrons worldwide
          </h2>
          <p className="text-lg text-[#777777] ">
            Letting our ingenuity flow and breathe throughout
          </p>
        </div>
        <div
          className="container bg-cover  object-cover items-center mx-2 my-8 bg-no-repeat "
          style={{ backgroundImage: `url(${Map})` }}
        >
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-12">
            {logos.map((logo) => (
              <React.Fragment key={logo.id}>
                <div className="flex items-center justify-center">
                  <img src={logo.image} className="" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
