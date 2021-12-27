import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSistrix } from 'react-icons/fa'

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
    <div className='search-bar'>
      <form onSubmit={(e) => handleQuerySubmit(e)} className='search-form'>
        <input onChange={(e) => handleChange(e)} value={searchQuery} className='search-input' type="text" placeholder="Enter artist's name" icon={<FaSistrix />} />
        <button className='search-button' type='submit' >Search</button>
      </form>
    </div>
  )
}

export default SearchBar