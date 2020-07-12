/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import { graphql } from "gatsby";

import get from "lodash/get";

import Layout from "../layouts/layout";
import Hero, { HeroProps } from "../components/hero";

import StyledMarkDown from "../components/utilities/styled-markdown";
import BlogHeading from "../components/blog/blog-heading";
import SEO from "../components/utilities/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");

    const { title, description, publishDate, author, tags, body } = post;

    const heroProps: HeroProps = {
      heading: post.title,
      message: null,
      backgroundImage: post.image,
    };

    const headingProps = {
      title: title,
      publishDate: publishDate,
      readTime: post.body.childMarkdownRemark.timeToRead,
      author: author,
      tags: tags,
    };

    return (
      <Layout>
        <SEO title={title} description={description}></SEO>

        <Hero {...heroProps}></Hero>

        <div sx={{ variant: "layout.container.narrow", mt: 4 }}>
          <BlogHeading {...headingProps}></BlogHeading>
          <StyledMarkDown data={body}></StyledMarkDown>
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
             description {
               childMarkdownRemark {
                 html
               }
             }
             tags
             publishDate(formatString: "MMMM Do, YYYY")
             image: heroImage {
               fluid(maxWidth: 1180, background: "rgb:000000") {
                 aspectRatio
                 src
                 srcSet
                 sizes
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
                   aspectRatio
                   src
                   srcSet
                   sizes
                 }
               }
             }
           }
         }
       `;
