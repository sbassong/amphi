import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Tabset, Tab } from 'react-rainbow-components'

const Header = ({onChange, onSubmit, value}) => {

  return (
    <header>
        <nav className="nav-bar">
        <section className='left-nav'>
          <NavLink to='/'>Amphi</NavLink>
        </section>

        <section className='mid-nav'>
        <Tabset>
          <NavLink to='/events'><Tab label='Events'></Tab></NavLink>
          <NavLink to='/artists'><Tab label="Artists"></Tab></NavLink>
        </Tabset>
        </section>

        <section className='right-nav'>
        <Tabset>
          <NavLink to='/events/new'><Tab label='Add New Event'></Tab></NavLink>
          <NavLink to='/artists/new'><Tab label='Add New Artist'></Tab></NavLink>
          <NavLink to='/cart'><Tab label='Cart'></Tab></NavLink>
        </Tabset>
        </section>
      </nav>
      
      <SearchBar onChange={onChange} onSubmit={onSubmit} value={value}/> 
      
    </header>
  )
}

export default Header