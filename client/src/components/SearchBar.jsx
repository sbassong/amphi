import React from 'react'
import { FaSistrix } from 'react-icons/fa'

const SearchBar = ({onChange, onSubmit, value}) => {
  const inputStyles = {
    width: 700,
  };

  const buttonStyles = {
    width: 100,
  }

  return (
    <div className='search-bar'>
      <form onSubmit={(e) => onSubmit(e)} className='search-form'>
        <input onChange={(e) => onChange(e)} value={value} className='search-input' type="text" placeholder="Enter artist's name" icon={<FaSistrix />} style={inputStyles}/>
        <button className='search-button' type='submit' style={buttonStyles}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar