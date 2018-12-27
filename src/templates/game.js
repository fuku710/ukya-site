import React from 'react'
import { Link, graphql } from 'gatsby'
import {} from 'react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

class GameTemplate extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, scriptSrc } = this.props.pageContext

    return (
      <div>
        <SEO title={siteTitle} />
        <div id="app" />
        <script dangerouslySetInnerHTML={{__html:`console.log("js")`}}></script>
      </div>
    )
  }
}

export default GameTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
