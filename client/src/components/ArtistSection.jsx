import React from 'react'

const ArtistSection = ({ image, name, description }) => {
  return (
    <div className='artist-section'>
      <div className='artist-poster'><img className='artist-poster' src={image} alt="" /></div>
        <div >
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
  </div>)
}

export default ArtistSection