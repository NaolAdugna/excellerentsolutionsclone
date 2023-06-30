//React Family
import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";

//Css Family
import "./Home.css";
import "swiper/swiper-bundle.min.css";
//Data Family
import Data from "../Data/Data";
//Image Family
import ClientImage1 from "../images/pic/client1.png";
import ClientImage2 from "../images/pic/client2.png";
import ClientImage3 from "../images/pic/client3.png";
import ClientImage4 from "../images/pic/client4.png";
import ClientImage5 from "../images/pic/client5.png";
import ClientImage6 from "../images/pic/client6.png";
import ClientImage7 from "../images/pic/client7.png";
import ClientImage8 from "../images/pic/client8.png";
import ClientImage9 from "../images/pic/client9.png";
import ClientImage10 from "../images/pic/client10.png";
import WorkWithUsImage from "../images/pic/workwithus.jpg";
import DifferenceImage from "../images/pic/whatmakesdifferent.jpg";

export default function Home() {
  const [counterOn, setCounterOn] = React.useState(false);

  return (
    <div className="homeContainer">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        loop={true}
        grabCursor={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {Data.HomeData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {" "}
              <img src={item.url} alt="logo" className="homeImage" />{" "}
              <div className="homeContent">
                <h3> {item.title} </h3>
                <h1> {item.subtitle} </h1>
                <p> {item.description} </p>
                <button> {item.button} </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <main>
        {/* Difference Start */}
        <div className="differenceContainer">
          <img src={DifferenceImage} alt="What makes us different" />
          <div className="differenceText">
            <h2>
              What Makes Us <span>Different?</span>
            </h2>
            <p>
              Excellerent as a supporter of the UN Sustainable Development Goals
              has made a conscious decision to invest in a viable but
              historically underdeveloped country in Ethiopia to help develop
              local capacity, create technology jobs, and encourage higher
              education in technology while providing cost-effective solutions
              to our global clients at the uncompromised level of quality.{" "}
              <br /> <br /> We create value for the businesses we serve on two
              fronts, viz. solutions driven by Design Thinking and by
              application of new technologies and business models to improve
              customer experience and achieve operational resilience. <br />{" "}
              <br /> Customer-centricity central theme of everything we do and
              we leverage our expertise in futuristic innovations offering
              future-proof solutions that helps business balance digital
              transformation with sustainability.
            </p>
          </div>
        </div>
        {/* Difference Ends */}
        {/* Clients Start */}
        <div className="clientsContainer">
          <h2>We Have Multiple Clients</h2>
          <h1>
            Across Verticals Who Look to us to Deliver Best-in-Class Industry
            Solutions.
          </h1>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              641: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <img
                src={ClientImage1}
                alt="logo"
                className="clientsImage"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={ClientImage2}
                alt="logo"
                className="clientsImage"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={ClientImage3}
                alt="logo"
                className="clientsImage"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={ClientImage4}
                alt="logo"
                className="clientsImage"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={ClientImage5}
                alt="logo"
                className="clientsImage"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ClientImage6} alt="logo" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ClientImage7} alt="logo" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ClientImage8} alt="logo" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ClientImage9} alt="logo" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ClientImage10} alt="logo" />{" "}
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Clients Ends */}

        {/* Services Start */}
        <div className="serviceContainer">
          <h2>
            {" "}
            A Wide Range of <span> Services & Solution </span>{" "}
          </h2>
          <div className="serviceContent">
            {Data.ServiceData.map((item) => {
              return (
                <div className="serviceData" key={item.id}>
                  <img src={item.url} alt="logo" />
                  <h3> {item.title} </h3>
                  <div className="serviceText">
                    <h1> {item.descriptionTitle} </h1>
                    <strong> {item.description} </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Services Ends */}
        {/* Work Place Starts */}
        <div className="workPlaceContainer">
          <div className="workPlaceHeader">
            <h1>
              {" "}
              Take look at{" "}
              <span>Excellerent Center Across US,Ethiopia & India.</span>{" "}
            </h1>
            <p>
              Our modern workplace design fosters team productivity and
              collaboration. Access to the right tools improves the performance
              of our pool of highly skilled talent specializing in Agile
              methodology, AI, data analytics, and DevOps practices. Modern and
              informal workspaces facilitate team collaboration, accelerates
              team learning, and maximizes information sharing. Additionally,
              the application of ergonomic design supports overall employee
              health and wellbeing. <br />
              Even though we work on different time zones with thousands of
              kilometers between us, we’re all one team with shared goals, and
              it shows.
            </p>
          </div>
          <div className="workPlaceMain">
            {Data.WorkData.map((item) => {
              return (
                <>
                  <img
                    src={item.url}
                    alt="logo"
                    key={item.id}
                    className="workPlaceImage"
                  />
                </>
              );
            })}
          </div>
          <div className="workPlaceFooter">
            <h1>
              Some Count <span>that Matters</span>{" "}
            </h1>
            <p>
              We brings the best mind and talent to successfully drive product
              and service innovations and transform experience
            </p>
          </div>
          <div className="workPlaceCountContainer">
            {Data.CountData.map((item) => {
              return (
                <div className="workPlaceData" key={item.id}>
                  <img src={item.url} alt="logo" />
                  <span>
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={item.dataValue}
                          delay={0}
                          className="counterNumber"
                        >
                          <h3 className="counterNumber"> {item.value} </h3>
                        </CountUp>
                      )}{" "}
                    </ScrollTrigger>
                    <h4> {item.title} </h4>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Work Plcae Ends */}
        {/* Work With Us Start */}
        <div className="workWithUs">
          <h2 className="workWithUsTitle">
            {" "}
            What You Get From <strong>Working With Us</strong>{" "}
          </h2>
          <div className="workWithUsContent">
            <div className="work">
              {Data.WorkWitUsData.map((item) => {
                return (
                  <div className="worKWithUsData">
                    <img src={item.url} alt="logo" />
                    <h3> {item.title} </h3>
                    <p> {item.description} </p>
                  </div>
                );
              })}
              <button>Get in touch</button>
            </div>
            <img src={WorkWithUsImage} alt="logo" className="workWithUsImage" />
          </div>
        </div>
        {/* Work With Us End */}
        {/* Join Us Start */}
        <div className="joinContainer">
          <div className="joinHeader">
            <h2>
              {" "}
              We are Excellers, <strong>Join Us</strong>{" "}
            </h2>
            <p>
              {" "}
              We align our purpose,brand and work culture to create a holistic
              transformation journey for all association.Whether you need to
              advance your skills or accelerate career growth Excellerent can
              get you there.{" "}
            </p>
          </div>
          <main className="joinMain">
            {Data.JoinData.map((item) => {
              return (
                <div className="joinData" key={item.id}>
                  <img src={item.url} alt="logo" />
                  <h2> {item.title} </h2>
                  <p> {item.description} </p>
                </div>
              );
            })}
            <button>Join The Team</button>
          </main>
        </div>
        {/* Join US Ends */}
      </main>
    </div>
  );
}
