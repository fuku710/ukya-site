import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import Navbar from './Navbar'
import Header from './Header'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <LayoutContainer>
        <Header>{title}</Header>
        <Navbar />
        <Content>{children}</Content>
        <Footer>
          ©2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </LayoutContainer>
    )
  }
}

const LayoutContainer = styled.div``

const Content = styled.div`
  margin: 16px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Layout
