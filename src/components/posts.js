import React from 'react';
import Layout from './layout'
import SEO from './seo';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Metadata from './metadata';

const PostTitle = styled.h2`
  margin-bottom: -1rem; // compensate for large margin on Metadata
`;

const Posts = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allMdx {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
            }
          }
        }
      }
    }
  `);

  let { title, date } = data.allMdx.edges[0].node.frontmatter;
  let timeToRead = data.allMdx.edges[0].node.timeToRead;

  return (
    <Layout>
      <SEO title={title} />
      <PostTitle>
        {title}
      </PostTitle>
      <Metadata>
        <span>
          {timeToRead} minute read
        </span>
        <span>
          {date}
        </span>
      </Metadata>
      {children}
    </Layout>
  );
};

export default Posts;