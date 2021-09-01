import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Listing = ({id, date, time, venue, location, name, onClick }) => {

  const deleteListing = (id) => {
    axios.delete(`${BASE_URL}/events/${id}`)
    .then(res => console.log(res.data))
    window.location.reload()
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
      <button onClick className='tickets-button'>Find Tickets</button>
      <button onClick={() => deleteListing(id)} className='delete-button'>Delete</button>
    </div>
  )
}

export default Listing