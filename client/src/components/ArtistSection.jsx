import React from 'react'

const ArtistSection = ({ image, name, events, description }) => {
  <div className='artist-section'>
    <div><img src={name} alt="" /></div>
    <div>
      <h3>{name}</h3>
      <p>{events.length}</p>
      <p>{description}</p>
    </div>
  </div>
}

export default ArtistSection