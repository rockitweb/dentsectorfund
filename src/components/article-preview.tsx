/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import React from "react";
import { Badge, Avatar } from "theme-ui";
//import ArticlePreview from "../components/article-preview"
import { useStaticQuery, graphql, Link } from "gatsby";
import { Markdown } from "./interfaces/markdown";
import FluidImage from "./interfaces/fluidImage";
import Image from "../components/utilities/image";
import { GetHTMLFromMarkdown } from "../utils/data-utils";
import MarkDown from "./utilities/markdown";
var kebabCase = require("lodash.kebabcase");
export interface ArticleListProps {
  title: string;
  slug: string;
  publishDate: string;

  tags: string[];

  description: Markdown;
  heroImage: FluidImage;

  author: {
    name: string;
    title: string;
    image: FluidImage;
  };
}
const ArticlePreview: React.FC<ArticleListProps> = ({
  title,
  slug,
  publishDate,
  tags,
  description,
  heroImage,
  author,
}) => {
  const tagsList = tags.map((tag, index) => (
    <Link key={`${tag}:${index}`} to={`/tags/${kebabCase(tag)}/`}>
      <Badge sx={{mr:1}}>
        <span className="uppercase">{tag}</span>
      </Badge>
    </Link>
  ));
  const avatar = author.image;
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <Link to={`/news/${slug}/`}>
        <Image {...heroImage} alt={title} />
        </Link>
        
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {tagsList}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>

          <MarkDown data={description} />

          <div className="flex items-center flex-wrap pt-5">
            <a className="inline-flex items-center">
              <Image
                {...avatar}
                alt={author.name}
                sx={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  {author.name}
                </span>
                <span className="text-gray-500 text-sm">{author.title}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticlePreview;

/*
 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />

*/
