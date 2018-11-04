import React from 'react'
import { NavLink } from 'react-router-dom';
import './Start.css'
import Header from '../Header/Header'

const Start = (props) => {
 const { history } = props
  return (
    <section className='begin-game'>
      <Header history={history}/>
      <div className='planet-orbit'>
      </div>
      <div className='button-text'>
        <NavLink 
          className='game-nav'
          to='/gametime'>
          Start!!! 
        </NavLink>
      </div>
      <div className='planet-orbit'>
      </div>
    </section>
  )
}

export default Start;