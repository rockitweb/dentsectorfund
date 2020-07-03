import React from "react";
import "../styles/tailwind.css";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import Loadable from '@loadable/component'
import { InfoBoxProps } from "../components/info-box";

export default function Page({ data }) {
    const widgets = {
      ContentfulHero: "hero",
      ContentfulCallToAction: "cta",
      ContentfulTextSection: "text-section",
      ContentfulIconBoxSection: "icon-section",
      ContentfulFeaturePerson: "feature-person",
      ContentfulInfoBoxSection: "info-box-section",
      ContentfulLatestArticles: "article-list",
    };



    const sections: any[] = data.contentfulPage.pageSections;

   const sectionModules = sections
     .sort(function (a, b) {
       return a.position - b.position;
     })
     .map((section, index) => {
       const widget = section.widget;

       const widgetType = widgets[widget.__typename];

       if (widgetType) {
         const Module = Loadable(() => import(`../components/${widgetType}`));

         //console.log("aa", widget);
         return (
           <Module key={`${section.title}: ${index}`} {...widget}></Module>
         );
       }
       {
         return <div key={index}>oops</div>;
       }
     });

    

  return <Layout>{sectionModules}</Layout>;
}

export const pageQuery = graphql`
         query PageQuery($slug: String!) {
           contentfulPage(slug: { eq: $slug }) {
             pageSections {
               title
               position
               widget {
                 ... on ContentfulHero {
                   internal {
                     type
                   }
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
                 ... on ContentfulCallToAction {
                   internal {
                     type
                   }
                   buttonLabel
                   link
                   ctaMessage {
                     ctaMessage
                     childMarkdownRemark {
                       html
                     }
                   }
                 }
                 ... on ContentfulIconBoxSection {
                   internal {
                     type
                   }
                   iconBoxes {
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
                 }
                 ... on ContentfulInfoBoxSection {
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
                   internal {
                     type
                   }
                   heading
                   body {
                     childMarkdownRemark {
                       html
                     }
                   }
                 }
                 ... on ContentfulFeaturePerson {
                   id
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
