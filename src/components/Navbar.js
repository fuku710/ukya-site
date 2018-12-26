import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <Nav>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Blog</MenuItem>
      </MenuList>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: deepskyblue;
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
  margin-left: 1em;
  margin-right: 1em;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    color: gray;
  }
`
