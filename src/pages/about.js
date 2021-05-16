import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LogoRow from '../components/logo-row';
import SkillsList from '../components/skills-list';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <h2>Around the Internet</h2>
      <LogoRow />

      <h2>Skills</h2>
      <SkillsList skills={skills} />

    </Layout>
  )
}

const skills = [
  'JavaScript',
  'Ember.js',
  'React Ruby on Rails',
  'RSpec HTML5',
  'CSS3',
  'JS/ES6+ Node',
  'Next.js',
  'Express.js',
  'QUnit',
  'Jest',
  'C#',
  'ASP.NET',
  'Bootstrap',
  'Bulma',
  'WCAG 2.0 AA CompSkillItemance',
  'WAVE',
  'Axe',
  'Jaws screen reader',
  'BDD',
  'Cucumber',
  'Selenium',
  'Adobe Creative Suite',
  'Web & Content Copywriting',
  'Google Analytics/Webmaster Tools'
];

export default AboutPage;