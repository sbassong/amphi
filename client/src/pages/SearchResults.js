import React from 'react'
import ArtistCard from '../components/ArtistCard'

const SearchResults = ({searchResults}) => {
  return (
    <div>
      <section>
        <h3>Search results:</h3>
        {searchResults.length > 0 && searchResults.map(searchResult => (
            <ArtistCard key={searchResult._id} id={searchResult._id} name={searchResult.name} image={searchResult.image}/>
          ))}
      </section>
    </div>
  )
}

export default SearchResults