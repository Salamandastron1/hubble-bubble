import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({star}) => {
  const { name, image_files, id } = star
  return (
    <Link to={`/studytime/${id}`}>
      <article className='card'>
        <h4>{name}</h4>
        <img src={image_files} alt={name} height='400' width='500'/>
      </article>
    </Link>
  )
}

export default Card;