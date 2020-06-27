/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
export interface CtaProps {
  buttonLabel: string;
  link: string;
  ctaMessage: any;
}
const CTA: React.FC<CtaProps> = ({ buttonLabel, link, ctaMessage }) => (
  <div sx={{variant:"layout.container.narrow"}} className="flex container mx-auto">
    <div
      className="whitespace-pre-wrap"
      contentEditable="true"
      dangerouslySetInnerHTML={{
        __html: ctaMessage.childMarkdownRemark.html,
      }}
    />
    <Button>{buttonLabel}</Button>
  </div>
);
export default CTA;
