import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, ShoppingCartSimple, MusicNotes, MicrophoneStage } from "phosphor-react";

const smallWindow = (
  <>
    <NavLink to='/events'><MusicNotes size={24} color="#ffffff" weight="bold" /></NavLink>
    <NavLink to='/artists'><MicrophoneStage size={24} color="#ffffff" weight="bold" /></NavLink>
  </>
)

const largeWindow = (
  <>
    <NavLink to='/events'>Events</NavLink>
    <NavLink to='/artists'>Artists</NavLink>
  </>
)


const Nav = ({ winWidth }) => {

  return (
    <nav className='nav'>
      {
        winWidth >= 450 
        ? largeWindow
        : smallWindow
      }
      <NavLink to='/events/new'><Plus size={24} color="#ffffff" weight="bold" /></NavLink>
      <NavLink to='/cart'><ShoppingCartSimple size={24} color="#ffffff" weight="bold" /></NavLink>
    </nav>
  )
}

export default Nav
