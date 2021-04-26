import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import PostPreview from '../components/post-preview'

const IndexPage = (props) => {
  let posts = props.data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => <PostPreview key={post.node.id} post={post.node} />)}
    </Layout>
  )
};

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
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
