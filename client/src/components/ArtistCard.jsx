import React from 'react'

const ArtistCard = ({image, name, events}) => {
  return (
    <div className='artist-card'>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export default ArtistCard