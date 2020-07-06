/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import React from "react";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";
import Hero, { HeroProps } from "../components/hero";
import ArticlePreview from "../components/article-preview";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allContentfulBlogPost;
  const { hero } = data;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const heroProps: HeroProps = {
    heading: "",
    message: "",
    backgroundImage: hero.backgroundImage,
  };
  const previews = edges.map((post, index) => (
    <ArticlePreview key={`${post.title}:${index}`} {...post.node} />
  ));

  return (
    <Layout>
      <Hero {...heroProps}></Hero>

      <div sx={{ variant: "layout.container.box" }}>
        <Styled.h1>{tagHeader}</Styled.h1>
        <div className="flex">{previews}</div>
      </div>
    </Layout>
  );
};

export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlogPost(
      limit: 2000
      sort: { fields: publishDate, order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
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
          author {
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
              fluid(maxWidth: 104, maxHeight: 104, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            title
            name
          }
        }
      }
    }
    hero: contentfulHero(id: { eq: "8a8ccf5f-4f63-56af-abeb-c1b33df44b04" }) {
      heading
      message {
        childMarkdownRemark {
          html
        }
      }
      backgroundImage {
        fluid(
          maxWidth: 1600
          maxHeight: 700

          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
