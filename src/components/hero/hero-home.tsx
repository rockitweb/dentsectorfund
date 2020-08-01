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
    fluid: any;
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
  return (
    <Video
      video={video}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
      }}
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
            __html: message,
          }}
        />
      </div>
      <Image
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center top",
        }}
        fluid={image?.fluid}
        alt="Harry dent"
      ></Image>
    </Video>
  );
};

export default HeroHome;
