import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MagnifyingGlass } from "phosphor-react";
import '../styles/SearchBar.css';

const SearchBar = ({ setFilterQuery}) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleQuerySubmit = async (e) => {
    await e
    e.preventDefault()
    navigate('/artists/search_results')
    setSearchQuery('')
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setFilterQuery(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleQuerySubmit(e)} className='search-bar'>
      <input onChange={(e) => handleChange(e)} value={searchQuery} className='search-input' type="search" placeholder="Search artist" />
      <button className='search-button' type='submit'>
        <MagnifyingGlass color="white" size={18} weight="bold" className='i' />
      </button>
    </form>
  )
}

export default SearchBar