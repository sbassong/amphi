import ArtistCard from '../components/ArtistCard'
import { Link } from 'react-router-dom'

const ArtistsList = ({artists}) => {

  return (
    <div>
      {artists.map(artist => (
        <Link to={`/artists/${artist._id}`} >
          <ArtistCard key={artist._id} id={artist._id} image={artist.image} name={artist.name}/>
        </Link>
      ))}
    </div>
  )
}

export default ArtistsList