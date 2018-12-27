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
            <h2>どんなサイト？</h2>
            <p>
              駄文を垂れ流したり
              <br />
              謎のゲームを公開してます
            </p>
            <h2>管理人</h2>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              css={css`
                margin: 0;
                minwidth: 50;
                border-radius: 100%;
              `}
            />
            <p>
              名前:{handleName}({author})
              <br />
              カレーとJavaScriptが好きなチンパンジー
              <br />
              Web周りの技術やゲーム開発を好む
              <br />
              好きな言語:JavaScript,C++,Python
              <br />
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
            </p>
          </BioWrapper>
        )
      }}
    />
  )
}

const BioWrapper = styled.div``
const Text = styled.p`
  /* margin: 0px; */
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
