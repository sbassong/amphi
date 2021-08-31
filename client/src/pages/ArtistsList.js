import ArtistCard from '../components/ArtistCard'

const ArtistsList = ({artists}) => {

  return (
    <div>
      {artists.map(artist => (
        <ArtistCard key={artist.id} image={artist.image} name={artist.name}/>
      ))}
    </div>
  )
}

export default ArtistsList