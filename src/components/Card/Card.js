import React from 'react'


const Card = ({star}) => {
  const { name, image_files, description } = star
  return (
    <article className='card'>
      <h4>{name}</h4>
      <img src={image_files} height='400' width='500'/>
      <p>{description}</p>
    </article>
  )
}

export default Card;