import React from 'react';
import Layout from './layout'

const Posts = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Posts;