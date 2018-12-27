import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'
import MenuIcon from '../../content/assets/menu-icon.svg'

export default function Navbar({ location, isOpened, onClick }) {
  return (
    <Nav>
      <MediaQuery query="(min-width:769px)">
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
      </MediaQuery>
      <MediaQuery query="(max-width:768px)">
        <HambuergerMenuButton onClick={onClick} />
        <HambuergerMenu isOpened={isOpened}>
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
        </HambuergerMenu>
        <HambuergerMenuBackground isVisible={isOpened} onClick={onClick} />
      </MediaQuery>
    </Nav>
  )
}

const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 16px;
  }
`

const MenuList = styled.ul`
  margin: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const HambuergerMenuButton = styled.button`
  width: 32px;
  height: 32px;
  outline: none;
  appearance: none;
  border: none;
  background: url(${MenuIcon});
`

const HambuergerMenu = styled.ul`
  margin: 0px;
  padding: 16px;
  width: 35vw;
  height: 100vh;
  position: fixed;
  left: ${props => (props.isOpened ? '65vw' : '100vw')};
  top: 0;
  background: deepskyblue;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  transition: all 0.3s;
  z-index: 2;
`

const HambuergerMenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.5s;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible ? '1.0' : '0')};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
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
