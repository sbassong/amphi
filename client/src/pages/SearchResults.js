// import { useEffect } from 'react'
import ArtistCard from '../components/ArtistCard'


const SearchResults = ({filterQuery, artists}) => {

  return (
    <div>
      <section>
        <h3>Search results:</h3>
        {artists && artists.filter(artist => artist.name.toLowerCase().includes(filterQuery.toLowerCase()) || artist.genre.toLowerCase().includes(filterQuery.toLowerCase())).map(searchResult => (
            <ArtistCard key={searchResult._id} id={searchResult._id} name={searchResult.name} image={searchResult.image}/>
          ))}
      </section>
    </div>
  )
}

export default SearchResults