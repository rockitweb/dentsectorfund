/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import React from "react";
export interface CtaProps {
  heading: string;
  body: any;
}
const TextSection: React.FC<CtaProps> = ({ heading, body }) => (
  <div className="flex flex-col">
    <Heading as="h3">{heading}</Heading>
    <div
      className="whitespace-pre-wrap"
      contentEditable="true"
      dangerouslySetInnerHTML={{
        __html: body.childMarkdownRemark.html,
      }}
    />
  </div>
);
export default TextSection;
