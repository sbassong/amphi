import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';

import axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
import ArtistPage from './pages/ArtistPage'
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'
import SearchResults from './pages/SearchResults'
import Cart from './pages/Cart';


const App = () => {
  const navigate = useNavigate()
  const [artists, setArtists] = useState([])
  const [artistsUpdated, toggleArtists] = useState(false)
  const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterQuery, setFilterQuery] = useState('')


//main data Getters
  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      setEvents(res.data)
      // toggleEvents(false)
    } catch (error) {
      console.log(error)
    }
  }
  //getArtists
  const getArtists = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/artists`)
      setArtists(res.data)
      toggleArtists(false)
    } catch (error) {
      console.log(error)
    }
  }
  //getItems
  
  useEffect(() => {
    getEvents()
  }, [])

  useEffect(() => {
    getArtists()    
  }, [artistsUpdated])


  const handleQuerySubmit = async (e) => {
    await e
    e.preventDefault()
    navigate('/artists/search_results')
    setSearchQuery('')
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setFilterQuery(e.target.value)
  }

  return (
      <div className="App">
        <Header onChange={handleChange} onSubmit={handleQuerySubmit} value={searchQuery} />
        <main>
          <Routes>
            <Route exact path='/' element={<Homepage artists={artists} />} />
            <Route exact path='/events' element={<EventsList events={events} />} />
            <Route exact path='/artists' element={<ArtistsList artists={artists} />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/events/new' element={<CreateEvent />} />
            <Route exact path='/artists/new' element={<CreateArtist toggleArtists={toggleArtists} />} />
            <Route exact path='/artists/search_results' element={<SearchResults artists={artists} filterQuery={filterQuery} />} />
            {
              artists.map(artist => (
                <Route path={`/artists/${artist._id}`} element={<ArtistPage artist={artist} />} />
              )
              )}
          </Routes>
        </main>
      </div>
  )
}

export default App;
