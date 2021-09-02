import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch, useHistory} from 'react-router-dom';

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


const App = () => {
  const [artists, setArtists] = useState([])
  const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      setEvents(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  //getArtists
  const getArtists = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/artists`)
      setArtists(res.data)
    } catch (error) {
      console.log(error)
    }
  }

    const history = useHistory()

  useEffect(() => {
    getEvents()
    getArtists()
  }, [])

//handles submit of searchQuery
  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(`${BASE_URL}/artists/search/${searchQuery}`)
      setSearchResults(res.data)
      setSearchQuery('')
      history.push('/artists/search_results')
    } catch (err) {
      console.log(err)
    }
  }
  //handles changes to search input field
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="App">
      <Header onChange={handleChange} onSubmit={getSearchResults} value={searchQuery}/>
      <main>
        <Switch>
          <Route exact path='/' component={() => <Homepage artists={artists}/>} />
          <Route exact path='/events' component={() => <EventsList events={events} />} />
          <Route exact path='/artists' component={() => <ArtistsList artists={artists} />} />
          <Route exact path='/events/new' component={() => <CreateEvent />} />
          <Route exact path='/artists/new' component={() => <CreateArtist />} />
          <Route exact path='/artists/search_results' component={() => <SearchResults searchResults={searchResults} />} />
          {
            artists.map(artist => (
              <Route path={`/artists/${artist._id}`} component={() => <ArtistPage artist={artist}/>} />
            )
            )}
        </Switch>
      </main>
    </div>
  )
}

export default App;
