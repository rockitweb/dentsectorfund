/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

import { Markdown } from "./interfaces/markdown";
import MarkDown from "./utilities/markdown";
export interface SectionHeadingProps {
  heading: string;
  description: string | Markdown;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  description,
}) => (
  <Fragment>
    <h2 sx={{ variant: "section.heading" }}>{heading}</h2>
    <MarkDown
      sx={{ variant: "section.description" }}
      data={description}
    ></MarkDown>
  </Fragment>
);
export default SectionHeading;
