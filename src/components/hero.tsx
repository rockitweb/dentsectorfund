/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Img from "gatsby-image";
import Image from "./utilities/image";
import BackgroundImage from "gatsby-background-image";
import { VideoData } from "./video/interfaces";
import HeroHome from "./hero/hero-home";
import { isBlock } from "typescript";
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

  ctaPrimary: {
    label: string;
    externalLink: string;
    target: string;
  };
  ctaSecondary: {
    label: string;
    internalLink: string;
    target: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  heading,
  message,
  backgroundImage,
  backgroundVideo,
  image,
  ctaPrimary,
  ctaSecondary
}) => {
  const msg = message ? message.childMarkdownRemark.html : "";

  let elementPrimaryCTA;
  let elementSecondaryCTA;
  if (ctaPrimary) {
    elementPrimaryCTA = (
      <a
        sx={{
          variant: "buttons.cta",
          display: "block",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
        href={ctaPrimary.externalLink || "/"}
        target={ctaPrimary.target}
      >
        {ctaPrimary.label}
      </a>
    );
  }
  if (ctaSecondary){
    elementSecondaryCTA = (
      <a
        sx={{
          variant: "buttons.cta.secondary",
          display: "block",
         
          width: "100%",
          textAlign:"center"
        }}
        href={ctaSecondary.internalLink || "/"}
        target={ctaSecondary.target}
      >
        {ctaSecondary.label}
      </a>
    );
  }


  if (backgroundVideo) {
    return (
      <HeroHome
        sx={{ width: "100%" }}
        heading={heading}
        message={msg}
        video={backgroundVideo}
        image={image}
      ></HeroHome>
    );
  } else {
    return (
      <div sx={{ minHeight: ["65vw", "600px"] }}>
        <BackgroundImage
          sx={{
            height: ["60vh"],
            minHeight: ["65vw", "600px"],
            maxHeight: "600px",
            backgroundColor: "primary",
            backgroundPosition: "center center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
          Tag="section"
          alt={heading}
          fluid={backgroundImage?.fluid}
        >
          <section
            sx={{ variant: "hero", height: "100%" }}
            className="flex flex-col md:flex-row justify-between items-center md:items-center"
          >
            <div className="flex flex-col justify-start md:justify-center">
              <h2
                sx={{
                  variant: "hero.heading",
                  textAlign: ["center", "left"],
                }}
              >
                {heading}
              </h2>
              <div
                sx={{
                  variant: "hero.message",
                  textAlign: ["center", "left"],
                }}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: msg,
                }}
              ></div>
              <div sx={{display:"flex",justifyContent:"flex-start" }}>
                <div sx={{ pt: 4, pr:2, width:["40%"]}}>{elementPrimaryCTA}</div>
                <div sx={{ pt: 4,width:["40%"] }}>{elementSecondaryCTA}</div>
              </div>
            </div>
            <div
              sx={{
                width: ["100%", "50%"],
                height: ["100%"],
                display: "flex",
                alignItems: "flex-end",
                justifyContent: ["center", "flex-end"],
              }}
            >
              <Image
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: ["45%", null, "300px"],
                  objectFit: "contain",
                  objectPosition: "center top",
                }}
                fluid={image?.fluid}
                alt="Harry dent"
                file={{ contentType: "any", url: "" }}
              ></Image>
            </div>
          </section>
        </BackgroundImage>
      </div>
    );
  }
};
export default Hero;

/*

*/
