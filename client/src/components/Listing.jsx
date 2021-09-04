import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Button } from 'react-rainbow-components'

const Listing = ({ artist, date, time, venue, location, name, toggleItems}) => {

  const addToCart = async () => {
    const newItemData = {
      event_name: name,
      date: date,
      time: time,
      venue: venue,
      location: location,
      artist: artist
    }
    
    try {
      await axios.post(`${BASE_URL}/cart/new`, newItemData)
      toggleItems(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='listing'>
      <section>
        <section className='listing-sec-1'>
          <h2 className='listing-h2'>{name}</h2>
        </section>
        <section className='listing-sec-2'>
          <p>{artist}</p>
          <p>{date} at {time}</p> 
          <p>{venue} </p>
          <p>{location}</p>
          <Button onClick={() => addToCart()} className='add-button' label='Add to cart' size='small'></Button>
        </section>
      </section>
    </div>
  )
}

export default Listing