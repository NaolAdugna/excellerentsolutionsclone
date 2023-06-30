//React Family
import { React, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
//Image Family
import NavbarImage from "../images/logo/navlogo.png";
import FooterImage from "../images/logo/footerlogo.png";
//CSS Family
import "./RootLayout.css";
//Data
import NavBarData from "../Data/Data";
import Data from "../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const navBarLinks = document.querySelector("#navBarLinks");
  let handleOpen = () => {
    setIsOpen((prev) => !prev);
    navBarLinks.classList.toggle("active");
  };
  return (
    <div className="rootLayoutContainer">
      <header>
        <NavLink to="/">
          <img src={NavbarImage} alt="NavbarLogo" />
        </NavLink>
        <nav id="navBarLinks">
          {NavBarData.NavBarData.map((item) => {
            return (
              <NavLink to={item.url} key={item.id}>
                {" "}
                {item.title}{" "}
              </NavLink>
            );
          })}
        </nav>
        <FontAwesomeIcon
          onClick={handleOpen}
          icon={isOpen ? faXmark : faBars}
          className="navBarHambuger"
        />
      </header>
      <Outlet />
      {/* Footer Start */}
      <footer className="footerContainer">
        <div className="footerHeader">
          <img src={FooterImage} alt="logo" />
          <p>
            Excellerent is a global consulting company offering end-to-end
            services and solutions on Open Source, Cloud, API, and Automation
            technologies. <br /> By leveraging flexible project engagement
            models, agile methodologies, and the finest talent in the market, we
            improve operational efficiency and cost optimization to deliver
            business value.
          </p>
        </div>
        <main className="footerMain">
          <div className="footerMainHeader">
            <div className="footerMainLinks headerLink">
              <h2>ABOUT US</h2>
              {Data.FooterData1.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>

            <div className="footerMainLinks headerLink" id="footerService">
              <h2>SERVICES</h2>
              {Data.FooterData2.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>

            <div className="footerMainLinks">
              <h2>RESOURCES</h2>
              {Data.FooterData3.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="footerMainBottom">
            <div className="footerMainLinks ">
              <h2>CAREERS</h2>
              {Data.FooterData4.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>

            <div className="footerMainLinks bottomLink">
              <h2>CONTACT US</h2>
              {Data.FooterData5.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>

            <div className="footerMainLinks">
              <h2>COMMUNITY OUTREACH</h2>
              {Data.FooterData6.map((item) => {
                return (
                  <NavLink to={item.url} key={item.id}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </main>
      </footer>
      {/* Footer Ends */}
      <div className="copyRightContainer">
        <hr />
        <span className="copyRightData">
          <p>
            Copyright © 2022. Excellerent Technology Solutions. All rights
            reserved.
          </p>
          <span className="iconContainer">
            <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
            <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
          </span>
        </span>
        <em style={{ color: "rgba(0,0,0,.8)" }}>
          Powered by Excellerent product Design Team
        </em>
      </div>
    </div>
  );
}
