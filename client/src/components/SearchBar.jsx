import React from 'react'

const SearchBar = ({onChange, onSubmit}) => {
  return (
    <div className='Search-bar'>
      <form>
        <input className='search-input' type="text" placeholder="Enter artist's name" />
        <button className='search-button'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar