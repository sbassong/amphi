import React from 'react'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu';

const smallWindowMarkup = <HamburgerMenu />

const largeWindowMarkup = (
  <nav className='nav'>
    <NavLink to='/artists'>Artists</NavLink>
    <NavLink to='/favorites'>Favorites</NavLink>
    <NavLink to='/artists/new'>Add artist</NavLink>
  </nav>
)

const Nav = ({ winWidth }) => (winWidth >= 600 ? largeWindowMarkup : smallWindowMarkup)


export default Nav
