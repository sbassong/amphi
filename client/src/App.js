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
import Cart from './pages/Cart';


const App = () => {
  const history = useHistory()
  const [artists, setArtists] = useState([])
  const [artistsUpdated, toggleArtists] = useState(false)
  const [events, setEvents] = useState([])
  const [eventsUpdated, toggleEvents] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [cartItems, updateCart] = useState([])
  const [itemsUpdated, toggleItems] = useState(false)
  const [itemDeleted, toggleDeleted] = useState(false)

  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      setEvents(res.data)
      toggleEvents(false)
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
  const getItems = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/cart`)
      updateCart(res.data)
      toggleItems(false)
      toggleDeleted(false)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getEvents()
  }, [eventsUpdated])

  useEffect(() => {
    getArtists()    
  }, [artistsUpdated])

  useEffect(() => {
    getItems()
  }, [itemsUpdated, itemDeleted])


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
            <Route exact path='/events' component={() => <EventsList events={events} toggleItems={toggleItems}/>} />
            <Route exact path='/artists' component={() => <ArtistsList artists={artists} />} />
            <Route exact path='/cart' component={() => <Cart cartItems={cartItems} toggleDeleted={toggleDeleted}/>} />
            <Route exact path='/events/new' component={() => <CreateEvent toggleEvents={toggleEvents}/>} />
            <Route exact path='/artists/new' component={() => <CreateArtist toggleArtists={toggleArtists}/>} />
            <Route exact path='/artists/search_results' component={() => <SearchResults searchResults={searchResults} />} />
            {
              artists.map(artist => (
                <Route path={`/artists/${artist._id}`} component={() => <ArtistPage artist={artist} toggleItems={toggleItems}/>} />
              )
              )}
          </Switch>
        </main>
      </div>
  )
}

export default App;
