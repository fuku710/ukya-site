import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export default function Navbar({ location }) {
  return (
    <Nav>
      <MenuList>
        <MenuItem pathname={location.pathname}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem pathname={location.pathname}>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem pathname={location.pathname}>
          <Link to="/blog">Blog</Link>
        </MenuItem>
        <MenuItem pathname={location.pathname}>
          <Link to="/games">Games</Link>
        </MenuItem>
      </MenuList>
    </Nav>
  )
}

const Nav = styled.nav`
  /* background-color: deepskyblue;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 4px 0px; */
`

const MenuList = styled.ul`
  margin: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const MenuItem = styled.li`
  margin: 0px;
  margin-right: 1em;
  font-size: 24px;
  color: ${props =>
    props.pathname === props.children.props.to ? 'gray' : 'white'};
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    color: gray;
  }
  > * {
    color: inherit;
    text-decoration: none;
  }
`
