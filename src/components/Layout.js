import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
// import PageTransition from 'gatsby-plugin-page-transitions'
import TransitionContainer from './TransitionContainer'

import Navbar from './Navbar'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenedMenu: false,
    }
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <LayoutContainer>
        <Global styles={globalStyle} />
        <HeaderContainer>
          <Title>
            <Link to="/">{title}</Link>
          </Title>
          <Navbar
            location={location}
            isOpened={this.state.isOpenedMenu}
            onClick={() => {
              this.setState({ isOpenedMenu: !this.state.isOpenedMenu })
            }}
          />
        </HeaderContainer>
        <MainContainer>
          {/* <Content>{children}</Content> */}
          {children}
        </MainContainer>
        {/* <Footer>
          ©2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer> */}
        {/* </PageTransition> */}
      </LayoutContainer>
    )
  }
}

const globalStyle = css`
  html {
    background-color: #fafdff;
  }
`

const LayoutContainer = styled.div``

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #00a1ff;
`

const Title = styled.h1`
  font-family: 'Orbitron';
  font-weight: normal;
  margin: 0px;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 32px;
  color: white;
  line-height: 1.5em;
  > * {
    color: inherit;
    text-decoration: none;
  }
`

const MainContainer = styled.main`
  margin: 0px;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  width: 48rem;
  @media (max-width: 768px) {
    width: auto;
    max-width: 48rem;
  }
`

// const Content = styled.div`
//   padding: 8px;
//   width: 48rem;
//   box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
//   @media (max-width: 768px) {
//     width: auto;
//     max-width: 48rem;
//   }
// `

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Layout
