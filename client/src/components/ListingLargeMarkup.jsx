import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ListingLargeMarkup = ({ artist, date, time, venue, location, name}) => {

  const addToCart = async () => {
    const newCartItemData = {
      event_name: name,
      date: date,
      time: time,
      venue: venue,
      location: location,
      artist: artist
    }
    
    try {
      await axios.post(`${BASE_URL}/cart/new`, newCartItemData)
    } catch (error) {
      throw error
    }
  }
  
  return (
    <div className='event-list'>
      <section className='e-sec-1'>
        <p>{date}</p> 
        <p>{time}</p> 
      </section>

      <section className='e-sec-2'>
        <p className=''>{name}</p>
        <p>{venue} - {location}</p>
      </section>

      <button onClick={() => addToCart()} className='e-add-but' label='Add to cart' size='small'>Add to Card</button>
    </div>
  )
}

export default ListingLargeMarkup