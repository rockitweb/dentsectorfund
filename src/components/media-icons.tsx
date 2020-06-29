/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import Image from "./utilities/image";
import FluidImage from "./interfaces/fluidImage";

export interface MediaIconsProps {
  images: FluidImage[];
}

// Render inline SVG with fallback non-svg images
const MediaIcons: React.FC<MediaIconsProps> = ({ images }) => {
  const mediaIcons = images.map((image, index) => (
    <div key={image.title} sx={{ width: "70px" }} className="overflow-hidden">
      <Image
        file={image.file}
        svg={image.svg}
        fluid={image.fluid}
        alt={image.title || "Media Image"}
        imageStyle={{ objectFit: "contain" }}
      />
    </div>
  ));

  return <div className=" flex flex-wrap overflow-hidden">{mediaIcons}</div>;
};

export default MediaIcons;
