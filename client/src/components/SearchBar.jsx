import React from 'react'

const SearchBar = ({onChange, onSubmit}) => {
  return (
    <div className='Search-bar'>
      <input className='search-input' type="text" placeholder="Enter artist's name" />
      <button className='search-button'>Search</button>
    </div>
  )
}

export default SearchBar