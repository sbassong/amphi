import React, { useCallback, useState } from 'react'
import Axios from 'axios'
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";
import { BASE_URL } from '../globals'


const ListingLargeMarkup = ({ id, artist, date, time, venue, location, name}) => {
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
      toggleFavorited(!favorited)
    } catch (error) {
      throw error
    }
  }, [artist, date, favorited, location, name, time, venue])

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
          <button onClick='' className='e-add-but' label='Add to cart' size='small'>Find tickets</button>
          {
            favorited === true
            ? <button onClick={() => unlikeEvent()} className='e-fav-but' label='remove from favorites' ><MdFavorite /></button>
            : <button onClick={() => likeEvent()} className='e-fav-but' label='add to favorites' ><MdFavoriteBorder /></button>
          }
        </div>
      </section>

    </div>
  )
}

export default ListingLargeMarkup