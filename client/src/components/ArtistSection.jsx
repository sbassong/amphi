import React from 'react'

const ArtistSection = ({ image, name, description }) => {
  return (
    <div className='artist-section'>
      <div className='poster-wrap'><img className='artist-poster-img' src={image} alt="" /></div>
      
      <div className='artist-description'>
        <p className='artist-name-p'>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ArtistSection