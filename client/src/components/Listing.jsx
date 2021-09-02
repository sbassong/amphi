import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Listing = ({ artist, date, time, venue, location, name }) => {

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
  
  return (
    <div className='listing'>
      <p>{date}</p> 
      <p>{time}</p>
      <h3>{name}</h3>
      <section className='drop-info'>
        <p>{venue}</p>
        <p>{location}</p>
      </section>
      <button onClick={() => addToCart()} className='delete-button'>Add To Cart</button>
    </div>
  )
}

export default Listing