import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Tabset, Tab } from 'react-rainbow-components'

const Header = ({onChange, onSubmit, value}) => {

  return (
    <header>
      <section className='left-nav'>
          <NavLink className='logo' to='/'>AMPHI</NavLink>
          <SearchBar onChange={onChange} onSubmit={onSubmit} value={value}/> 
      </section>

      <nav>
        <Tabset className='nav'>
          <NavLink to='/'><Tab label='Home'></Tab></NavLink>
          <NavLink to='/events'><Tab label='Events'></Tab></NavLink>
          <NavLink to='/artists'><Tab label="Artists"></Tab></NavLink> 
          <NavLink to='/events/new'><Tab label='Add New Event'></Tab></NavLink>
          <NavLink to='/artists/new'><Tab label='Add New Artist'></Tab></NavLink>
          <NavLink to='/cart'><Tab label='Cart'></Tab></NavLink>
        </Tabset>
      </nav>
      
      
    </header>
  )
}

export default Header