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
    <div className=" flex flex-col">
      <Heading as="h3">{heading}</Heading>
      <Image file={icon.file} svg={icon.svg} fluid= {icon.fluid} alt={heading} />
    </div>
  );
};

export default IconBox;
