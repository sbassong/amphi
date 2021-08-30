import FeaturedCard from '../components/FeaturedCard'

const Homepage = (props) => {
  return (
    <div>
      {props.map(artist => (
        <FeaturedCard key= {artist.id} image={artist.image} name={artist.name}/>
      ))}
    </div>
  )
}

export default Homepage