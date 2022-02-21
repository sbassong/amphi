import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ListingSmallMarkup = ({ artist, date, time, venue, location, name}) => {

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
      <section className='e-sec-small-1'>
        <p className=''>{name}</p>
        <p>{venue} - {location}</p>
        <p>{date} at {time}</p> 
      </section>

      <button onClick={() => addToCart()} className='e-add-but' label='Add to cart' size='small'>Add to Card</button>
    </div>
  )
}

export default ListingSmallMarkup