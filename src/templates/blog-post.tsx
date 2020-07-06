/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import { graphql } from "gatsby";

import get from "lodash/get";

import Layout from "../layouts/layout";
import Hero, { HeroProps } from "../components/hero";

import StyledMarkDown from "../components/utilities/styled-markdown";
import BlogHeading from "../components/blog-heading";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    const heroProps: HeroProps = {
      heading: post.title,
      message: null,
      backgroundImage: post.image,
    };

    const headingProps = {
      title: post.title,
      publishDate: post.publishDate,
      readTime: post.body.childMarkdownRemark.timeToRead,
      author: post.author,
      tags: post.tags,
    };

    console.log(post);
    return (
      <Layout>
        <Hero {...heroProps}></Hero>

        <div sx={{ variant: "layout.container.narrow", mt: 4 }}>
          <BlogHeading {...headingProps}></BlogHeading>
          <StyledMarkDown data={post.body}></StyledMarkDown>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      publishDate(formatString: "MMMM Do, YYYY")
      image: heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      author {
        title
        name
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
      }
    }
  }
`;
