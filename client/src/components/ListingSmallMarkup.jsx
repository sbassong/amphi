import React, { useCallback, useState } from 'react'
import Axios from 'axios'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BASE_URL } from '../globals'


const ListingSmallMarkup = ({ id, artist, date, time, venue, location, name }) => {
  const [favorited, toggleFavorited] = useState(false)

  const likeEvent = useCallback(async () => {
    const newCartItemData = {
      event_name: name,
      date: date,
      time: time,
      venue: venue,
      location: location,
      artist: artist
    }

    try {
      await Axios.post(`${BASE_URL}/cart/new`, newCartItemData)
      toggleFavorited(true)
    } catch (error) {
      throw error
    }
  }, [artist, date, location, name, time, venue])

  const unlikeEvent = useCallback(() => {
    try {
      Axios.delete(`${BASE_URL}/cart/${id}`)
      toggleFavorited(!favorited)
    } catch (error) {
      throw error
    }
  }, [favorited, id])
  
  return (
    <div className='event-list'>
      <section className='e-sec-1'>
        <div className='e-name-wrap'>
          <p className='p-name'>{name}</p>
          <p className='p-loc'>{venue} - {location}</p>
          <p className='p-time'>{date} at {time}</p> 
        </div>

        <div className='e-but-wrap'>
          <div className='e-add-but' label='Add to cart' size='small'>Find tickets</div>
          {
            favorited
              ? <button onClick={() => unlikeEvent()} className='e-fav-but' label='Add to cart' ><MdFavorite /></button>
              : <button onClick={() => likeEvent()} className='e-fav-but' label='Add to cart' ><MdFavoriteBorder /></button>
          }
        </div>
      </section>
    </div>
  )
}

export default ListingSmallMarkup