import React, {useState} from 'react'
import axios from 'axios'
import { NavLink, Redirect } from 'react-router-dom'
import { BASE_URL } from '../globals'
import SearchBar from './SearchBar'
import ArtistCard from './ArtistCard'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)

  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(`${BASE_URL}/artists/search/${searchQuery}`)
      setSearchResults(res.data)
      toggleSearched(true)
      setSearchQuery('')

      return <Redirect to='/artists/search_results' />
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }


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
      <SearchBar onChange={handleChange} onSubmit={getSearchResults} value={searchQuery}/> 
      <section>
        <h3>Search Results:</h3>
        {searched && searchResults.map(searchResult => (
            <ArtistCard key={searchResult._id} id={searchResult._id} name={searchResult.name} image={searchResult.image} value={searchQuery}/>
          ))}
      </section>
    </header>
  )
}

export default Header