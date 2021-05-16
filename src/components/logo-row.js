import React from 'react';
import styled from 'styled-components';
import LinkedInLogo from '../images/linkedin.svg';
import GitHubLogo from '../images/github.svg';
import TwitterLogo from '../images/twitter.svg';

const LogoRowWrapper = styled.p`
  svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;

    path {
      fill: #022a37;
    }

    &:hover,
    &:focus {
      path {
        fill: #1d6177;
      }
    }
  }

  a {
    display: inline-block;
  }
`;

const LogoRow = () => {
  return (
    <LogoRowWrapper>
      <a
        href="https://github.com/stasquatch"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View my GitHub profile"
      >
        <GitHubLogo />
      </a>

      <a
        href="https://www.linkedin.com/in/stacy-harrison/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View my LinkedIn profile"
      >
        <LinkedInLogo />
      </a>

      <a
        href="https://twitter.com/stasquatch"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View my Twitter profile"
      >
        <TwitterLogo />
      </a>
    </LogoRowWrapper>
  )
}

export default LogoRow;