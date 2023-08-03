import React, { useState } from "react";
import venkat from "../assets/team/venkat-kosuri.png";
import santhosh from "../assets/team/santhosh.png";
import arjun from "../assets/team/arjun.png";
import archana from "../assets/team/archana.png";
import shravya from "../assets/team/shravya.png";
import ashok from "../assets/team/ashok.png";
import lydia from "../assets/team/lydia.png";
import sakshi from "../assets/team/sakshi.png";
import sanjana from "../assets/team/sanjana.png";
import santhisenan from "../assets/team/santhisenan.png";
import kishor from "../assets/team/kishor.png";
import graham from "../assets/team/graham.png";
import sonam from "../assets/team/sonam.png";
import nikitha from "../assets/team/nikitha.png";
import shrusti from "../assets/team/shrusti.png";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      description:
        "Santosh elevates The Geek Studio to exceptional business impact for clients and creates a world-class workplace.",
      image: santhosh,
      name: "Santhosh Kumar",
      designation: "CEO",
      isHovered: false,
    },
    {
      description:
        "Arjun fosters growth, ensures compliance, and represents the company in external affairs, playing a crucial role in achieving long-term success.",
      image: arjun,
      name: "Arjun Sindhia",
      designation: "Director",
      isHovered: false,
    },
    {
      description:
        "Lydia leads revenue growth and nurtures client relationships, showcasing strategic prowess for exceptional results and industry prominence at our marketing agency.",
      image: lydia,
      name: "Lydia Acherouf",
      designation: "Head of Sales",
      isHovered: false,
    },
    {
      description:
        "Sakshi drives strategic collaborations and fosters lasting relationships for unparalleled marketing agency success worldwide.",
      image: sakshi,
      name: "Sakshi Sunil",
      designation: "Head of Global Partnerships",
      isHovered: false,
    },
    {
      description:
        "Sanjana drives engagement, optimizes performance, and cultivates a strong online community to elevate our digital presence and brand awareness.",
      image: sanjana,
      name: "Sanjana Vallabha",
      designation: "Social Media Strategist",
      isHovered: false,
    },

    {
      description:
        "Shravya orchestrates talent and efficiency, fueling our company's success with operational excellence",
      name: "Shravya",
      designation: "HR and Operations",
      image: shravya,
      isHovered: false,
    },
    {
      description:
        "Archana is an expert in optimizing organizational efficiency and talent  management and fosters a positive work culture for remarkable success and growth",
      name: "Archana",
      designation: "HR and Operations",
      image: archana,
      isHovered: false,
    },
    {
      description:
        "Venkat is an enthusiastic front-end web developer who creates seamless and visually engaging user experiences.",
      name: "Venkat Kosuri",
      designation: "Front End Developer",
      image: venkat,
      isHovered: false,
    },
    {
      description:
        "Kishor builds interactive user interfaces, ensuring seamless user experiences and cross-browser compatibility.",
      name: "Nandh Kishor",
      designation: "Back End Developer",
      image: kishor,
      isHovered: false,
    },
    {
      description:
        "Ashok elevates website rankings, boosts traffic, and fosters a strong online presence for unparalleled brand success.",
      name: "Ashok Reddy",
      designation: "SEO Specialist",
      image: ashok,
      isHovered: false,
    },
    {
      description:
        "Santhisenen is experienced in social media audits, competitor analysis, and data-driven content strategies for higher engagement and a leading industry presence.",
      name: "Santhisenen",
      designation: "Digital Marketing Specialist",
      image: santhisenan,
      isHovered: false,
    },
    {
      description:
        "Graham is a dynamic and innovative professional skilled in building brand awareness, fostering relationships, and driving a successful and lucrative company.",
      name: "Graham Rich",
      designation: "Graphic Designer",
      image: graham,
      isHovered: false,
    },
    {
      description:
        "Sonam is an experienced UX/UI Designer adept at creating user-centered designs based on business requirements and feedback.",
      name: "Sonam Patel",
      designation: "UI/UX Designer",
      image: sonam,
      isHovered: false,
    },
    {
      description:
        "Nikita excels in elevating our brand's digital presence and awareness. Her strategic approach ensures sustained growth and customer loyalty.",
      name: "Nikita Nag",
      designation: "Social Media Strategist",
      image: nikitha,
      isHovered: false,
    },
    {
      description:
        "Shristi crafts engaging, informative content for websites, blogs, and social media, aiming to resonate with the target audience and boost brand visibility.",
      name: "Shristi Nath",
      designation: "Content Writer",
      image: shrusti,
      isHovered: false,
    },
  ]);

  const handleMouseEnter = (index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].isHovered = true;
    setTeamMembers(updatedTeamMembers);
  };

  const handleMouseLeave = (index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].isHovered = false;
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <>
      <div className="bg-[#222222] py-20">
        <div className="container mx-auto px-4  bg-[#222222]">
          <div className="flex flex-col text-center md:text-start mb-6 px-2">
            <h3 className="text-3xl font-bold text-[#EF3A37] mb-3">
              [ OUR TEAM ]
            </h3>
            <h2 className="md:text-2xl text-2xl font-medium text-white mb-3 w-full  md:w-1/2">
              Our highly qualified team strives day and night to fulfill the
              varied requirements of our clients and different industries.
            </h2>
          </div>
          <div className="flex flex-wrap ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 relative overflow-hidden p-4 pb-10"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className={`w-full h-full  absolute    z-10 flex ${
                    member.isHovered
                      ? "bg-[#EF3A37CC] p-10 mobile-view w-full h-full md:w-[200px] md:rounded-[15px] md:h-[200px] md:p-5 lg:p-14 lg:w-[260px] lg:h-[260px] lg:rounded-[20px] transform translate-y-0 transition-transform duration-1000"
                      : "bg-transparent transform translate-y-full"
                  }`}
                >
                  <div className="info text-white ">
                    <p className="sm:text-[10px] md:text-[12px] lg-text[1rem]">{member.description}</p>
                  </div>
                </div>
                <img
                  src={member.image}
                  className="sm:w-full sm:h-auto z-0  mobile-view"
                  alt={member.name}
                  loading="lazy"
                />
                <div className="w-full  relative overflow-hidden  mt-4 text-center">
                  <h3 className="text-xl font-medium text-white">
                    {member.name}
                  </h3>
                  <p className="text-[1rem]  text-[#777777]">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
