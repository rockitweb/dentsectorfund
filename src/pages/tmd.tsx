/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Pds: React.FC = () => {
  
    const { contentfulAsset } = useStaticQuery(graphql`
      query tmd {
        contentfulAsset(title: { eq: "TMD" }) {
          localFile {
            publicURL
          }
        }
      }
    `);
  const pdsUrl = contentfulAsset.localFile.publicURL;


if (typeof window !== "undefined") {
  // redirect after 1sec
  window.setTimeout(function () {
    window.location.pathname = pdsUrl;
  }, 1000);
}
return <div>loading TMD</div>
};

export default Pds;
