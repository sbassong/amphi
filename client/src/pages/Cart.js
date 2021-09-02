import React from "react";
import CartItem from "../components/CartItem";
import axios from 'axios'
import { BASE_URL } from '../globals'

const Cart = ({cartItems}) => {

  const deleteItem = (id) => {
    axios.delete(`${BASE_URL}/cart/${id}`)
    .then(res => console.log(res.data))
    window.location.reload()
  }

  return (
    <div>
      <h2>Cart Items:</h2>
      {cartItems.map(item => (
        <div>
          <CartItem key={item._id} id={item._id} name={item.event_name} venue={item.venue} date={item.date} time={item.time} location={item.location} artist={item.artist} />
          <button onClick={() => deleteItem(item._id)} className='delete-button'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart