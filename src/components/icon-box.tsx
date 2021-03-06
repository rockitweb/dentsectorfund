/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import Image from "./utilities/image"
import { Markdown } from "./interfaces/markdown";
import MarkDown from "./utilities/markdown";

export interface IconBoxProps {
  heading:  string | Markdown;
  icon:any;
}

// Render inline SVG with fallback non-svg images
const IconBox: React.FC<IconBoxProps> = ({ heading, icon }) => {
  return (
    <div className="  flex flex-col justify-center items-center">
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
        <MarkDown data ={heading}></MarkDown>
      </div>
    </div>
  );
};

export default IconBox;
