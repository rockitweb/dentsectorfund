/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";

export interface HtmlProps {}
// Render inline SVG with fallback non-svg images
const Html: React.FC = ({ children }) => {
  return (
    <div
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{
        __html: children as string,
      }}
    />
  );
};

export default Html;
