/** @jsx jsx */
import { jsx, Badge } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
export interface TagProps {
  tags: string[];
}

const Tags: React.FC<TagProps> = ({ tags }) => {

  //if there aren't any tags then we will get out of here
  if (!tags) return <Fragment />

  const tagsList = tags.map((tag, index) => (
    <Link key={`${tag}:${index}`} to={`/tags/${kebabCase(tag)}/`}>
      <Badge sx={{ mr: 1 }}>
        <span className="uppercase">{tag}</span>
      </Badge>
    </Link>
  ));

  return <Fragment>{tagsList}</Fragment> ;
};

export default Tags;
