import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostPreviewWrapper = styled.article`
  margin-bottom: 5rem;
`;

const PostTitle = styled(Link)`
  font-family: 'Nunito Sans';
  font-size: 2.5rem;
  font-weight: 900;
`;

const PostExcerpt = styled.blockquote`
  margin: 1rem 0;
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

const PostPreview = ({ post }) => {
  return (
    <PostPreviewWrapper key={post.id}>
      <PostTitle to={post.slug}>
        {post.frontmatter.title}
      </PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <PostMetadata>
        <Link to={post.slug}>Read more</Link>
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