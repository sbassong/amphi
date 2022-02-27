import FeaturedCard from './FeaturedCard'

const FeaturedSection = ({artists, category}) => {

  return (  
    <section className='featured-section'>
      <h1 className='left-h1'>Featured {category} artists</h1>
      <div className='featured'>
        {
          artists.length > 0 && artists.filter(artist => artist.genre.toLowerCase() === category).map((artist, index)=> (
            index < 4 && <FeaturedCard index={index} key={artist._id} image={artist.image} name={artist.name} id={artist._id} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedSection