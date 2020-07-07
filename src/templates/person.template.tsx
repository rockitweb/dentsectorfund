/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import React from "react";

// Components
import { graphql } from "gatsby";
import Layout from "../layouts/layout";
import Image from '../components/utilities/image';
import MarkDown from "../components/utilities/styled-markdown";

const PersonTemplate = ({ pageContext, data }) => {
  const { personName } = pageContext;
  const person = data.contentfulPerson;
  return (
    <Layout>
      <div
        sx={{
          variant: "gradients.primary",
          height: "300px",
          width: "100%",

          color: "white",
        }}
        className="flex items-center "
      ></div>
      <div sx={{ variant: "layout.container.box" }}>
        <Image
          className="shadow-lg"
          sx={{ variant: "image.circle" }}
          {...person.image}
          tag={person.name}
        ></Image>
        <h1 sx={{ variant: "section.heading", textAlign: "left" }}>
          {person.name}
        </h1>
        <span>{person.title}</span>
        <MarkDown data={person.bio}></MarkDown>
      </div>
    </Layout>
  );
};

export default PersonTemplate;

export const pageQuery = graphql`
  query PersonQuery($personName: String) {
    contentfulPerson(name: { eq: $personName }) {
      email
      facebook
      name
      phone
      title
      twitter
      company
      shortBio {
        childMarkdownRemark {
          html
        }
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
      image {
        svg {
          content
          absolutePath
          dataURI
          relativePath
        }
        file {
          url
          contentType
        }
        fluid(maxWidth: 150, maxHeight: 150, resizingBehavior: THUMB) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
