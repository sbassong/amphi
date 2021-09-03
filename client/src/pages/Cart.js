import React from "react";
import CartItem from "../components/CartItem";
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Button } from 'react-rainbow-components'

const Cart = ({cartItems}) => {

  const deleteItem = (id) => {
    axios.delete(`${BASE_URL}/cart/${id}`)
    .then(res => console.log(res.data))
    window.location.reload()
  }

  return (
    <div className='cart'>
      <h1>Cart Items:</h1>
      {cartItems.map(item => (
        <div className='cart-cont'>
          <CartItem key={item._id} id={item._id} name={item.event_name} venue={item.venue} date={item.date} time={item.time} location={item.location} artist={item.artist} />
          <Button onClick={() => deleteItem(item._id)} className='delete-button'>Remove</Button>
        </div>
      ))}
    </div>
  )
}

export default Cart