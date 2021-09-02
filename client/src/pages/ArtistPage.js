import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Listing from '../components/Listing'
import ArtistSection from '../components/ArtistSection'

const ArtistPage = ({artist}) => {
  const [artistEvents, updateEvents] = useState([])

  //uses artist.name to find events by artist that matches event.artist
  const getEventsByArtistName = async (artistName) => {
    try {
      const res = await axios.get(`${BASE_URL}/artists/id/${artistName}`)
      updateEvents(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getEventsByArtistName(artist.name)
  }, [artist.name])

  return (
    <div>
      <ArtistSection image={artist.image} name={artist.name} description={artist.description}/>
      <div>
        {artistEvents !== [] && artistEvents.map(event => (
          <Listing key={event.event_id} id={event._id} name={event.name} venue={event.venue} date={event.date} time={event.time} location={event.location} />
        ))}
      </div>
    </div>
  )
}

export default ArtistPage