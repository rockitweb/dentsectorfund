/** @jsx jsx */
import { jsx, Button, Styled } from "theme-ui";
import React, { Fragment } from "react";
import Tags from "./tags";
import BlogAuthor from "./blog-author";
import FluidImage from "../interfaces/fluidImage";

export interface BlogHeadingProps {
  title: string;
  publishDate: string;
  readTime: number;
  author: {
    name: string;
    title: string;
    image: FluidImage;
  };
  tags: string[];
}
const BlogHeading: React.FC<BlogHeadingProps> = ({
  title,
  publishDate,
  readTime,
  author,
  tags,
}) => {
  return (
    <div className="flex flex-col">
      <Styled.h1>{title}</Styled.h1>
      <div className="flex">
        <Tags tags={tags}></Tags>
      </div>
      <div sx={{ py: 3 }} className="flex-col md:flex-row items-end justify-between">
        <BlogAuthor author={author}></BlogAuthor>
        <div sx={{ color: "light" }} className="flex">
          <span>{publishDate}</span>
          <span sx={{ px: 2 }}>&#183; {readTime} min read</span>
        </div>
      </div>
    </div>
  );
};
export default BlogHeading;
