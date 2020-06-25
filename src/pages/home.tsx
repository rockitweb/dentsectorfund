import React from "react";
import "../styles/tailwind.css";
import Layout from "../layouts/layout";
import NavBar from "../components/navbar";
import { graphql } from "gatsby";
import Hero from "../components/hero";
import CTA from "../components/cta";
export default function Home({ data }) {
  const homePageData = data.contentfulHomePage;
  const { hero, investNow } = homePageData;

  return (
    <Layout>
      <Hero
        heading={hero.heading}
        message={hero.message}
        backgroundImage={hero.backgroundImage}
      />
      <CTA
        buttonLabel={investNow.buttonLabel}
        link={investNow.link}
        ctaMessage={investNow.ctaMessage}
      ></CTA>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomePageQuery {
    contentfulHomePage {
      slug
      title
      hero {
        message
        heading
        backgroundImage {
          fluid(
            maxWidth: 1600
            maxHeight: 500
            resizingBehavior: FILL
            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      investNow {
        buttonLabel
        link
        ctaMessage {
          ctaMessage
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
