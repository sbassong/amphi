import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-rainbow-components'

const ArtistCard = ({id, image, name}) => {
  return (
    <div className='artist-card'>
      <Link to={`/artists/${id}`} >
        <Card>
          <img src={image} alt="" />
          <h3>{name}</h3>
        </Card>
      </Link>
    </div>
  )
}

export default ArtistCard