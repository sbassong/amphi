import { Link } from 'react-router-dom'

const FeaturedCard = ({image, name, id}) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    width: '100%',
    height: 'auto'
  }

  return (
    <Link to={`/artists/${id}`} >
    <div className='featured-card'>
        <div className='bg-img' style={backgroundStyle}></div>
        <div className='fg-info'>{name}</div>
    </div>
    </Link >
  )
}

export default FeaturedCard