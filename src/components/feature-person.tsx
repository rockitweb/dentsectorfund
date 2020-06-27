/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import Image from "./utilities/image";
import FluidImage from "./interfaces/fluidImage";
import Html from "./html";

export interface FeatureProps {
  person: { name: string; title: string; bio: string };
  image: FluidImage;
}

// Render inline SVG with fallback non-svg images
const FeaturePerson: React.FC<FeatureProps> = ({ person, image }) => {
  return (
    <div className=" flex flex-col">
      <div>
        <div>
          {person.name} {person.title}
        </div>
        <Html>{person.bio}</Html>
      </div>
      <Image
        file={image.file}
        svg={image.svg}
        fluid={image.fluid}
        alt={person.name}
      />
    </div>
  );
};

export default FeaturePerson;
