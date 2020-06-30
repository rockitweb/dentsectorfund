/** @jsx jsx */
import { jsx,  Styled } from "theme-ui";
import React from "react";
export interface CtaProps {
  heading: string;
  body: any;
}
const TextSection: React.FC<CtaProps> = ({ heading, body }) => (
  <div sx={{ variant: "layout.container.narrow" }}>
    <div className="flex flex-col">
    
      <Styled.h2>
        {heading}
      </Styled.h2>
      <div
        className="whitespace-pre-wrap"
        contentEditable="true"
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
);
export default TextSection;
