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

      <h2>About the Stasquatch</h2>
      <p>
        Ambitious and efficient full-stack engineer driven by providing users with an accessible experience, writing maintainable code, and collaborating with a diverse team. Additional experience in design, UX, and copywriting.
      </p>
      <p>
        Why <code>stasquatch</code>? It&#39;s a fun intersection of fun and speculation. Feel free to imagine me as a bigfoot on a laptop just looking for just the right gif.
      </p>

      <h2>Around the Internet</h2>
      <LogoRow />

      <h2>Skills</h2>
      <h3>Frontend</h3>
      <SkillsList skills={frontendSkills} />

      <h3>Backend</h3>
      <SkillsList skills={backendSkills} />

      <h3>Other Skills</h3>
      <SkillsList skills={otherSkills} />

    </Layout>
  )
}

const frontendSkills = [
  'JavaScript',
  'Ember.js',
  'React',
  'HTML5',
  'CSS3',
  'QUnit',
  'Jest',
  'Bootstrap',
  'Bulma',
  'WCAG 2.0 AA Compliance',
  'WAVE',
  'Axe',
  'Jaws screen reader'
];

const backendSkills = [
  'Ruby on Rails',
  'RSpec',
  'Node',
  'Express.js',
  'C#',
  'ASP.NET'
];

const otherSkills = [
  'BDD',
  'Cucumber',
  'Selenium',
  'Adobe Creative Suite',
  'Web & Content Copywriting',
  'Google Analytics/Webmaster Tools'
];

export default AboutPage;