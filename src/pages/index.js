import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import PostPreview from '../components/post-preview'
import { useQueryParam, StringParam } from 'use-query-params';

const IndexPage = (props) => {
  const [category] = useQueryParam('category', StringParam);

  let posts = props.data.allMdx.edges;

  // client-side filtering until we can figure out how to refactor graphql-gatsby to accept query param values
  let filteredPosts = category ? posts.filter(post => post.node.frontmatter.category === category) : posts;

  return (
    <Layout>
      <SEO title="Home" />
      {filteredPosts.map(post => <PostPreview key={post.node.id} post={post.node} />)}
    </Layout>
  )
};

export const query = graphql`
  {
    allMdx(
      sort: {
        fields: [frontmatter___date]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            category
          }
          excerpt
          timeToRead
          slug
        }
      }
    }
  }
`;

export default IndexPage
