/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";

import FluidImage from "./interfaces/fluidImage";

import BackgroundImage from "gatsby-background-image";

import { Person } from "./interfaces/Person";

import Image from "./utilities/image";
import MarkDown from "./utilities/styled-markdown";

export interface FeatureProps {
  person: Person;
  image: {gatsbyImageData:any};
  position: "Left" | "Right";
}

// Render inline SVG with fallback non-svg images
const FeaturePerson: React.FC<FeatureProps> = ({ person, image, position }) => {
  const heading = `${person.name} | ${person.title}`;
console.log("image", image);
  return (
    <div sx={{ position: "relative", overflow: "hidden" }}>
      <div
        sx={{
          left: 0,
          top: 0,
          position: "absolute",
          zIndex:-1,
          width: ["100%"],
          //opacity: ".5",
          height: "auto",
        }}
      >
        <Image sx={{width:"100%"}} alt="background image" {...image}></Image>
      </div>
      <div
        sx={{
          variant: "layout.container.box",
          pb: [4, 4, 0],
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: `flex-${position === "Left" ? "start" : "end"}`,
        }}
      >
        <div
          sx={{
            width: ["100%", "30%", "40%"],
            backgroundColor: "extraLight",
            p: [3, 3, 3],
          }}
        >
          <h2
            sx={{
              variant: "section.heading",
              textAlign: ["left", null, "center"],
              py: [3, 3, 3],
            }}
          >
            {heading}
          </h2>

          <MarkDown data={person.shortBio}></MarkDown>
        </div>
        <div
          sx={{
            width: ["100%", "70%", "60%"],
            display: "flex",
            justifyContent: ["center", "flex-end"],
          }}
        >
          <Image
            sx={{ width: "50%" }}
            {...person.image}
            alt={person.name}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FeaturePerson;
