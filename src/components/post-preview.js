import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostPreviewWrapper = styled.article`
  margin-bottom: 5rem;
`;

const PostTitle = styled(Link)`
  color: #022a37;
  font-family: 'Nunito Sans';
  font-size: 2.5rem;
  font-weight: 900;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #1d6177;
    text-decoration: underline;
  }
`;

const PostExcerpt = styled.blockquote`
  margin: 2rem 0;
  padding: 0;
`;

const PostMetadata = styled.p`
  font-size: 1.6rem;
  margin: 2.5rem 0;
  font-family: 'Nunito Sans';
  *:not(:first-child)::before {
    content: '–';
    padding: 10px;
  }
`;

const ReadMoreLink = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: #022a37;
  &:hover,
  &:focus {
    color: #1d6177;
    text-decoration: underline;
  }
`;

const PostPreview = ({ post }) => {
  return (
    <PostPreviewWrapper key={post.id}>
      <PostTitle to={post.slug}>
        {post.frontmatter.title}
      </PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <PostMetadata>
        <ReadMoreLink to={post.slug}>Read more</ReadMoreLink>
        <span>
          {post.timeToRead} minute read
        </span>
        <span>
          {post.frontmatter.date}
        </span>
      </PostMetadata>
    </PostPreviewWrapper>
  );
};

export default PostPreview;