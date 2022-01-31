import FeaturedCard from './FeaturedCard'

const FeaturedSection = ({artists, category}) => {

  return (  
    <section className='featured-section'>
      <h1 className='left-h1'>Featured Hip Hop Artists:</h1>
      <div className='featured'>
        {
          artists.length > 0 && artists.map(artist => (
            artist.genre.toLowerCase() === category && <FeaturedCard key={artist._id} image={artist.image} name={artist.name} id={artist._id} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedSection