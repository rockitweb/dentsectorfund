/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
import { Markdown } from "../interfaces/markdown";
import { GetHTMLFromMarkdown } from "../../utils/data-utils";



function isMarkdown(data: string | Markdown): data is Markdown {
  return (data as Markdown).childMarkdownRemark !== undefined;
}

export interface CtaProps {
  data: string | Markdown;
}
const MarkDown: React.FC<CtaProps> = ({ data }) => {
  let html = "";
  if (isMarkdown(data)) {
    html = GetHTMLFromMarkdown(data);
  } else {
    html = data;
  }

  return (
    <div
     sx={{variant:"styles"}}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
export default MarkDown;

