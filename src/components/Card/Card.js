import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({star}) => {
  const { name, image_files, id } = star
  return (
    <Link 
      className='link'
      to={`/hubble-bubble/studytime/${id}`}>
      <article
        style={{backgroundImage: `url(${image_files}`}} 
        className='card'>
        <h4 
          className='card-name'
        >{name}</h4>
      </article>
    </Link>
  )
}

export default Card;