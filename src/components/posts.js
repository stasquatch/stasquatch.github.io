import React from 'react';
import Layout from './layout'
import SEO from './seo';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PostMetadata from './post-metadata';

const PostTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: normal;
  margin-bottom: -2rem; // compensate for large margin on PostMetadata
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
      <PostMetadata
        showReadMoreLink={false}
        timeToRead={timeToRead}
        date={date}
      />
      {children}
    </Layout>
  );
};

export default Posts;