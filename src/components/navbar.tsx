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
      <div
        sx={{ variant: scrolled ? "menu.scrolled" : "menu" }}
        className="fixed z-40 w-full"
      >
        <div
          sx={{ height: ["30px", "40px", "60px"] }}
          className="pt-1 lg:pt-4 flex flex-wrap justify-end items-center"
        >
          <MenuTopNav />
        </div>
        <svg
          className="block fixed "
          version="1.1"
          viewBox="0 0 442.38 29.115"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1">
              <stop stopColor="#ffffff" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity=".4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity=".3" />
            </linearGradient>
          </defs>

          <g>
            <title>Layer 1</title>
            <g stroke="null" id="svg_1">
              <g stroke="null" strokeWidth="0.35278" id="svg_2">
                <path
                  stroke="null"
                  d="m58.64595,28.68032c-12.28411,-1.09028 -22.60083,-5.23344 -36.47289,-14.64766c-3.70039,-2.51113 -8.40123,-5.58551 -10.44621,-6.83179c-3.84794,-2.34519 -11.17394,-6.06933 -11.95086,-6.07511c-0.24344,-0.00203 -0.44263,-0.40584 -0.44263,-0.89786l0,-0.89456l444.04664,0l0,2.56479l-155.5438,-0.25335c-114.61017,-0.18667 -156.56764,-0.14704 -159.44846,0.15063c-7.66487,0.79348 -12.21685,2.79899 -20.53106,9.04613c-12.4688,9.36878 -20.69668,13.78752 -30.10198,16.16811c-6.29051,1.59166 -13.20255,2.19578 -19.11876,1.67067l0.01001,-0.00001l0,0.00001z"
                  fill={scrolled ? "#F5F7FA" : "url(#g1)"}
                  id="svg_3"
                />
              </g>
            </g>
          </g>
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

    <svg
          className="block fixed "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 445.56 30.339"
        >
          <defs>
            <linearGradient id="g1">
              <stop stopColor="#ffffff" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity=".4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity=".3" />
            </linearGradient>
          </defs>
          <g transform="translate(145.58 -154.5)">
            <g transform="translate(0 41.536)" strokeWidth=".35278">
              <path
                d="m-86.142 142.25c-12.238-1.0749-22.516-5.1596-36.336-14.441-10.107-6.7878-17.713-11.164-22.001-12.659-0.84971-0.29621-1.1059-0.59405-1.1059-1.2858v-0.9003h445.56v2.8839l-156.37-0.25075c-115.17-0.18468-157.39-0.14588-160.26 0.14726-7.6353 0.78168-12.17 2.759-20.454 8.9183-12.422 9.2366-20.619 13.593-29.989 15.94-6.2669 1.5692-13.153 2.1648-19.047 1.6471z"
                fill={scrolled ? "#ffffff" : "url(#g1)"}
              />
            </g>
          </g>
        </svg>



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
