/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import React from "react";
//import ArticlePreview from "../components/article-preview"
import { useStaticQuery, graphql } from "gatsby";
import { Markdown } from "./interfaces/markdown";
import FluidImage from "./interfaces/fluidImage";
import Image from "../components/utilities/image";
import { GetHTMLFromMarkdown } from "../utils/data-utils";
import MarkDown from "./utilities/markdown";
export interface ArticleListProps {
  title: string;
  slug: string;
  publishDate: string;

  tags: string[];

  description: Markdown;
  heroImage: FluidImage;
}
const ArticlePreview: React.FC<ArticleListProps> = ({
  title,
  slug,
  publishDate,
  tags,
  description,
  heroImage,
}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <Image {...heroImage} alt={title} />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          
            <MarkDown data={description} />
          
          <div className="flex items-center flex-wrap ">hey there</div>
        </div>
      </div>
    </div>
  );
};
export default ArticlePreview;

/*
 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />

*/
