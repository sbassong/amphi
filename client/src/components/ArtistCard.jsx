import React from 'react'

const ArtistCard = ({image, name, events}) => {
  <div className='artist-card'>
    <img src={name} alt="" />
    <h3>{name}</h3>
    <p>{events.length}</p>
  </div>
}

export default ArtistCard