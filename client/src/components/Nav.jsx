import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartSimple, MusicNotesPlus, UserPlus } from "phosphor-react";
import HamburgerMenu from './HamburgerMenu';

const smallWindowMarkup = <HamburgerMenu />

const largeWindowMarkup = (
  <nav className='nav'>
    <NavLink to='/events'>Events</NavLink>
    <NavLink to='/artists'>Artists</NavLink>
    <NavLink to='/events/new'><UserPlus size={24} color="#ffffff" weight="bold" /></NavLink>
    <NavLink to='/artists/new'><MusicNotesPlus size={24} color="#ffffff" weight="bold" /></NavLink>
    <NavLink to='/cart'><ShoppingCartSimple size={24} color="#ffffff" weight="bold" /></NavLink>
  </nav>
)

const Nav = ({ winWidth }) => (winWidth >= 600 ? largeWindowMarkup : smallWindowMarkup)


export default Nav
