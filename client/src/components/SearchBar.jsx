import React from 'react'

const SearchBar = ({onChange, onSubmit, value}) => {
  return (
    <div className='search-bar'>
      <form onSubmit={(e) => onSubmit(e)} className='search-form'>
        <input onChange={(e) => onChange(e)} value={value} className='search-input' type="text" placeholder="Enter artist's name" />
        <button className='search-button'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar