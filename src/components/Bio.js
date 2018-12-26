import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, handleName, social } = data.site.siteMetadata
        return (
          <BioWrapper>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              css={css`
                margin: 0;
                minwidth: 50;
                border-radius: 100%;
              `}
            />
            <Text>
              Name:{author}
              <br />
              HN:{handleName}
              <br />
              Twitter:
              <a href={`https://twitter.com/${social.twitter}`}>
                @{social.twitter}
              </a>
              <br />
              GitHub:
              <a href={`https://github.com/${social.github}`}>
                {social.github}
              </a>
            </Text>
          </BioWrapper>
        )
      }}
    />
  )
}

const BioWrapper = styled.div``
const Text = styled.p`
  margin: 0px;
`

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        handleName
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Bio
