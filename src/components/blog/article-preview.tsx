/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";

//import ArticlePreview from "../components/article-preview"
import { Link } from "gatsby";
import { Markdown } from "../interfaces/markdown";
import FluidImage from "../interfaces/fluidImage";
import Image from "../utilities/image";
import { kebabCase } from "lodash";
import Tags from "./tags";
import MarkDown from "../utilities/markdown";

export interface ArticleListProps {
  title: string;
  slug: string;
  publishDate: string;

  tags: string[];

  description: Markdown;
  heroImage: FluidImage;

  author?: {
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
  let authorSection;
  if (author) {
    authorSection = (
      <div className="flex flex-col">
        <div className="inline-flex items-center">
          <Image
            {...author.image}
            alt={author.name}
            sx={{ width: "45px", height: "45px", borderRadius: "50%" }}
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              {author.name}
            </span>
            <span className="text-gray-500 text-sm">{author.title}</span>
          </span>
        </div>
        <Link sx={{color:"secondary"}}
          to={`/team/${kebabCase(author.name)}`}
        >{`Read more by ${author.name}`}</Link>
      </div>
    );
      
  }

  return (
    <div className="px-2 md:w-1/3">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <Link to={`/news/${slug}/`}>
        <Image {...heroImage} alt={title} />
        </Link>
        
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            <Tags tags= {tags}></Tags>
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>

          <MarkDown data={description} />

          <div className="flex items-center flex-wrap pt-5">
            {authorSection}
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
