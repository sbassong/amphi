import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdSearch } from "react-icons/md";

const SearchBar = ({ setFilterQuery, winWidth}) => {
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
      <button className='search-button' type='submit' disabled={searchQuery ? false : true}>
        <MdSearch color="white" className='i' />
      </button>
    </form>
  )
}

export default SearchBar