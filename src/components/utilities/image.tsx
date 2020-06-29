/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import propTypes from "prop-types";
import Img from "gatsby-image";

export interface ImageProps {
  svg: { content: string };
  fluid: any;
  file: { url: string; contentType: string };
  alt: string;
  width?: string;
  height?: string;
  imageStyle?:any
  styles?: any
  classes?:string
}

// Render inline SVG with fallback non-svg images
const Image: React.FC<ImageProps> = ({
  svg,
  fluid,
  file,
  alt,
  width,
  height,
  imageStyle,
  styles
}) => {
  width = width ? width : "200";
  height = height ? height : "200";

  if (file.contentType === "image/svg+xml") {
    if (svg && svg.content) {
      // Inlined SVGs
      //const svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
      //const svgTag = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${width} ${height}">`;
      const svgRegEx = /<svg.*?>/;
      const content = (svg.content as string).replace(
        "<svg ",
        `<svg  "`
      );

      return <div sx={{...styles}} className="flex " dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />;
  }

  // Non SVG images
  return (
    <Img
      fluid={fluid}
      alt={alt}
      
      imgStyle={imageStyle}
    />
  );
};

export default Image;
