import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = ({ setFilterQuery }) => {

  return (
    <header>
      <section className='left-nav'>
        <NavLink className='logo' to='/'><span>Amphi</span></NavLink>
        <SearchBar setFilterQuery={setFilterQuery}/> 
      </section>

      <nav className='nav'>
          <NavLink to='/'><span>Home</span></NavLink>
        <NavLink to='/events'><span>Events</span></NavLink>
        <NavLink to='/artists'><span>Artists</span></NavLink> 
        <NavLink to='/events/new'><span>Add Event</span></NavLink>
        <NavLink to='/artists/new'><span>Add Artist</span></NavLink>
        <NavLink to='/cart'><span>Cart</span></NavLink>

      </nav>
      
      
    </header>
  )
}

export default Header