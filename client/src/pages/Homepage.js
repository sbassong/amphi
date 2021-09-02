import FeaturedCard from '../components/FeaturedCard'

const Homepage = ({artists}) => {

  return (
    <div className='homepage'>

      <div className='featured'>
        <h3>Featured Rock Artists:</h3>
        {artists.map(artist => (
          artist.genre === 'rock' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <div className='featured'>
        <h3>Featured Hip Hop Artists:</h3>
        {artists.map(artist => (
          artist.genre === 'hip hop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <div className='featured'>
        <h3>Featured Pop Artists:</h3>
        {artists.map(artist => (
          artist.genre === 'pop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      
    </div>
  )
}

export default Homepage