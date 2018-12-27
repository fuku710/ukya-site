import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import PostItem from '../components/PostItem'

class Games extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Game"
          // keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostItem title="単位キャッチャー" href="/games/tanni" />
        <PostItem title="FlappyTCUBird" href="/games/flappy-tcu-bird" />
      </Layout>
    )
  }
}

export default Games

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
