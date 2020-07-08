import { Markdown } from "../components/interfaces/markdown";

export function GetHTMLFromMarkdown (data: Markdown )  {

    return data.childMarkdownRemark.html;
}
export function GetWordCountFromMarkdown(data: Markdown) {
  return data.childMarkdownRemark.wordCount?.words || 0;
}

export function GetWordReadTimeFromMarkdown(data: Markdown) {
  return data.childMarkdownRemark.timeToRead || 0;
}