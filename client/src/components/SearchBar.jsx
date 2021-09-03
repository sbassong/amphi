import React from 'react'
import { Input, Button } from 'react-rainbow-components'
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
        <Input onChange={(e) => onChange(e)} value={value} className='search-input' type="text" placeholder="Enter artist's name" icon={<FaSistrix />} style={inputStyles}/>
        <Button className='search-button' type='submit' style={buttonStyles}>Search</Button>
      </form>
    </div>
  )
}

export default SearchBar