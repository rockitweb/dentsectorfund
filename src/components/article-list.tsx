/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import React from "react";
import ArticlePreview from "../components/article-preview"
import { useStaticQuery, graphql } from "gatsby";
export interface ArticleListProps {
  heading: string;
  articleCount: number;
}
const ArticleList: React.FC<ArticleListProps> = ({ heading, articleCount }) => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query Articles {
      allContentfulBlogPost(
        sort: { fields: [publishDate], order: DESC }
        limit: 10
      ) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            tags
            heroImage {
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
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            description {
              childMarkdownRemark {
                html
                wordCount {
                  words
                }
                timeToRead
              }
            }
          }
        }
      }
    }
  `);
  const posts = allContentfulBlogPost.edges as any[];
    const previews = posts.map((post, index) => <ArticlePreview key={`${post.title}`} {... post.node} />)

  return (
    <div
      
      className="flex flex-col md:flex-row container mx-auto"
    >
      {previews}
    </div>
  );
};
export default ArticleList;
