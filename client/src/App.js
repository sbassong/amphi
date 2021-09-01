import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
import ArtistPage from './pages/ArtistPage'
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'


const App = () => {
  const [artists, setArtists] = useState([])
  const [events, setEvents] = useState([])

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


  useEffect(() => {
    getEvents()
    getArtists()
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={() => <Homepage artists={artists}/>} />
          <Route exact path='/events' component={() => <EventsList events={events} />} />
          <Route exact path='/artists' component={() => <ArtistsList artists={artists} />} />
          <Route exact path='/events/new' component={() => <CreateEvent />} />
          <Route exact path='/artists/new' component={() => <CreateArtist />} />
          {
            artists.map(artist => (
              <Route path={`/artists/artistId`} component={() => <ArtistPage artist={artist}/>} />
            )
            )}
        </Switch>
      </main>
    </div>
  )
}

export default App;
