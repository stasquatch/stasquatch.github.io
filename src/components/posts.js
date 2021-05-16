import React from 'react';
import Layout from './layout'
import SEO from './seo';
import { graphql, useStaticQuery } from 'gatsby';

const Posts = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  let title = data.allMdx.edges[0].node?.frontmatter?.title || 'Blog';

  return (
    <Layout>
      <SEO title={title} />
      {children}
    </Layout>
  );
};

export default Posts;