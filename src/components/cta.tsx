/** @jsx jsx */
import { jsx, Button, Flex, Box } from "theme-ui";
import React from "react";

export interface CtaProps {
  buttonLabel: string;
  link: string;
  ctaMessage: any;
}


const CTA: React.FC<CtaProps> = ({ buttonLabel, link, ctaMessage }) => {
  const html = ctaMessage.childMarkdownRemark.html;
  return (


  <div sx={{ variant: "gradients.gray" }}>
    <div
      sx={{
        variant: "layout.container.box",
        py: [3],
        px: [4, 4, 0],
        color: "textLight",
      }}
      //className="flex flex-wrap flex-row text-center lg:text-left lg:flex-row lg:justify-between  items-center"
    >
     <Flex sx={{alignItems:"center" , flexDirection:["column","row"]}}>
        {html && (
          <div
            sx={{ variant: "cta" }}
            className="whitespace-pre-wrap"
            contentEditable="true"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        )}
       <Box mx={[2]}>
          <a
            sx={{ variant: "buttons.cta" }}
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            {buttonLabel}
          </a>
       </Box>
     </Flex>
    </div>
  </div>
);}
export default CTA;
