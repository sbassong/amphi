import React from 'react'

const CartItem = ({ artist, date, time, venue, location, name }) => {
  
  return (
    <div className='listing'>
      <section>
        <section className='listing-sec-1'>
          <h2 className='listing-h2'>{name}</h2>
        </section>
        <section className='listing-sec-2'>
          <p>{date}</p>
          <p>{time}</p>
          <p>{venue} </p>
          <p>{location}</p>
        </section>
      </section>
    </div>
  )
}

export default CartItem