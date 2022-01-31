import { NavLink } from 'react-router-dom'
import '../styles/HamburgerMenu.css';

const menuMarkup = (
    <>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
      <ul class="menu">
        <li><NavLink to='/events'>Events</NavLink></li>
        <li><NavLink to='/artists'>Artists</NavLink></li>
        <li><NavLink to='/events/new'>Register new event</NavLink></li>
        <li><NavLink to='/artists/new'>Register new artist</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
    </>
  )

const HamburgerMenu = () => menuMarkup

export default HamburgerMenu