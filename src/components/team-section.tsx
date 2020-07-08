/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import { Person } from "./interfaces/Person";
import MarkDown from "./utilities/markdown";
import PersonComponent from "./person";
import SectionHeading from "./section-heading";
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
    <PersonComponent key={person.name} person={person}></PersonComponent>
  ));

  return (
    <div sx={{ variant: "layout.container.box" }}>
      <div className="flex flex-col">
        <SectionHeading
          heading={heading}
          description={description}
        ></SectionHeading>

        <div className="flex flex-wrap">{teamMebers}</div>
      </div>
    </div>
  );
};
export default TeamSection;
