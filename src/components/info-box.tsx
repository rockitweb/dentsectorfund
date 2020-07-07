/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";
import MarkDown from "./utilities/markdown";
import { Markdown } from "./interfaces/markdown";

export interface InfoBoxProps {
  heading: string;
  message: string | Markdown;
}

// Render inline SVG with fallback non-svg images
const InfoBox: React.FC<InfoBoxProps> = ({ heading, message }) => {
  return (
    <div className="w-1/4 flex flex-col items-center text-center">
      <div sx={{ color: "textLight", fontSize: [4, 4, 6] }}> {heading} </div>
      <MarkDown sx={{ color: "textLight", fontSize: [1, 1, 4]}} data={message}></MarkDown>
    </div>
  );
};

export default InfoBox;
