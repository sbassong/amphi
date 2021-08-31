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
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'


const App = () => {
  const [artists, setArtists] = useState([])
  const [events, setEvents] = useState([])
  const [eventData, updateEventData] = useState({})
  const [artistData, updateArtistData] = useState({})

  //handleChange for artist
  const handleArtistFormChange = (index, e) => {
    const values = [...artistData]
    switch (e.target.name) {
      case 'name':
        values[index].name = e.target.value;
        break;
      case 'description':
        values[index].description = e.target.value;
        break;
      case 'image':
        values[index].image = e.target.value;
        break;
      case 'genre':
        values[index].genre = e.target.value;
        break;
      default:
        break;
    }
    updateArtistData(values)
    // let name = e.target.name
    // let value = e.target.value
    // updateArtistData(...artistData, {[name]: value})
  }
  //handleSubmit for artist
  const handleArtistSubmit = async (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/artists/new`, artistData)
    .then(function (res) {
      // console.log(res)
      const newArtist = res.data.results
      // console.log(newPost)
      setEvents([newArtist, ...artists])
    })
    .catch(function (error) {
      console.log(error)
    })
    updateArtistData({})
  }

  //handleChange for event
  const handleEventFormChange = (index, e) => {
    const values = [...eventData]
    switch (e.target.name) {
      case 'event_name':
        values[index].event_name = e.target.value;
        break;
      case 'artist':
        values[index].artist = e.target.value;
        break;
      case 'date':
        values[index].date = e.target.value;
        break;
      case 'genre':
        values[index].genre = e.target.value;
        break;
      case 'location':
        values[index].location = e.target.value;
        break;
      case 'time':
        values[index].time = e.target.value;
        break;
      case 'venue':
        values[index].venue = e.target.value;
        break;
      default:
        break;
    }
    updateEventData(values)
    // let name = e.target.name
    // let value = e.target.value
    // updateEventData(...eventData, {[name]: value})
  }
  //handleSubmit for event
  const handleEventSubmit = async (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/events/new`, eventData)
    .then(function (res) {
      // console.log(res)
      const newEvent = res.data.results
      // console.log(newPost)
      setEvents([newEvent, ...events])
    })
    .catch(function (error) {
      console.log(error)
    })
    updateEventData({})
  }


  //Events functionality
  //getEvents
  const getEvents = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/events`)
      console.log(res.data)
      setEvents([...events, res.data])
    } catch (error) {
      console.log(error)
    }
  }

  //getArtists
  const getArtists = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/artists`)
      console.log(res.data)
      setArtists([...artists, res.data])
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
          <Route exact path='/events/new' component={() => <CreateEvent onChange={handleEventFormChange} onSubmit={handleEventSubmit} value={eventData} />} />
          <Route exact path='/artists/new' component={() => <CreateArtist onChange={handleArtistFormChange} onSubmit={handleArtistSubmit} value={artistData} />} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
