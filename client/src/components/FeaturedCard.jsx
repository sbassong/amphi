import { Link } from 'react-router-dom'

const FeaturedCard = ({image, name, id, index}) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <Link className={`feat-card-wrap card-${index}`} to={`/artists/${id}`} >
      <div className='featured-card' style={backgroundStyle}>
          <p className='card-info'>{name}</p>
      </div>
    </Link >
  )
}

export default FeaturedCard