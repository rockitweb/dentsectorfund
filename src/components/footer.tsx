
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import { SiteMetadata } from "../shared/interfaces/siteMetadata";


export type FooterProps = { siteMetadata?: SiteMetadata}
export const Footer: React.FC<FooterProps> = ({siteMetadata , children  }) => {
  
    return (
        <footer sx={{variant:"footer"}}>
            {children}
        </footer>
    )
};

export default Footer  ;