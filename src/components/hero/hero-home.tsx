/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
import { ImageProps } from "../utilities/image";

import Video from "../video/video";
import { VideoData } from "../video/interfaces";
import Image from "../utilities/image";

export type HeroWiHomeProps = {
  leadMessage?: any;
  heading: any;
  message: any;
  image?: {
    gatsbyImageData: any;
  };
  video: VideoData;
};
export const HeroHome: React.FC<HeroWiHomeProps> = ({
  leadMessage,
  heading,
  message,
  video,
  image,
}) => {

return <div>hi there</div>
  return (
    <div id="hero" sx={{ position: "relative", minHeight: ["65vw", "600px"] }}>
      <div
        id="hero-content"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          overflow: "hidden",
          bg: "primary",
        }}
      >
        <section
          sx={{ variant: "hero", height: "100%" }}
          className="flex justify-between items-end"
        >
          <div className="flex flex-col h-full justify-center">
            <h2 sx={{ variant: "hero.heading" }}>{heading}</h2>
            <div
              sx={{ variant: "hero.message" }}
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </div>
          <Image
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: ["40%", null, "360px"],
              objectFit: "contain",
              objectPosition: "center top",
            }}
            gatsbyImageData={image?.gatsbyImageData}
            alt="Harry dent"
            file={{ contentType: "any", url: "" }}
          ></Image>
        </section>
      </div>
    </div>
  );
};

export default HeroHome;

/*
<section
        sx={{ variant: "hero", height: "100%"}}
        className="flex justify-between items-end"
      >
        <div className="flex flex-col h-full justify-center">
          <h2 sx={{ variant: "hero.heading"}}>{heading}</h2>
          <div
            sx={{ variant: "hero.message" }}
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: message,
            }}
          />
        </div>
        <Image
          sx={{
            width: "35%",
            height: "auto",
            objectFit: "contain",
            objectPosition: "center top",
          }}
          fluid={image?.fluid}
          alt="Harry dent"
          file={{ contentType: "any", url: "" }}
        ></Image>
      </section>

*/
