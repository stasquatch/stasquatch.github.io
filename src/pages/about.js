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