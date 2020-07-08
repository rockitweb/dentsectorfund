/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import ContactForm from "./forms/contact-us";
import { Markdown } from "./interfaces/markdown";
import SectionHeading from "./section-heading";

export interface ContactProps {
  formHeading: string | Markdown;
  message: string | Markdown;
  social: string[];
}

const Contact: React.FC<ContactProps> = ({ formHeading, message }) => {
  return (
    <section sx={{ variant: "layout.container.box" }}>
      <SectionHeading
        heading={formHeading}
        description={message}
      ></SectionHeading>

      <div className="flex ">
        <div className="w-1/2">
          <ContactForm></ContactForm>
        </div>
        <div className="w-1/2">
          Other contact stuff
        </div>
      </div>
    </section>
  );
};
export default Contact;
