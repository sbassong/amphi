import ArtistCard from '../components/ArtistCard'

const ArtistsList = (props) => {

  return (
    <div>
      {props.map(artist => (
        <ArtistCard key={artist.id} image={artist.image} name={artist.name} events={artist.events}/>
      ))}
    </div>
  )
}

export default ArtistsList