import ArtistCard from '../components/ArtistCard'

const ArtistsList = ({artists}) => {
  return (
    <div className='artist-container'>
      {artists.map(artist => (
          <ArtistCard key={artist._id} id={artist._id} image={artist.image} name={artist.name}/>
      ))}
    </div>
  )
}

export default ArtistsList