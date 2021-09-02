import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = ({id, image, name}) => {

  return (
    <div className='artist-card'>
      <Link to={`/artists/${id}`} >
        <img src={image} alt="" />
        <h3>{name}</h3>
      </Link>
    </div>
  )
}

export default ArtistCard