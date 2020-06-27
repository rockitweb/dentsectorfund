/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import React from "react";
import ArticlePreview from "../components/article-preview"
export interface ArticleListProps {
  heading: string;  
  articles: any[];

}
const ArticleList: React.FC<ArticleListProps> = ({ heading, articles }) => (
  <div
    sx={{ variant: "layout.container.narrow" }}
    className="flex flex-col container mx-auto"
  >
    <Heading as="h3">{heading}</Heading>
    <div className="flex">
      {articles.map(({ node }) => {
        return (
          <li key={node.slug}>
            <ArticlePreview article={node} />
          </li>
        );
      })}
    </div>
  </div>
);
export default ArticleList;
