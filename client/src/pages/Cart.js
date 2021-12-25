import { useState, useEffect } from 'react'
import CartItem from "../components/CartItem";
import axios from 'axios'
import { BASE_URL } from '../globals'

const Cart = () => {
  const [cartItems, updateCart] = useState([])
  const [updated, setUpdated] = useState(false)


  const getItems = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/cart`)
      updateCart(res.data)
      // setUpdated(false)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cart/${id}`)
      let updatedCartItems = cartItems.filter(item => item._id !== id)
      updateCart(updatedCartItems)
      setUpdated(true)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getItems() 
  }, [updated])

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.length > 0 && cartItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item._id} id={item._id} name={item.event_name} venue={item.venue} date={item.date} time={item.time} location={item.location} artist={item.artist} />
          <button onClick={() => deleteItem(item._id)} className='delete-button'>remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart