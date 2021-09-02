import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useHistory } from 'react-router'

const CreateEvent = () => {
  const history = useHistory()
  const [events, setEvents] = useState([])

  const [event_name, updateName] = useState('')
  const [genre, updateGenre] = useState('')
  const [date, updateDate] = useState('')
  const [time, updateTime] = useState('')
  const [venue, updateVenue] = useState('')
  const [location, updateLocation] = useState('')
  const [artist, updateArtist] = useState('')

  //handleSubmit for event
  const handleEventSubmit = (e) => {
    e.preventDefault()
    
    const newEventData = {
      event_name: event_name,
      genre: genre,
      date: date,
      time: time,
      venue: venue,
      location: location,
      artist: artist
    }

    axios.post(`${BASE_URL}/events/new`, newEventData)
    .then(function (res) {
      const newEvent = res.data.results
      setEvents([newEvent, ...events])
      history.push('/')
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => handleEventSubmit(e)}>
        <div>
          <label>Name:</label>
          <input type="text" name="event_name" placeholder="Enter event's name" onChange={(e) => updateName(e.target.value)}></input>
        </div>

        <div>
          <label>Genre:</label>
          <input type="text" name="genre" placeholder="Enter event's genre" onChange={(e) => updateGenre(e.target.value)}></input>
        </div>

        <div>
          <label>Artist:</label>
          <input type="text" name="artist" placeholder="Enter artist's name" onChange={(e) => updateArtist(e.target.value)}></input>
        </div>

        <div>
          <label>Date:</label>
          <input type="text" name="date" placeholder="Enter event's date. ex: January 1st, 2022" onChange={(e) => updateDate(e.target.value)}></input>
        </div>

        <div>
          <label>Time:</label>
          <input type="text" name="time" placeholder="Enter event's start time. ex: 7:00PM" onChange={(e) => updateTime(e.target.value)}></input>
        </div>

        <div>
          <label>Venue:</label>
          <input type="text" name="venue" placeholder="Enter venue's name" onChange={(e) => updateVenue(e.target.value)}></input>
        </div>

        <div>
          <label>Location:</label>
          <input type="text" name="location" placeholder="Enter venue's location. ex: Seattle, WA" onChange={(e) => updateLocation(e.target.value)}></input>
        </div>
        
        <button type='submit'>Register Event</button>
      </form>
    </div>
  )
}

export default CreateEvent