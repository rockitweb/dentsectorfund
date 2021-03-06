/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";

export interface CtaProps {
  buttonLabel: string;
  link: string;
  ctaMessage: any;
}
const html = ""; //ctaMessage.childMarkdownRemark.html,

const CTA: React.FC<CtaProps> = ({ buttonLabel, link, ctaMessage }) => (
  <div sx={{ variant: "gradients.gray" }}>
    <div
      sx={{
        variant: "layout.container.narrow",
        py: [3],
        px: [4, 4, 0],
        color: "textLight",
      }}
      className="flex flex-wrap flex-col text-center lg:text-left lg:flex-row lg:justify-between  items-center"
    >
      {html === "" && (
        <div
          sx={{ variant: "cta" }}
          className="whitespace-pre-wrap"
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}
      <a
        sx={{ variant: "buttons.cta" }}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        {buttonLabel}
      </a>
    </div>
  </div>
);
export default CTA;
