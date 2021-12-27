import { Link } from 'react-router-dom'

const ArtistCard = ({id, image, name}) => {
  return (
    <Link to={`/artists/${id}`} >
        <div className='featured-card'>
          <div className='featured-cont'><img src={image} alt="" /></div>
          <h1 className='featured-h1'>{name}</h1>
      </div>
    </Link>
  )
}

export default ArtistCard