import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useHistory } from 'react-router'
import { Input, Button } from 'react-rainbow-components'

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
          <Input type="text" label="Name" name="event_name" placeholder="Enter event's name" onChange={(e) => updateName(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Genre" name="genre" placeholder="Enter event's genre" onChange={(e) => updateGenre(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Artist" name="artist" placeholder="Enter artist's name" onChange={(e) => updateArtist(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Date" name="date" placeholder="Enter event's date. ex: January 1st, 2022" onChange={(e) => updateDate(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Time" name="time" placeholder="Enter event's start time. ex: 7:00PM" onChange={(e) => updateTime(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Venue" name="venue" placeholder="Enter venue's name" onChange={(e) => updateVenue(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Location" name="location" placeholder="Enter venue's location. ex: Seattle, WA" onChange={(e) => updateLocation(e.target.value)}></Input>
        </div>
        
        <Button className='create-button' type='submit'>Register Event</Button>
      </form>
    </div>
  )
}

export default CreateEvent
