import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import Navbar from './Navbar'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <LayoutContainer>
        <Global styles={globalStyle} />
        <HeaderContainer>
          <Title>{title}</Title>
          <Navbar />
        </HeaderContainer>
        <MainContainer>
          <Content>{children}</Content>
        </MainContainer>
        {/* <Footer>
          ©2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer> */}
      </LayoutContainer>
    )
  }
}

const globalStyle = css`
  html {
    background-color: lightgray;
  }
`

const LayoutContainer = styled.div`
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
  height: fit-content;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: deepskyblue;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
`

const Title = styled.h1`
  margin: 0px;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 32px;
  color: white;
  line-height: 1.5em;
`

const MainContainer = styled.main`
  margin: 8px;
  margin-right: auto;
  margin-left: auto;
  width: fit-content;
`

const Content = styled.div`
  padding: 8px;
  width: 48rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Layout
