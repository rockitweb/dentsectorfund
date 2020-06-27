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
    <div className=" flex flex-col">
      <div> {heading} </div>
      <div
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </div>
  );
};

export default InfoBox;
