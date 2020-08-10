const Promise = require("bluebird");
const path = require("path");
const kebabCase = require("lodash/kebabCase");
//import { kebabCase } from "lodash";
//create blog posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.template.tsx");
    const blogList = path.resolve("./src/templates/blog-list.template.tsx");
    const pageTemplate = path.resolve("./src/templates/page.template.tsx");
    const tagTemplate = path.resolve("src/templates/tags.template.tsx");
    const personTemplate = path.resolve("src/templates/person.template.tsx");
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
            tagsGroup: allContentfulBlogPost(limit: 2000) {
              group(field: tags) {
                fieldValue
              }
            }
            blogList: allContentfulBlogPost(
              limit: 1000
              sort: { fields: publishDate, order: DESC }
            ) {
              edges {
                node {
                  title
                  slug
                }
              }
            }

            allContentfulPerson {
              edges {
                node {
                  name
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
        //create for our blog list
        const postList = result.data.blogList.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(postList.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/news` : `/news/${i + 1}`,
            component: blogList,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
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
;


        // Extract people data from query
        const people = result.data.allContentfulPerson.edges;

        // Make tag pages
        people.forEach((person) => {
          createPage({
            path: `/team/${kebabCase(person.node.name)}/`,
            component: personTemplate,
            context: {
              personName: person.node.name,
            },
          });
        });

        // Extract tags from query
        const tags = result.data.tagsGroup.group;

        // Make tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/tags/${kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
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
