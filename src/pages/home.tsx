import React from "react";
import "../styles/tailwind.css";
import Layout from "../layouts/layout";
import NavBar from "../components/navbar";
import { graphql } from "gatsby";
import Hero from "../components/hero";
import CTA from "../components/cta";
import TextSection from "../components/text-section";
import ArticleList from "../components/article-list";
import IconSection from "../components/icon-section";
import InfoBoxSection from "../components/info-box-section";
import { InfoBoxProps } from "../components/info-box";
import FeaturePerson, { FeatureProps } from "../components/feature-person";
import MediaIcons from "../components/media-icons";
export default function Home({ data }) {
  const homePageData = data.contentfulHomePage;
  const articleData = data.allContentfulBlogPost;
  const {
    hero,
    investNow,
    about,
    aboutHarry,
    latestBlogs,
    iconSection1,
    iconSection2,
    infoBoxes,
    featurePerson,
    mediaLogos
  } = homePageData;

  console.log(featurePerson);
  const _infoBoxes: InfoBoxProps[] = infoBoxes.map((b) => ({
    heading: b.heading,
    message: b.message.childMarkdownRemark.html,
  }));

  const _featurePerson: FeatureProps = {
    person: {
      name: featurePerson.person.name,
      title: featurePerson.person.title,
      bio: featurePerson.person.shortBio.childMarkdownRemark.html,
    },
    image: featurePerson.image,
  };
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
      <TextSection
        heading={aboutHarry.heading}
        body={aboutHarry.body}
      ></TextSection>
      <IconSection icons={iconSection1}></IconSection>
      <TextSection heading={about.heading} body={about.body}></TextSection>
      <IconSection icons={iconSection2}></IconSection>
      <InfoBoxSection infoboxes={_infoBoxes}></InfoBoxSection>
      <FeaturePerson
        person={_featurePerson.person}
        image={_featurePerson.image}
      />
      <MediaIcons images={mediaLogos}></MediaIcons>
      <ArticleList
        heading={latestBlogs?.heading}
        articles={articleData.edges}
      ></ArticleList>
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
            maxHeight: 700

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
      about {
        heading
        body {
          childMarkdownRemark {
            html
          }
        }
      }
      aboutHarry {
        heading
        body {
          childMarkdownRemark {
            html
          }
        }
      }
      iconSection1 {
        heading
        icon {
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
          fluid(
            maxWidth: 100
            maxHeight: 100

            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      iconSection2 {
        heading
        icon {
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
          fluid(
            maxWidth: 100
            maxHeight: 100

            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      infoBoxes {
        heading
        message {
          childMarkdownRemark {
            html
          }
        }
      }
      featurePerson {
        person {
          name
          title
          shortBio {
            childMarkdownRemark {
              html
            }
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
          fluid(
            maxWidth: 1600
            maxHeight: 700

            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      latestBlogs {
        heading
      }
      mediaLogos {
        title
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
        fluid(
          maxWidth: 100
          maxHeight: 70

          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
