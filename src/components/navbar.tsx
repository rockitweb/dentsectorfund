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
    <div sx={{ variant: "menu" }} className="fixed z-50 w-full">
      <div className="px-5 flex flex-wrap justify-between items-center">
        <img sx={{ variant: "menu.logo" }} src={logo} alt="Logo" />

        <MenuTopNav />
      </div>
    
    </div>
  );
};

export default NavBar;

/*
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
