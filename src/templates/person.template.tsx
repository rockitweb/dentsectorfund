/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import React from "react";

// Components
import { graphql } from "gatsby";
import Layout from "../layouts/layout";
import Image from "../components/utilities/image";
import MarkDown from "../components/utilities/styled-markdown";
import ArticlePreview from "../components/blog/article-preview";

const PersonTemplate = ({ pageContext, data }) => {
  const MAX_ARTICLES = 6;
  const person = data.contentfulPerson;

  const bio = person.bio || person.shortBio;
  const blogPosts: any[] = person.blog_post;

  //get blog previews, if there are any
  let previews;
  if (blogPosts) {
    const posts = blogPosts.slice(0, MAX_ARTICLES);
    previews = posts.map((post, index) => (
      <ArticlePreview key={`${post.title}:${index}`} {...post} />
    ));
  }

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
        <MarkDown data={bio}></MarkDown>
      </div>

      <div className="flex flex-col md:flex-row container mx-auto">
        {previews}
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
      blog_post {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
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
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        description {
          childMarkdownRemark {
            html
            wordCount {
              words
            }
            timeToRead
          }
        }
      }
    }
  }
`;
