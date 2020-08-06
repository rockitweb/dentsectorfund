/** @jsx jsx */
import { jsx, Grid } from "theme-ui";

import React from "react";
import Image from "./utilities/image";
import FluidImage from "./interfaces/fluidImage";

export interface MediaIconsProps {
  mediaLogos: FluidImage[];
  image: FluidImage;
}

// Render inline SVG with fallback non-svg images
const MediaIcons: React.FC<MediaIconsProps> = ({ mediaLogos, image }) => {
  let mediaImage;
  if (1 === 3) {
    mediaImage = (
      <Image
        file={image.file}
        svg={image.svg}
        fluid={image.fluid}
        alt={image.title || "Media Image"}
        imageStyle={{ objectFit: "none", objectPosition: "50% 50%" }}
        sx={{ height: "160px" }}
      />
    );
  } else {
    mediaImage = mediaLogos.map((image, index) => (
      <div
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          key={`${image.title}-${index}`}
          sx={{
            width: "120px",
          }}
          className="overflow-hidden"
        >
          <Image
            file={image.file}
            svg={image.svg}
            fluid={image.fluid}
            alt={image.title || "Media Image"}
            imageStyle={{ objectFit: "contain" }}
            sx={{ height: "70px" }}
          />
        </div>
      </div>
    ));
  }

  return (
    <Grid  sx={{py:3, justifyContent:"center"}} gap={2} columns={"repeat(7, minmax(180px,1fr))"}>
      {mediaImage}
    </Grid>
  );
};

export default MediaIcons;
