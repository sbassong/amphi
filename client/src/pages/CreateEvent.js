import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateEvent = () => {
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
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => handleEventSubmit(e)}>
        <div>
          <h4>Name:</h4>
          <input type="text" name="event_name" placeholder="Enter event's name" onChange={(e) => updateName(e.target.value)}></input>
        </div>
        <div>
          <h4>Genre:</h4>
          <input type="text" name="genre" placeholder="Enter event's genre" onChange={(e) => updateGenre(e.target.value)}></input>
        </div>
        <div>
          <h4>Artist:</h4>
          <input type="text" name="artist" placeholder="Enter artist's name" onChange={(e) => updateArtist(e.target.value)}></input>
        </div>
        <div>
          <h4>Date:</h4>
          <input type="text" name="date" placeholder="Enter event's date" onChange={(e) => updateDate(e.target.value)}></input>
        </div>
        <div>
          <h4>Time:</h4>
          <input type="text" name="time" placeholder="Enter event's start time" onChange={(e) => updateTime(e.target.value)}></input>
        </div>
        <div>
          <h4>Venue:</h4>
          <input type="text" name="venue" placeholder="Enter venue's name" onChange={(e) => updateVenue(e.target.value)}></input>
        </div>
        <div>
          <h4>Location:</h4>
          <input type="text" name="location" placeholder="Enter venue's location" onChange={(e) => updateLocation(e.target.value)}></input>
        </div>
        
        <button type='submit'>Register Event</button>
      </form>
    </div>
  )
}

export default CreateEvent