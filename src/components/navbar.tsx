/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import { useState, useEffect } from "react";
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
    <div>
      <div className="fixed  z-40  w-full">
       
          <svg
            sx={{ height: ["100%", "100%", "100%"] }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1704 204"
          >
            <defs>
              <linearGradient id="g1">
                <stop stopColor="#ffffff" />
                <stop offset=".2" stopColor="#ffffff" stopOpacity=".4" />
                <stop offset="1" stopColor="#ffffff" stopOpacity=".3" />
              </linearGradient>
            </defs>
            <path
              d="M1702.625 150.9V97.778l-399-.888c-560.1-1.246-799.2-1.102-814.33.49-6.964.733-16.264 2.286-20.667 3.45-14.4 3.81-33.643 14.374-54.672 30.032-55.223 41.12-91.125 58.17-137.33 65.23-16.664 2.546-49.287 1.933-67.333-1.264-39.925-7.074-72.263-21.34-118-52.054-41.094-27.597-74.9-46.602-87-48.9l-4.333-.826V.001h1704v102l-.667 102c-.367 0-.667-23.9-.667-53.112z"
              fill={scrolled ? "url(#g1)" : "url(#g1)"}
            />
          </svg>
       
      </div>
      <div className="fixed z-50 w-full">
        <div className="px-5 flex flex-wrap justify-between items-center">
          <img
            sx={{
              width: ["20%", "20vw", "20vw"],
              marginLeft: ["0px", "2vw", "2vw"],
              marginTop: ["1vw", "1vw", "1vw"],
            }}
            src={logo}
            alt="Logo"
          />

          <MenuTopNav />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/*
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
