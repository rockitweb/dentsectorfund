/** @jsx jsx */
import { jsx } from "theme-ui";

import "../styles/tailwind.css";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import Image from "../components/utilities/image";
import BackgroundImage from "gatsby-background-image";

import MarkDown from "../components/utilities/styled-markdown";
import SEO from "../components/utilities/seo";
import WidgetSelector from "../components/utilities/widget-selector";

export default function Page({ data }) {
  console.log("data", data)
  const sections: any[] = data.contentfulPage.pageSections;
  const { title, description, body } = data.contentfulPage;
  const sectionModules = sections
  //  .sort(function (a, b) {
  //    return a.position - b.position;
  //  })
    .map((section, index) => {
      const backgroundImage = section.backgroundImage;
      const widget = section.widget;
      const widgetName = widget.__typename;
      const WidgetElement = WidgetSelector[widgetName];

      if (backgroundImage) {
        return (
          <div
            key={`section-${section.title}: ${index}`}
            sx={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              sx={{
                left: 0,
                top: 0,
                position: "absolute",
                zIndex: -1,
                width: ["100%"],
                opacity: ".8",
                height: "100%",
              }}
            >
              <Image
                sx={{ width: "100%", height: "100%" }}
                alt="background image"
                gatsbyImageData={backgroundImage.gatsbyImageData}
                file={{ contentType: "any", url: "" }}
              ></Image>
            </div>

            <WidgetElement {...widget}></WidgetElement>
          </div>
        );
      } else {
        return <WidgetElement {...widget}></WidgetElement>;
      }
    });

  return (
    <Layout>
      <SEO title={title} description={description}></SEO>
      {sectionModules}
      {body && (
        <MarkDown
          sx={{ variant: "layout.container.box" }}
          data={body || ""}
        ></MarkDown>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      description
      body {
        childMarkdownRemark {
          html
        }
      }
      pageSections {
        title
        position
        backgroundImage {
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
          gatsbyImageData(layout: CONSTRAINED, width: 1600, height: 700)
        }

        widget {
          ... on ContentfulHero {
            __typename
            internal {
              type
            }
            message {
              childMarkdownRemark {
                html
              }
            }
            ctaPrimary {
              label
              externalLink
              target
            }
            ctaSecondary {
              label
              internalLink
              target
            }
            heading
            backgroundImage {
              gatsbyImageData(layout: CONSTRAINED, width: 1600, height: 700)
            }
            image {
              gatsbyImageData(layout: CONSTRAINED, width: 400)
            }
          }
          ... on ContentfulSignUpForm {
            id
            __typename
            formHeading: heading {
              childMarkdownRemark {
                html
              }
            }
            social
          }
          ... on ContentfulContactForm {
            id
            __typename
            formHeading: heading {
              childMarkdownRemark {
                html
              }
            }
            message {
              childMarkdownRemark {
                html
              }
            }
            otherInformation {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulLatestArticles {
            internal {
              type
            }
            id
            __typename
            title
            heading
            articleCount
          }
          ... on ContentfulCallToAction {
            internal {
              type
            }
            __typename
            buttonLabel
            link
            ctaMessage {
              ctaMessage
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulTeamSection {
            id
            heading
            __typename
            people {
              name
              title
              shortBio {
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
                gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
              }
            }
          }
          ... on ContentfulIconBoxSection {
            internal {
              type
            }
            __typename
            iconBoxes {
              heading {
                childMarkdownRemark {
                  html
                }
              }
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
                gatsbyImageData(height: 100, width: 100)
               
              }
            }
          }
          ... on ContentfulInfoBoxSection {
            __typename
            internal {
              type
            }
            infoBoxes {
              heading
              message {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
          ... on ContentfulTextSection {
            __typename
            internal {
              type
            }
            heading
            body {
              childMarkdownRemark {
                html
              }
            }
            buttons {
              externalLink
              internalLink
              target
              label
            }
          }

          ... on ContentfulMediaLogos {
            __typename
            id
            title
            internal {
              type
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
              gatsbyImageData(height: 700, width: 1600)
            }
            mediaLogos {
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
              gatsbyImageData(layout: CONSTRAINED, height: 70)
            }
          }
          ... on ContentfulReports {
            id
            __typename

            categories {
              categoryName
              report {
                reportName
                report {
                  localFile {
                    relativePath
                    publicURL
                  }
                }
              }
            }
          }

          ... on ContentfulFeaturePerson {
            id
            __typename
            position
            internal {
              type
            }
            person {
              name
              title
              shortBio {
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
                gatsbyImageData(layout: CONSTRAINED, width: 400)
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
              gatsbyImageData(layout: CONSTRAINED, width: 1600, height: 700)
            }
          }
        }
      }
    }
  }
`;
/*


export const pageQuery = graphql`
  query HomePageQuery {
    contentfulHomePage {
      slug
      title
      hero {
        message {
          childMarkdownRemark {
            html
          }
        }
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
*/
