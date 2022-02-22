import { NavLink } from 'react-router-dom'
import '../styles/HamburgerMenu.css';

const menuMarkup = (
    <>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
      <ul class="menu">
        <li><NavLink to='/artists'>Artists</NavLink></li>
        <li><NavLink to='/favorites'>Favorites</NavLink></li>
        <li><NavLink to='/artists/new'>Register artist</NavLink></li>
      </ul>
    </>
  )

const HamburgerMenu = () => menuMarkup

export default HamburgerMenu