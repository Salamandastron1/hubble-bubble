import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  return (
    <section className='begin-game'>
      <div className='planet-orbit'>
      </div>
      <div className='button-text'>
        <NavLink 
          className='game-nav'
          to='/hubble-bubble/gametime'>
          Start!!! 
        </NavLink>
      </div>
      <div className='planet-orbit'>
      </div>
    </section>
  )
}

export default Header;