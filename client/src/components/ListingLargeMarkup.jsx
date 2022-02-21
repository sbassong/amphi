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
      <section className='e-sec-2'>
        <p className='p-date'>{date}</p> 
        <p className='p-time'>{time}</p> 
      </section>

      <section className='e-sec-1'>
        <div className='e-name-wrap'>
          <p className='p-name'>{name}</p>
          <p className='p-loc'>{venue} - {location}</p>
        </div>

        <div className='e-but-wrap'>
          <button onClick={() => addToCart()} className='e-add-but' label='Add to cart' size='small'>Find tickets</button>
        </div>
      </section>

    </div>
  )
}

export default ListingLargeMarkup