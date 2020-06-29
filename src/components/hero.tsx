/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Img from "gatsby-image";

export interface HeroProps {
  heading: string;
  message: any;
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
    <div className=" absolute top-0 w-full  h-full z-50">
      <div
        className="h-full flex flex-col justify-center"
        sx={{ variant: "hero"}}
      >
        <h2 sx={{ variant: "hero.heading" }}>{heading}</h2>
        <div
          sx={{ variant: "hero.message" }}
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: message.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </div>
);
export default Hero;

/*

*/
