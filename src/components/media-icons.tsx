/** @jsx jsx */
import { jsx, Grid } from "theme-ui";

import React from "react";
import Image from "./utilities/image";
import FluidImage from "./interfaces/fluidImage";

export interface MediaIconsProps {
  mediaLogos: { gastsbyImageData: any }[];
  image: FluidImage;
}

// Render inline SVG with fallback non-svg images
const MediaIcons: React.FC<MediaIconsProps> = ({ mediaLogos, image }) => {
  let mediaImage;

    mediaImage = mediaLogos.map((image, index) => (
      <div
        key={`${image.title}-${index}`}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          sx={{
            width: "70px",
          }}
          className="overflow-hidden"
        >
          <Image
            file={image.file}
            svg={image.svg}
            gatsbyImageData={image.gatsbyImageData}
            alt={image.title || "Media Image"}
            imageStyle={{ objectFit: "contain" }}
            sx={{ height: "70px" }}
          />
        </div>
      </div>
    ));


  return (
    <Grid
      sx={{ py: 3, justifyContent: "center" }}
      gap={2}
      columns={`repeat(auto-fit, 70px)`}
    >
      {mediaImage}
    </Grid>
  );
};

export default MediaIcons;
