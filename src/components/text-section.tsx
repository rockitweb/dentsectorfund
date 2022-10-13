/** @jsx jsx */
import { Box, Flex, Grid, jsx,  Styled } from "theme-ui";
import React from "react";
import SectionHeading from "./section-heading";
import MarkDown from "./utilities/markdown";
export interface CtaProps {
  heading: string;
  body: any;
  buttons:  {
    label: string;
    internalLink: string;
    externalLink:string;
    target: string;
  }[];
}
const TextSection: React.FC<CtaProps> = ({ heading, body, buttons }) => (
  <div sx={{ variant: "layout.container.box" }}>
    <Flex sx={{flexDirection:"column"}}>
    
      <SectionHeading heading={heading} description=""></SectionHeading>
      <MarkDown data={body}></MarkDown>
      {buttons&& <Grid my={3} columns={buttons.length}> {buttons.map((button) => <a key={button.label}
        sx={{
          variant: "buttons.cta",
          display: "block",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
        rel="noreferrer"
        href={button.externalLink || button.internalLink || "/"}
        target={button.target}
      >
        {button.label}
      </a>)} </Grid>}
    </Flex>
  </div>
)
export default TextSection;
