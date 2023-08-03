import React from "react";
import banner from "../assets/banner.jpg";
import customer1 from "../assets/customer/customer1.png";
import customer2 from "../assets/customer/customer2.png";
import customer3 from "../assets/customer/customer3.png";
import customer4 from "../assets/customer/customer4.png";
import customer5 from "../assets/customer/customer5.png";
import customer6 from "../assets/customer/customer6.png";
import customer7 from "../assets/customer/customer7.png";
import customer8 from "../assets/customer/customer8.png";
import customer9 from "../assets/customer/customer9.png";
import customer10 from "../assets/customer/customer10.png";
import customer11 from "../assets/customer/customer11.png";
import customer12 from "../assets/customer/customer12.png";
import customerrete from "../assets/customer/Customer-Retention.jpg";
import customerbig from "../assets/customer/Customer-retentionbig.jpg";
import BeautifulCity from "./BeautifulCity";

const CustomRetention = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[450px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container md:text-start text-center  h-full px-4 mx-auto flex flex-col justify-center md:items-start items-center ">
          <div className="md:text-start text-center  mb-6">
            <h6 className="text-2xl  font-bold text-[#EF3A37] mb-3">
              [ SERVICES ]
            </h6>
            <h1 className="md:text-5xl text-3xl font-extrabold text-[#fff]">
              Customer Retention
            </h1>
          </div>
        </div>
      </div>

      <div className=" container-fluid mx-auto ">
        <div className="container-fluid mx-auto ">
          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto sm:items-center md:h-screen justify-center flex flex-wrap">
              <div className="w-full md:w-1/2 ">
                <img
                  src={`${customerrete}`}
                  alt=""
                  class="object-cover w-full md:h-screen"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-1/2">
                <div className="p-4 border-b md:border-b-0 md:pl-5 border-[#222222] border-opacity-25 border-r-none  h-full lg:pr-48 ">
                  <h1 className="text-[16px] font-bold mb-4 text-[#EF3A37]">
                    [ BUILT ON THE FOUNDATION ]
                  </h1>
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    Customer Retention
                  </h1>
                  <p className="md:mb-1 lg:mb-5  text-[#222222]">
                    The Geek Studio is aware of the crucial role that client
                    retention plays in the long-term success of your company.
                    Our customer-centric approach places a strong emphasis on
                    developing tactics that will help you establish and maintain
                    enduring relationships with your cherished clients. We think
                    that keeping current clients is equally as crucial as
                    gaining new ones. To assess your customer base, comprehend
                    their demands, and create individualized retention
                    strategies that keep them interested in and committed to
                    your business, our team of professionals works together with
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mx-auto">
            <div className="container-fluid mx-auto sm:items-center md:h-screen justify-center flex flex-wrap">
              <div className="w-full md:w-1/2 ">
                <div className="border-b md:border-b-0 text-[#222222] p-4 sm:pl-20   lg:pl-40  border-r-none md:border-r">
                  <h1 className="text-3xl font-medium mb-4 text-[#222222]">
                    What We Offer
                  </h1>
                  <p className="lg:mb-8 md:mb-1  text-[#222222]">
                    We assist you in providing great experiences that surpass
                    the expectations of your customers through our complete
                    customer retention solutions. We use data-driven insights to
                    better understand consumer behavior, preferences, and pain
                    areas, which enables us to develop audience-relevant
                    retention programs.
                  </p>
                  <ul className="list-disc list-inside lg:mt-4 mt-1">
                    <li>Mobile Loyalty</li>
                    <li>Payment Reminders</li>
                    <li>Proactive Notifications</li>
                    <li>Self-service transactions</li>
                    <li>Welcome Messages</li>
                    <li>Surveys</li>
                    <li>Reminders and Confirmations</li>
                    <li>QR Code Marketing</li>
                    <li>Affiliate Marketing</li>
                    <li>Mobile Deals</li>
                    <li>Coupon Deals</li>
                    <li>SMS Contests</li>
                    <li>SMS Marketing</li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:h-screen md:w-1/2 ">
                <img
                  src={`${customerbig}`}
                  alt=""
                  class="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222] py-5 md:py-14">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-medium text-white  mb-10">
            Our customer Retention Services
          </h3>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-28 h-28  md:mr-10 mb-5 sm:mb-0">
              <img src={`${customer1}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white  ">
                Mobile Loyalty
              </h3>
              <p className="text-white">
                Implementing a mobile loyalty program will help you increase
                client retention by rewarding users for their ongoing
                participation and purchases, encouraging repeat business, and
                cultivating a sense of loyalty.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-28 h-28  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${customer2}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Payment Reminders
              </h3>
              <p className="text-white">
                Sending timely payment reminders via mobile channels can help
                you lower churn and increase customer retention by ensuring that
                consumers keep on top of their payment commitments and prevent
                service interruptions.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-28 h-28  md:mr-12 mb-5 sm:mb-0 ">
              <img src={`${customer3}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Proactive Notifications
              </h3>
              <p className="text-white">
                Sending proactive notifications about new product releases,
                upcoming events, or customized offers will keep customers
                informed and involved while fostering a sense of exclusivity
                that will encourage continuous interest.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-12 mb-5 sm:mb-0 ">
              <img src={`${customer4}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Self-service Payments
              </h3>
              <p className="text-white">
                Providing clients with the ease of self-service payments via
                mobile apps or online platforms would enable them to manage
                their accounts on their terms and make payments with ease.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="w-28 h-28  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${customer5}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Welcome Messages
              </h3>
              <p className="text-white">
                Sending personalized welcome messages to new clients, expressing
                thanks and include pertinent information about your goods or
                services will help you make a good first impression and
                establish the foundation for a long-lasting relationship.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-32 md:h-32 h-22 w-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${customer6}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Surveys
              </h3>
              <p className="text-white">
                Implementing smartphone surveys will help you learn important
                information about customer satisfaction and pinpoint areas that
                need to be improved. Customers will feel heard and able to give
                feedback, enhancing their relationship with your business.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${customer7}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Reminders and Confirmations
              </h3>
              <p className="text-white">
                Sending reminders and confirmations via mobile channels will
                improve customer experience and lower no-shows or missed
                appointments by ensuring that consumers remain involved and
                informed.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${customer8}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                QR Code Campaigns
              </h3>
              <p className="text-white">
                Use interactive experiences to create excitement and increase
                client retention by implementing mobile QR code campaigns to
                offer customers special deals, discounts, or further
                information.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${customer9}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Mobile Offers
              </h3>
              <p className="text-white">
                Delivering customized mobile offers and promotions right to
                customer’s smartphones will increase their sense of exclusivity,
                encourage them to make additional purchases, and increase their
                loyalty and retention.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${customer10}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                Coupon Offers
              </h3>
              <p className="text-white">
                Utilize mobile coupon offers to engage and reward clients by
                offering discounts or exclusive deals. This will promote repeat
                business and foster a sense of value and appreciation.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-8 mb-5 sm:mb-0 ">
              <img src={`${customer11}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                SMS Contests
              </h3>
              <p className="text-white">
                Create a fun and engaging experience that keeps customers
                engaged to your business and improves retention by running
                interactive SMS contests to drive client participation and
                engagement.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-start md:flex-row mb-10 md:justify-start justify-center">
            <div className="md:w-24 md:h-24 h-22 w-22  md:mr-10 mb-5 sm:mb-0 ">
              <img src={`${customer12}`} alt="Digital Marketing Image" />
            </div>

            <div className="md:text-start text-center mb-5">
              <h3 className="text-2xl font-medium text-white mb-2  ">
                SMS Campaigns
              </h3>
              <p className="text-white">
                Utilize SMS marketing campaigns to send customised and targeted
                messages, updates, or offers to client’s mobile devices. This
                will keep your business top-of- mind and encourage ongoing
                involvement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeautifulCity />
    </>
  );
};

export default CustomRetention;
