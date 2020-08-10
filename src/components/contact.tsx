/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import ContactForm from "./forms/contact-us";
import { Markdown } from "./interfaces/markdown";
import SectionHeading from "./section-heading";
import MarkDown from "./utilities/styled-markdown";

export interface ContactProps {
  formHeading: string | Markdown;
  message: string | Markdown;
  otherInformation: string | Markdown;
  social: string[];
}

const Contact: React.FC<ContactProps> = ({ formHeading, message, otherInformation }) => {
  return (
    <section sx={{ variant: "layout.container.box" }}>
      <SectionHeading
        heading={formHeading}
        description={message}
      ></SectionHeading>

      <div className="flex justify-between pt-4">
        <div className="w-1/2">
          <ContactForm></ContactForm>
        </div>
        <div className="">
          <MarkDown data={otherInformation}></MarkDown>
        </div>
      </div>
    </section>
  );
};
export default Contact;
