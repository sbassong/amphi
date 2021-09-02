import FeaturedCard from '../components/FeaturedCard'

const Homepage = ({artists}) => {

  return (
    <div className='homepage'>

      <h2 className='left-h2' >Featured Rock Artists:</h2>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'rock' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <h2 className='left-h2'>Featured Hip Hop Artists:</h2>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'hip hop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <h2 className='left-h2'>Featured Pop Artists:</h2>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'pop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      
    </div>
  )
}

export default Homepage