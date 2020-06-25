/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Img from "gatsby-image";

export interface HeroProps {
  heading: string;
  message: string;
  backgroundImage: {
    fluid: any;
  };
}

const Hero: React.FC<HeroProps> = ({ heading, message, backgroundImage }) => (
  <div className="relative">
    <Img
      sx={{ variat: "hero.image" }}
      alt={heading}
      fluid={backgroundImage.fluid}
    />
    <div className=" absolute top-0 w-full justify-center items-center  h-full flex content-center">
      <div className="container px-5">
        <h2 sx={{ variant: "hero.heading" }}>{heading}</h2>
        <p>{message}</p>
        <p></p>
      </div>
    </div>
  </div>
);
export default Hero;
