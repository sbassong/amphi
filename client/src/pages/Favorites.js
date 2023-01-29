import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import { BASE_URL } from '../globals'
import FavoriteLargeMarkup from '../components/FavoriteLargeMarkup'
import FavoriteSmallMarkup from '../components/FavoriteSmallMarkup'


const Favorites = ({winWidth}) => {
  const [cartItems, updateCart] = useState([])

  
  const unlikeEvent = useCallback((id) => {
    try {
      Axios.delete(`${BASE_URL}/cart/${id}`)
      let updatedCartItems = cartItems.filter(item => item._id !== id)
      updateCart(updatedCartItems)
    } catch (error) {
      throw error
    }
  }, [cartItems])
  
  useEffect(() => {
    const getItems = async() => {
      try {
        const res = await Axios.get(`${BASE_URL}/cart`)
        updateCart(res.data)
      } catch (error) {
        throw error
      }
    }
    getItems() 
  }, [])

  
  return (
    <div className='cart'>
      <h1 className='left-h1 upcoming-e'>Your favorite events:</h1>
      <div className='events-cont'>
        {cartItems !== [] && cartItems.map(event => (
          winWidth >= 600
          ? <FavoriteLargeMarkup key={event.event_id} unlikeEv={() => unlikeEvent(event._id)} id={event._id} name={event.event_name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
          : <FavoriteSmallMarkup key={event.event_id} unlikeEv={() => unlikeEvent(event._id)} id={event._id} name={event.event_name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
        ))}
      </div>
    </div>
  )
}

export default Favorites