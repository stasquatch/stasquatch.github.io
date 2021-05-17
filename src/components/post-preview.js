import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PostMetadata from './post-metadata';

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

const PostPreview = ({ post }) => {
  return (
    <PostPreviewWrapper key={post.id}>
      <PostTitle to={post.slug}>
        {post.frontmatter.title}
      </PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <PostMetadata
        showReadMoreLink={true}
        slug={post.slug}
        timeToRead={post.timeToRead}
        date={post.frontmatter.date}
      />
    </PostPreviewWrapper>
  );
};

export default PostPreview;