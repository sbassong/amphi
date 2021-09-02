import React from 'react'

const ArtistSection = ({ image, name, description }) => {
  return (
    <div className='artist-section'>
        <div><img className='artist-poster' src={image} alt="" /></div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
  </div>)
}

export default ArtistSection