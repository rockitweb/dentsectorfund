/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { VideoData } from "./video/interfaces";
import HeroHome from "./hero/hero-home";
export interface HeroProps {
  heading: any;
  message: any;
  backgroundImage?: {
    fluid: any;
  };
  backgroundVideo: VideoData;
  image?: {
    fluid: any;
  };
}

const Hero: React.FC<HeroProps> = ({
  heading,
  message,
  backgroundImage,
  backgroundVideo,
  image
}) => {
  console.log("in hero");
  const msg = message ? message.childMarkdownRemark.html : "";

  if (backgroundVideo) {
    return (
      <HeroHome
        sx={{ width: "100%", }}
        heading={heading}
        message={msg}
        video={backgroundVideo}
        image={image}
      ></HeroHome>
    );
  } else {
    return (
      <BackgroundImage
        sx={{
          height: ["60vh"],
          maxHeight:"600px",
          backgroundColor: "primary",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
        }}
        Tag="section"
        alt={heading}
        fluid={backgroundImage?.fluid}
      >
        <div
          className="h-full flex flex-col justify-center"
          sx={{ variant: "hero" }}
        >
          <h2 sx={{ variant: "hero.heading" }}>{heading}</h2>
          <div
            sx={{ variant: "hero.message" }}
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: msg,
            }}
          />
        </div>
      </BackgroundImage>
    );
  }
};
export default Hero;

/*

*/
