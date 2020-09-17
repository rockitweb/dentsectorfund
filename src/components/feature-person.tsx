/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";

import FluidImage from "./interfaces/fluidImage";

import BackgroundImage from "gatsby-background-image";

import { Person } from "./interfaces/Person";
import MarkDown from "./utilities/markdown";
import Image from "./utilities/image";

export interface FeatureProps {
  person: Person;
  image: FluidImage;
  position: "Left" | "Right";
}

// Render inline SVG with fallback non-svg images
const FeaturePerson: React.FC<FeatureProps> = ({ person, image, position }) => {
  const heading = `${person.name} ${person.title}`;
console.log (person.image)
  return (
    <BackgroundImage
      sx={{
        width: "100%",
        backgroundColor: "primary",
        backgroundPosition: "center center",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
      }}
      Tag="section"
      alt="Section Background"
      fluid={image.fluid}
    >
      <div
        sx={{
          variant: "layout.container.box",
          pb: [4, 4, 0],
          display: "flex",
          flexDirection: "row",
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
        <div sx={{ width: ["100%", "70%", "60%"], display:"flex", justifyContent: "flex-end"  }}>
          <Image sx={{width:"50%"}} {... person.image} alt={person.name}>

          </Image>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default FeaturePerson;
