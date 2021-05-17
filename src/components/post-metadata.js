import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostMetadataWrapper = styled.p`
  font-size: 1.7rem;
  margin: 2.5rem 0;
  font-family: 'Nunito Sans';
  *:not(:first-child)::before {
    content: '–';
    padding: 10px;
  }
`;

const PostMetadata = ({ showReadMoreLink, slug, timeToRead, date }) => {
  return (
    <PostMetadataWrapper>
      {showReadMoreLink && <Link to={slug}>Read more</Link>}
      <span>
        {timeToRead} minute read
      </span>
      <span>
        {date}
      </span>
    </PostMetadataWrapper>
  )
}

export default PostMetadata;