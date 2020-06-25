/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import { useState, useEffect } from "react";
import MenuTopNav from "../components/menu-top";

//const Nav: React.FC<Props> = ({ theme }) =>
type Props = { siteTitle: string };

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
    <header
      {...props}
      sx={{ variant: scrolled ? "header.scrolled" : "header" }}
      className="bg-white sticky z-50 top-0 flex flex-wrap justify-between items-center"
    >
      <div className="container px-5 mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="flex items-center">
            Logo
          </Link>
        </div>
        <MenuTopNav />
      </div>
    </header>
  );
};

export default NavBar;
