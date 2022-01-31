import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import Nav from './Nav'

const Header = ({ setFilterQuery, winWidth}) => {

  return (
    <header>
      <NavLink className='logo' to='/'><span>Amphi</span></NavLink>
      <SearchBar setFilterQuery={setFilterQuery} /> 
      <Nav winWidth={winWidth}/>
    </header>
  )
}

export default Header