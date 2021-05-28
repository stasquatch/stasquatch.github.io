import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LogoRow from '../components/logo-row';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <h2>About Me</h2>
      <p>
        Ambitious and efficient full-stack engineer driven by providing users
        with an accessible experience, writing maintainable code, and
        collaborating with a diverse team. Additional experience in design, UX,
        and copywriting.
      </p>
      <p>
        Why <code>stasquatch</code>? We&#39;ll have to chat for the full
        explanation. In the meantime, feel free to imagine me as a bigfoot on a
        laptop just looking for just the right gif.
      </p>

      <h2>Around the Internet</h2>
      <LogoRow />

      <h2>Recent Projects</h2>
      <p>
        Independently{' '}
        <strong>researched, designed, and developed a new UX</strong> for
        connecting VCS providers to Terraform Cloud to bring an 11-step,
        multi-window process down to a 3-step, 2-window process.
      </p>
      <p>
        Led <strong>self-initiated accessibility projects</strong> at
        CardinalCommerce and HashiCorp to implement automated auditing tools
        into the codebase, fixing issues generated from those reports, and
        ensuring future compliance with WCAG 2.0 AA by conducting internal
        trainings and incorporating auditing test into testing blueprint.
        Informally tested features and high-traffic areas of the application for
        keyboard-only navigation use-of-use.
      </p>
    </Layout>
  );
};

export default AboutPage;
