import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = (props) => {
  
  return (
    <header>
      <nav className="nav-bar">

        <section className='left-nav'>
          <NavLink to='/'>Amphi</NavLink>
        </section>

        <section className='right-nav'>
          <NavLink to='/events'>Events</NavLink>
          <NavLink to='/artists'>Artists</NavLink>
        </section>

      </nav>
      <SearchBar /> 
    </header>
  )
}

export default Header