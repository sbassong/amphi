import FeaturedCard from '../components/FeaturedCard'

const Homepage = ({artists}) => {

  return (
    <div className='homepage'>

      <h1 className='left-h1' >Featured Rock Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre.toLowerCase() === 'rock' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name} id={artist._id}/>
        ))}
      </div>

      <h1 className='left-h1'>Featured Hip Hop Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre.toLowerCase() === 'hip hop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name} id={artist._id}/>
        ))}
      </div>

      <h1 className='left-h1'>Featured Pop Artists:</h1>
      <div className='featured'>
        {artists.map(artist => (
          artist.genre.toLowerCase() === 'pop' && <FeaturedCard key={artist._id} image={artist.image} name={artist.name} id={artist._id}/>
        ))}
      </div>

      
    </div>
  )
}

export default Homepage