/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import FluidImage from "../interfaces/fluidImage";
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
