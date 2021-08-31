import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
// import Artistpage from './pages/Artistpage'
// import CreateArtist from './pages/CreateArtist'
// import CreateEvent from './pages/CreateEvent'


const App = () => {
  const [artists, setArtists] = useState([])
  const [events, setEvents] = useState([])
  const [eventData, updateEventData] = useState({})
  const [artistData, updateArtistData] = useState({})

  //handleChange for artist
  const handleArtistFormChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    updateArtistData(...artistData, {[name]: value})
  }
  //handleSubmit for artist
  const handleArtistSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post(`${BASE_URL}/artists/new`, artistData)
    //something else happens here?
    updateArtistData({})
  }

  //handleChange for event
  const handleEventFormChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    updateArtistData(...artistData, {[name]: value})
  }
  //handleSubmit for event
  const handleEventSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post(`${BASE_URL}/event/new`, eventData)
    //something else happens here?
    updateEventData({})
  }


  //Events functionality
  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      console.log(res.data)
      setEvents(...events, res.data)
    } catch (error) {
      console.log(error)
    }
  }

  //getArtists
  const getArtists = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/artists`)
      console.log(res.data)
      setArtists(...artists, res.data)
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
        </Switch>
      </main>
    </div>
  )
}

export default App;
