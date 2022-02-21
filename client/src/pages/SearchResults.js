import ArtistCard from '../components/ArtistCard'


const SearchResults = ({filterQuery, artists}) => {
  const styles = {
    marginTop: "1vmax"
  }

  return (
    <div className='search-results-page'>
      <h1 className='left-h1' style={styles}>Search results:</h1>
      <section className='artist-container'>
        {artists && artists.filter(artist => artist.name.toLowerCase().includes(filterQuery.toLowerCase()) || artist.genre.toLowerCase().includes(filterQuery.toLowerCase())).map(searchResult => (
            <ArtistCard key={searchResult._id} id={searchResult._id} name={searchResult.name} image={searchResult.image}/>
          ))}
      </section>
    </div>
  )
}

export default SearchResults