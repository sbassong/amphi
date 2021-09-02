import React from "react";
import Listing from "../components/Listing";

const FavoritesList = ({favorites}) => {

  const deleteListing = (id) => {
    axios.delete(`${BASE_URL}/events/${id}`)
    .then(res => console.log(res.data))
    window.location.reload()
  }

  return (
    <div>
      {favorites.map(favorite => (
        <
        <button onClick={() => deleteListing(id)} className='delete-button'>Delete</button>
      ))}
    </div>
  )
}