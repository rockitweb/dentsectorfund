const Promise = require("bluebird");
const path = require("path");

//create blog posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.tsx");
    const pageTemplate = path.resolve("./src/templates/page.tsx");

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        const pages = result.data.allContentfulPage.edges;

        //create our posts
        posts.forEach((post) => {
          createPage({
            path: `/news/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        //create our pages
        pages.forEach((page) => {
          const path = page.node.slug === "home" ? "/" : `/${page.node.slug}/`;
          createPage({
            path: path,
            component: pageTemplate,
            context: {
              slug: page.node.slug,
            },
          });
        });
      })
    );
  });
};

/*
//create our pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/page.tsx");
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allContentfulPage.edges;
        pages.forEach((page) => {
          const path = page.node.slug === "home" ? "/" : `/${page.node.slug}/`;
          createPage({
            path: path,
            component: pageTemplate,
            context: {
              slug: page.node.slug,
            },
          });
        });
      })
    );
  });
};
*/