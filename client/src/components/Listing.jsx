import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Button } from 'react-rainbow-components'

const Listing = ({ artist, date, time, venue, location, name }) => {
  const [artistData, setArtist] = useState({})

  const addToCart = () => {
    const newItemData = {
      event_name: name,
      date: date,
      time: time,
      venue: venue,
      location: location,
      artist: artist
    }
    
    try {
      axios.post(`${BASE_URL}/cart/new`, newItemData)
    } catch (error) {
      console.log(error)
    }
  }

  const getArtistByName = async(name) => {
    try {
      const res = await axios.get(`${BASE_URL}/artists/artist/${name}`)
      setArtist(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getArtistByName(artist)
  }, [])

  const buttonStyles = {
    width: 50,
  }
  
  return (
    <div className='listing'>
      <div className='listing-img-cont' ><img src={artistData.image} alt={artistData.name} /></div>
      <section>
        <section className='listing-sec-1'>
          <h2 className='listing-h2'>{name}</h2>
        </section>
        <section className='listing-sec-2'>
          <p>{date}</p>
          <p>{time}</p> 
          <p>{venue} </p>
          <p>{location}</p>
          <Button onClick={() => addToCart()} className='add-button' styles={buttonStyles}>Add To Cart</Button>
        </section>
      </section>
    </div>
  )
}

export default Listing