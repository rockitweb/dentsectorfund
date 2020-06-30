/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";

export interface InfoBoxProps {
  heading: string;
  message: string;
}

// Render inline SVG with fallback non-svg images
const InfoBox: React.FC<InfoBoxProps> = ({ heading, message }) => {
  return (
    <div className="w-1/4 flex flex-col items-center text-center">
      <div sx={{ color: "textLight", fontSize: [4, 4, 6] }}> {heading} </div>
      <div
        sx={{ color: "textLight", fontSize: [1, 1, 4] }}
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </div>
  );
};

export default InfoBox;
