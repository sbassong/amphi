import React from 'react'

const Listing = ({image, date, time, venue, location, name, onClick }) => {
  
  return (
    <div className='Search-bar'>
      <img src={image} alt={name} />
      <p>{date}</p> 
      <p>{time}</p>
      <h3>{name}</h3>
      <section className='drop-info'>
        <p>{venue}</p>
        <p>{location}</p>
      </section>
      <button onClick className='tickets-button'>Find Tickets</button>
    </div>
  )
}

export default Listing