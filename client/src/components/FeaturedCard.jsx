import React from 'react'

const FeaturedCard = ({image, name}) => {
  return (
    <div className='featured-card'>
        <div className='featured-cont'><img src={image} alt={name} /></div>
        <h1 className='featured-h1' >{name}</h1>
    </div>
  )
}

export default FeaturedCard