import { Link } from 'react-router-dom'

const FeaturedCard = ({image, name, id}) => {
  return (
    <Link to={`/artists/${id}`} >
    <div className='featured-card'>
        <div className='featured-cont'><img src={image} alt={name} /></div>
        <h1 className='featured-h1' >{name}</h1>
    </div>
    </Link >
  )
}

export default FeaturedCard