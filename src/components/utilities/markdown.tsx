/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { Fragment } from "react";
import { Markdown } from "../interfaces/markdown";
import { GetHTMLFromMarkdown } from "../../utils/data-utils";

function isMarkdown(data: string | Markdown): data is Markdown {
  return (data as Markdown).childMarkdownRemark !== undefined;
}

export interface CtaProps {
  data: string | Markdown;

  sx?: object; //we expect a sx prop but never use it below
  className?: string; //we expect a className prop but never define one when the component is called
}
const MarkDown: React.FC<CtaProps> = ({ data, className }) => {
  let html = "";

  if (!data) return <Fragment />
  
  if (isMarkdown(data)) {
    html = GetHTMLFromMarkdown(data);
  } else {
    html = data;
  }

  return (
    <div 
      className={`whitespace-pre-wrap ${className}`}
     
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
export default MarkDown;
