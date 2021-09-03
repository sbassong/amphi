import FeaturedCard from '../components/FeaturedCard'

const Homepage = ({artists}) => {

  return (
    <div className='homepage'>

      <h1 className='left-h1' >Featured Rock Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'rock' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <h1 className='left-h1'>Featured Hip Hop Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'hip hop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      <h1 className='left-h1'>Featured Pop Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre === 'pop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name}/>
        ))}
      </div>

      
    </div>
  )
}

export default Homepage