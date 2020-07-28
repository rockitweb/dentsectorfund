/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import {  ImageProps } from "../utilities/image";
import Image from "../utilities/image";

export type CardVerticalProps = { image:ImageProps; variant?: string };
export const CardVertical: React.FC<CardVerticalProps> = ({
  image,
  variant,
  children,
}) => {
  const cardVarient = "cards" + (variant ? `.${variant}` : "");
  return (
    <article
      sx={{
        variant: cardVarient,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image
        imageStyle={{ objectFit: "contain" }}
        sx={{ borderRadius: "10px" }}
        fluid={image.fluid}
        alt={image.alt}
        file={{ contentType: "image/png", url: "" }}
      ></Image>
      <div
        sx={{
          variant: "cards.content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </article>
  );
};

export default CardVertical;
