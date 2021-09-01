import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = ({id, image, name}) => {

  return (
    <div className='artist-card'>
      <NavLink to={`/artists/${id}`} >
        <img src={image} alt="" />
        <h3>{name}</h3>
      </NavLink>
    </div>
  )
}

export default ArtistCard