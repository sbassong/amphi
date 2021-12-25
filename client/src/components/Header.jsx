import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = ({onChange, onSubmit, value}) => {

  return (
    <header>
      <section className='left-nav'>
          <NavLink className='logo' to='/'>AMPHI</NavLink>
          <SearchBar onChange={onChange} onSubmit={onSubmit} value={value}/> 
      </section>

      <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/events'>Events</NavLink>
          <NavLink to='/artists'>Artists</NavLink> 
          <NavLink to='/events/new'>Add Event</NavLink>
          <NavLink to='/artists/new'>Add Artist</NavLink>
          <NavLink to='/cart'>Cart</NavLink>

      </nav>
      
      
    </header>
  )
}

export default Header