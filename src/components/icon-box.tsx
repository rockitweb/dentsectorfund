/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import Image from "./utilities/image"

export interface IconBoxProps {
  heading: string;
  icon:any;
}

// Render inline SVG with fallback non-svg images
const IconBox: React.FC<IconBoxProps> = ({ heading, icon }) => {
  return (
    <div className="w-1/4  flex flex-col justify-center items-center">
      <Image
        styles={{
          width: ["50px", "50px", "70px"],
          height: ["50px", "50px", "70px"],
        }}
        file={icon.file}
        svg={icon.svg}
        fluid={icon.fluid}
        alt={heading}
      />
      <div
        sx={{
          color: "textLight",
          textAlign: "center",
          fontSize: [2, 2, 4],
          pt: [3, 2, 2],
        }}
      >
        {heading}
      </div>
    </div>
  );
};

export default IconBox;
