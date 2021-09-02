import React from 'react'
import { Card } from 'react-rainbow-components'

const FeaturedCard = ({image, name}) => {
  return (
    <div className='featured-card'>
      <Card>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Card>
    </div>
  )
}

export default FeaturedCard