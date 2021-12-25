import { useState, useEffect } from 'react'
import CartItem from "../components/CartItem";
import axios from 'axios'
import { BASE_URL } from '../globals'

const Cart = () => {
  const [cartItems, updateCart] = useState([])


  const getItems = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/cart`)
      updateCart(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = (id) => {
    try {
      axios.delete(`${BASE_URL}/cart/${id}`)
      let updatedCartItems = cartItems.filter(item => item._id !== id)
      updateCart(updatedCartItems)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getItems() 
  }, [])

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.length > 0 && cartItems.map((item, index) => (
        <div className='cart-cont'>
          <CartItem key={item._id} id={item._id} name={item.event_name} venue={item.venue} date={item.date} time={item.time} location={item.location} artist={item.artist} />
          <button key={index} onClick={() => deleteItem(item._id)} className='delete-button'>remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart