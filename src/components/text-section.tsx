/** @jsx jsx */
import { jsx,  Styled } from "theme-ui";
import React from "react";
import SectionHeading from "./section-heading";
import MarkDown from "./utilities/markdown";
export interface CtaProps {
  heading: string;
  body: any;
}
const TextSection: React.FC<CtaProps> = ({ heading, body }) => (
  <div sx={{ variant: "layout.container.box" }}>
    <div className="flex flex-col">
    
      <SectionHeading heading={heading} description=""></SectionHeading>
      <MarkDown data={body}></MarkDown>
    </div>
  </div>
)
export default TextSection;
