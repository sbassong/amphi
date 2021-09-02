import React from 'react'

const FeaturedCard = ({image, name}) => {
  return (
    <div className='featured-card'>
        <div className='featured-card'><img src={image} alt={name} /></div>
        <h2>{name}</h2>
    </div>
  )
}

export default FeaturedCard