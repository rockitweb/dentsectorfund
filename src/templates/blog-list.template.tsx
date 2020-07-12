/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/layout";
import Hero, { HeroProps } from "../components/hero";
import ArticlePreview from "../components/blog/article-preview";
import Pagination from "../components/utilities/pagination";
// pageContext, data
const BlogList = ({ pageContext, data }) => {
  const { edges } = data.allContentfulBlogPost;
  const { hero } = data;
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
        <div className="flex">{previews}</div>
       
          <Pagination {...pageContext} />
    
      </div>
    </Layout>
  );
};
export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    hero: contentfulHero(id: { eq: "e9d40316-5b0b-5cd1-87d7-ddf32c65e152" }) {
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
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          title
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
  }
`;
