import React, { useState, useEffect } from 'react'
import Listing from '../components/Listing'

const EventsList = ({Axios, BASE_URL}) => {
  const [events, setEvents] = useState([])

  
  useEffect(() => {
    const getEvents = async() => {
      try {
        const res = await Axios.get(`${BASE_URL}/events`)
        setEvents(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getEvents()
  }, [Axios, BASE_URL])

  return (
    <div className='events-cont'> 
      {events.length > 0 && events.map(event => (
        <Listing key={event._id} id={event._id} name={event.event_name} venue={event.venue} date={event.date} time={event.time} location={event.location} artist={event.artist}/>
      ))}
    </div>
  )
}

export default EventsList