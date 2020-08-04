/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import { useState, useEffect, Fragment } from "react";
import MenuTopNav from "../components/menu-top";

import logo from "../assets/images/logo_bigger.png";

//const Nav: React.FC<Props> = ({ theme }) =>
type Props = {};

const NavBar: React.FC<Props> = (props) => {
  //const [isExpanded, toggleExpansion] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Fragment>
      <div sx={{ variant: "menu" }} className="fixed z-40 w-full">
        <div
          sx={{ height: ["22px", "40px", "60px"]}}
          className="pt-1 lg:pt-4 flex flex-wrap justify-end items-center"
        >
          <MenuTopNav />
        </div>
        <svg
          className="block fixed "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1690 118.67"
        >
          <defs>
            <linearGradient id="g1">
              <stop stopColor="#ffffff" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity=".4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity=".3" />
            </linearGradient>
          </defs>
          <path
            d="M0 63.855V9.044l3.667.89c6.154 1.492 32.2 14.443 47 23.38 7.7 4.646 25.4 16.103 39.333 25.46 58.697 39.42 101.4 54.634 154 54.86 58.438.25 101.6-16.84 168.67-66.77 21.03-15.658 40.262-26.223 54.672-30.032 4.403-1.164 13.703-2.716 20.667-3.45 15.12-1.592 261.17-1.74 811.66-.49l391 .888v104.9H-.03z"
            fill="#ffffff"
            fillOpacity="0"
          />
          <path
            d="M227.33 113.35c-46.254-4.063-85.1-19.5-137.33-54.58C50.2 32.043 20.178 14.955 5.06 10.426.514 9.064 0 8.457 0 4.454V-.001h1690.7v13.57l-593-.95c-436.7-.7-596.87-.553-607.7.555-28.857 2.954-45.998 10.427-77.306 33.706-46.95 34.9-77.93 51.376-113.35 60.244-23.686 5.93-49.713 8.182-71.988 6.225z"
            fill="url(#g1)"
          />
        </svg>
        <img
          sx={{
            position: "absolute",
            top: "5px",
            left: "5%",

            width: ["18vw", "17vw", "17vw"],

            height: "auto",
          }}
          className=" z-50"
          src={logo}
          alt="Logo"
        />
      </div>
    </Fragment>
  );
};

export default NavBar;

/*
sx={{ height: ["40px", "40px", "70px"] }}
 sx={{
              width: ["20%", "20vw", "20vw"],
              marginLeft: ["0px", "2vw", "2vw"],
              marginTop: ["1vw", "1vw", "1vw"],
            }}
    <div
        sx={{ backgroundColor: "rgba(0, 0, 0, .3)", height: "70px" }}
        className="fixed  z-40  w-full"
      >
        
      </div>

      <header className="w-full z-50 fixed flex flex-wrap justify-between items-center">
        <div className="container  px-5 mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center flex-shrink-0 mr-6 pt-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <MenuTopNav />
        </div>
      </header>
*/

/*

    <div
      className="relative"
      style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}
    >
      <header
        {...props}
        sx={{ variant: scrolled ? "header.scrolled" : "header" }}
        className="py-4  sticky z-50 top-0 flex flex-wrap justify-between items-center"
      >
        <div className="container px-5 mx-auto flex flex-wrap justify-between items-center">
          <div className="relative flex items-center flex-shrink-0 mr-6">
            <Link to="/" className="flex items-center">
              <img sx={{ marginBottom: "-40px" }} src={logo} alt="Logo" />
            </Link>
          </div>
          <MenuTopNav />
        </div>
      </header>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="497.33" height="108">
          <path d="M228.67 106.68c-46.254-4.063-85.1-19.5-137.33-54.58-41.094-27.597-74.9-46.602-87-48.9C1.957 2.736.007 1.83.007 1.18c0-.687 104.54-1.185 248.67-1.185h248.67V3.13c0 2.95-.61 3.185-10.333 3.965-23.252 1.865-43.05 10.846-73 33.115-46.95 34.9-77.93 51.376-113.35 60.244-23.686 5.93-49.713 8.182-71.988 6.225z" />
        </svg>
      </div>
    </div>
*/
