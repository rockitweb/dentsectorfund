
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from 'react'
import { Person } from "./interfaces/Person";
import Image from "./utilities/image";
import MarkDown from "./utilities/styled-markdown";

export type PersonProfileProps = { person: Person; }
export const PersonProfile: React.FC<PersonProfileProps> = ({  person}) => {
      let image;

  if (person.image) {
    image = (
      <Image
        {...person.image}
        alt={person.name}
        sx={{
          width: "100%",
          height: "14rem",
          borderRadius: ".5rem",
          
          mb: [2, 2, 0],
        }}
        imageStyle={{ objectFit: "contain", objectPosition: "50% 50%" }}
      ></Image>
    );
  }


    return (
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: ["column", "row"],
          pb: [4],
        }}
      >
        <div sx={{ width: ["100%", "25%"] }}>
          {image}
          <h2
            sx={{ color: "primary", pt: 2 }}
            className="title-font font-medium text-center text-lg text-gray-900"
          >
            {person.name}
          </h2>
          <h3 className="text-gray-500 mb-3 text-center ">{person.title}</h3>
        </div>
        <div sx={{ pl: [0, 4], width: ["100%", "75%"] }}>
          <Styled.h2 sx={{ mb: 0 }}>
            {person.name} | {person.title}
          </Styled.h2>
          <Styled.p>
            <MarkDown data={person.shortBio}></MarkDown>
          </Styled.p>
        </div>
      </div>
    );
};

export default PersonProfile  ;