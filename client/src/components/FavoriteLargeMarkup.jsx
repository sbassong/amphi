import React from 'react'
import { MdFavorite } from "react-icons/md";


const FavoriteLargeMarkup = ({ unlikeEv, date, time, venue, location, name }) => {

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
          <div className='e-add-but' label='Add to cart' size='small'>Find tickets</div>
          <button onClick={unlikeEv} className='e-fav-but' label='Add to cart' ><MdFavorite /></button>
        </div>
      </section>

    </div>
  )
}

export default FavoriteLargeMarkup