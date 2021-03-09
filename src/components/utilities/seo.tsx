
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
type props = {
  description?: string;
  lang?: string;
  meta?: object[];
  title: string;
};


const SEO: React.FC<props> = ({ title, description }) => {
  const { pathname } = useLocation();
  const { contentfulSiteSettings } = useStaticQuery(query);

  const {
    title: defaultTitle,

    description: defaultDescription,
    siteUrl,
  } = contentfulSiteSettings;

  const seo = {
    title: title ? `${defaultTitle} | ${title}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname === "/" ? "":pathname || ""}`,
  };



  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        {/* General tags */}
        <title>{seo.title}</title>
        <meta name="description" content={description} />

        <link rel="canonical" href={seo.url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />

        {/* Twitter Card tags */}
      </Helmet>
    </React.Fragment>
  );
};

export default SEO;

const query = graphql`
  query SiteSettingsQuery {
    contentfulSiteSettings {
      title
      description
      siteUrl
      otherSettings {
        socialLinks {
          address
          email
          facebook
          fax
          github
          instagram
          linkedin
          phone
          pinterest
          stackOverflow
          twitter
          youtube
        }
        social {
          twitter
        }
        siteVerification {
          bing
          google
        }
        organization {
          name
          phone
          url
          email
          acn
          abn
        }
      }
    }
  }
`;
