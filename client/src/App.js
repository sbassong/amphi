import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
import Artistpage from './pages/Artistpage'
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'


const App = () => {
  const [artists, setArtists] = useState([])
  const [events, setEvents] = useState([])

  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
    } catch (error) {
      
    }
  }
  //getArtists

  useEffect(() => {
    // getEvents()
    // getArtists()
  }, [])
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={() => {<Homepage />}} />
          <Route exact path='/events' component={() => {<EventsList/>}} />
          <Route exact path='/artists' component={() => {<ArtistsList />}} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
