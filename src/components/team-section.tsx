/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import React from "react";
import { Person } from "./interfaces/Person";
import MarkDown from "./utilities/markdown";
import PersonComponent from "./person";
import SectionHeading from "./section-heading";
import CardVertical from "./cards/image-card";
import PersonProfile from "./person-profile";
export interface TeamSectionProps {
  heading: string;
  description: any;
  people: Person[];
}
const TeamSection: React.FC<TeamSectionProps> = ({
  heading,
  description,
  people,
}) => {
  const teamMebers = people.map((person, index) => (
    <PersonProfile
      sx={{ width: "100%" }}
      key={person.name}
      person={person}
    ></PersonProfile>
  ));

  return (
    <div sx={{ variant: "layout.container.box" }}>
      <div className="flex flex-col">
      
       
        <div className="flex flex-wrap">{teamMebers}</div>
      </div>
    </div>
  );
};
export default TeamSection;

/*

  <SectionHeading
          heading={heading}
          description={description}
        ></SectionHeading>
*/