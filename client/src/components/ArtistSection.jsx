import React from 'react'
import { Card } from 'react-rainbow-components'

const ArtistSection = ({ image, name, description }) => {
  return (
    <div className='artist-section'>
      <Card>
        <div><img className='artist-poster' src={image} alt="" /></div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Card>
  </div>)
}

export default ArtistSection