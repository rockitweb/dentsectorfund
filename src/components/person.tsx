/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import { Person } from "./interfaces/Person";
import MarkDown from "./utilities/markdown";
import Image from "./utilities/image";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
export interface TeamSectionProps {
  person: Person;
}
const PersonComponent: React.FC<TeamSectionProps> = ({ person }) => {
    
    let image;

    if (person.image){
        image = (
          <Image
            {...person.image}
            alt={person.name}
            sx={{variant: "image.teamMember" }}
          ></Image>
        );
    } else {
        image = (
          <img
            alt="team"
            sx={{ variant: "image.teamMember" }}
            src="https://dummyimage.com/200x200"
          ></img>
        );
    }


    return (
      <div className="p-4 lg:w-1/3 md:w-1/2">
        
          <div className="h-full flex-col items-center text-center ">
            {image}

            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">
                {person.name}
              </h2>
              <h3 className="text-gray-500 mb-3">{person.title}</h3>
              <p className="mb-4">
                <MarkDown data={person.shortBio}></MarkDown>
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        
      </div>
    );};
export default PersonComponent;
