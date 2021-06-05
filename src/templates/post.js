import React from 'react';
import Layout from './../components/layout';
import SEO from './../components/seo';
import Metadata from './../components/metadata';

const Post = ({ pageContext, children }) => {
  let { title, date } = pageContext.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <h2>{title}</h2>
      <Metadata>
        <span>{date}</span>
      </Metadata>
      {children}
    </Layout>
  );
};

export default Post;
