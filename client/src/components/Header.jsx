import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = ({onChange, onSubmit, value}) => {

  return (
    <header>
      <nav className="nav-bar">

        <section className='left-nav'>
          <NavLink to='/'>Amphi</NavLink>
        </section>

        <section className='mid-nav'>
          <NavLink to='/events'>Events</NavLink>
          <NavLink to='/artists'>Artists</NavLink>
        </section>

        <section className='right-nav'>
          <NavLink to='/events/new'>Add New Event</NavLink>
          <NavLink to='/artists/new'>Add New Artist</NavLink>
        </section>
      </nav>
      <SearchBar onChange={onChange} onSubmit={onSubmit} value={value}/> 
      
    </header>
  )
}

export default Header