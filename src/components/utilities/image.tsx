/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment } from "react";
import propTypes from "prop-types";
import Img from "gatsby-image";

export interface ImageProps {
  svg?: { content: string };
  fluid: any;
  file?: { url: string; contentType: string };
  alt: string;
  width?: string;
  height?: string;
  imageStyle?: any;
  styles?: any;
  classes?: string;

  sx?: object; //we expect a sx prop but never use it below
  className?: string; //we expect a className prop but never define one when the component is called
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
  styles,
  className
}) => {
  
  width = width ? width : "200";
  height = height ? height : "200";

  //if there isn't an image, for some reason then get out of dodge.
  if (!file) return (< Fragment />);

  if (file.contentType === "image/svg+xml") {
    if (svg && svg.content) {
      // Inlined SVGs
      //const svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
      //const svgTag = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${width} ${height}">`;
      const svgRegEx = /<svg.*?>/;
      const content = (svg.content as string).replace(
        "<svg ",
        `<svg width="100%"`
      );

      return (
        <div
          sx={{ ...styles }}
          className="flex "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />;
  }

  // Non SVG images
  return <Img fluid={fluid} alt={alt} className={className} imgStyle={imageStyle} />;
};

export default Image;

export interface FluidImage {
  fluid: any;
  alt: string;
}
