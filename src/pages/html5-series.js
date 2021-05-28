import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const Html5SeriesPage = (props) => {
  let posts = props.data.allMdx.edges;

  return (
    <Layout>
      <SEO title="HTML5 Blog Series" />
      <h2>HTML5 Blog Series</h2>
      <p>
        The HTML5 Series is my attempt at revisiting and studying
        semantic HTML5 tags. As a full-stack engineer passionate in
        accessibility, it&#39;s critical to fully understand how
        assistive technologies interact with the software I write.
      </p>
      {posts &&
        <ul>
          {posts.map(post => (
            <li key={post.node.id}>
              <Link to={`/${post.node.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </Layout>
  )
};

export const query = graphql`
{
    allMdx(
      sort: {
        fields: [frontmatter___title]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`;

export default Html5SeriesPage;
