/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";

export interface CtaProps {
  buttonLabel: string;
  link: string;
  ctaMessage: any;
}
const CTA: React.FC<CtaProps> = ({ buttonLabel, link, ctaMessage }) => (
  <div sx={{ variant: "gradients.gray" }}>
    <div
      sx={{ variant: "layout.container.narrow.noPadding", py:[3],  color:"textLight"  }}
      className="flex flex-wrap justify-between items-center"
    >
      <div sx={{variant:"cta"}}
        className="whitespace-pre-wrap"
        contentEditable="true"
        dangerouslySetInnerHTML={{
          __html: ctaMessage.childMarkdownRemark.html,
        }}
      />
      <Button variant="cta">{buttonLabel}</Button>
    </div>
  </div>
);
export default CTA;
