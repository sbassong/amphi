import React from 'react'

const CartItem = ({ artist, date, time, venue, location, name }) => {
  
  return (
    <div className='listing'>
      <p>{date}</p> 
      <p>{time}</p>
      <h3>{name}</h3>
      <section className='drop-info'>
        <p>{venue}</p>
        <p>{location}</p>
      </section>
    </div>
  )
}

export default CartItem