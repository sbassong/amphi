import { Link } from 'react-router-dom'

const FeaturedCard = ({image, name, id}) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <Link className="card-wrapper" to={`/artists/${id}`} >
    <div className='featured-card' style={backgroundStyle}>
        <div className='fg-info'>{name}</div>
    </div>
    </Link >
  )
}

export default FeaturedCard