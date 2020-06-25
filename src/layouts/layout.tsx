/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from '../components/navbar';
//import Footer from '../components/footers/footer-basic';
//import Contact from '../components/contact/contact';

const Layout = ({ includeContact = true, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const contactCSS = includeContact ? '' : 'hidden';
  return (
    <>
      <div>
        <NavBar siteTitle={data.site.siteMetadata.title}></NavBar>
        <main>
          <div
            sx={{
              variant: 'layout.container',
              mx: 'auto',
            }}
          >
            {children}
          </div>
          <div className={contactCSS}>
           
          </div>
        </main>
        
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
