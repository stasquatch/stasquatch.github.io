import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LogoRow from '../components/logo-row';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <h2>Around the Internet</h2>
      <LogoRow />

    </Layout>
  )
}

export default AboutPage;