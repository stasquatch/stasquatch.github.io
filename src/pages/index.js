import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'

const IndexPage = (props) => {
  let posts = props.data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <div key={post.node.slug}>
          <Link to={post.node.slug}>
            here
          </Link>
        </div>
      ))}
    </Layout>
  )
};

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          excerpt
          rawBody
          slug
        }
      }
    }
  }
`;

export default IndexPage
