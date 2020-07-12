/** @jsx jsx */
import { jsx, Badge } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import FluidImage from "../interfaces/fluidImage";
import { TagProps } from "./tags";
import Image from '../utilities/image';
export interface AuthorProps {
  author: {
    name: string;
    title: string;
    image: FluidImage;
  };
}

const BlogAuthor: React.FC<AuthorProps> = ({ author }) => {
  return (
    <a className="inline-flex items-center">
      <Image
        {...author.image}
        alt={author.name}
        sx={{ width: "45px", height: "45px", borderRadius: "50%" }}
      />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium">
          {author.name}
        </span>
        <span className="text-gray-500 text-sm">{author.title}</span>
      </span>
    </a>
  );
};

export default BlogAuthor;
