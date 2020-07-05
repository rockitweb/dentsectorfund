/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../layouts/layout";
import Hero, { HeroProps } from "../components/hero";
import MarkDown from "../components/utilities/markdown";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    const heroProps: HeroProps = {
      heading: post.title,
      message: null,
      backgroundImage: post.heroImage,
    };

    return (
      <Layout>
        <Hero {...heroProps}></Hero>
        <div sx={{ variant: "layout.container.narrow" }}>
          <MarkDown data={post.body}></MarkDown>
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
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
