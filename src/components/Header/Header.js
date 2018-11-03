import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  return (
    <header className="App-header">
      <h1 
        className='title'>
        <span className='bubble'>
          Bubble
        </span>  
        <span className='shimmer'>Hubble </span>
      </h1>
    </header>
  )
}

export default Header;