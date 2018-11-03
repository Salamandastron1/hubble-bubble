import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import satellite from '../../assets/Aha-Soft-Transport-First-satellite.ico'

const Header = (props) => {
  return (
    <section className='begin-game'>
    <img src={satellite}/>
      <NavLink 
        className='game-nav'
        to='/hubbleTrouble'>
        Start Stellar Star Stream 
      </NavLink>
    <img src={satellite} />
    </section>
  )
}

export default Header;