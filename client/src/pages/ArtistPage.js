import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ListingLargeMarkup from '../components/ListingLargeMarkup'
import ListingSmallMarkup from '../components/ListingSmallMarkup'
import ArtistSection from '../components/ArtistSection'

const ArtistPage = ({artist, winWidth}) => {
  const [artistEvents, updateEvents] = useState([])

  const getEventsByArtistName = useCallback(async (artistName) => {
    try {
      const res = await axios.get(`${BASE_URL}/artists/id/${artistName}`)
      updateEvents(res.data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  useEffect(() => {
    getEventsByArtistName(artist.name)
  }, [artist.name, getEventsByArtistName])

  return (
    <div className='artist-page'>
      <ArtistSection image={artist.image} name={artist.name} description={artist.description}/>
      <h1 className='left-h1 upcoming-e'>All upcoming events:</h1>
      <div className='events-cont'>
        {artistEvents !== [] && artistEvents.map(event => (
          winWidth >= 600
          ? <ListingLargeMarkup key={event.event_id} id={event._id} name={event.event_name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
          : <ListingSmallMarkup key={event.event_id} id={event._id} name={event.event_name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
        ))}
      </div>
    </div>
  )
}

export default ArtistPage