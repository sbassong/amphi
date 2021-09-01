import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Listing from '../components/Listing'
import ArtistSection from '../components/ArtistSection'

const ArtistPage = ({artist}) => {
  const [selectedArtist, updateArtist] = useState({})
  const [artistEvents, updateEvents] = useState([])

  //getArtistById
  const getArtistById = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/artists/${id}`)
      console.log(res.data)
      updateArtist(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  //getEventByArtistName
    const getEventsByArtistName = async (artistName) => {
    try {
      const res = await axios.get(`${BASE_URL}/artists/id/${artistName}`)
      console.log(res.data)
      updateEvents(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArtistById(artist._id)
    getEventsByArtistName(selectedArtist.name)
  }, [])

  return (
    <div>
      <ArtistSection image={selectedArtist.image} name={selectedArtist.name} description={selectedArtist.description}/>
      <div>
        {artistEvents !== [] && artistEvents.map(event => (
          <Listing key={event.event_id} id={event._id} name={event.name} venue={event.venue} date={event.date} time={event.time} location={event.location} />
        ))}
      </div>
    </div>
  )
}

export default ArtistPage