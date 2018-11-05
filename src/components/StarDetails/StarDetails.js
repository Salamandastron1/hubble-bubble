import React from 'react'
import './StarDetails.css'
import { Link } from 'react-router-dom'

const StarDetails = (props) => {
  const {image_files, description, name} = props
  return(
    <section>
      <Link to='/studytime' className='back-btn'>◀ back</Link>
      <h2>{name}</h2>
      <img src={image_files} alt ={name}/>
      <p>{description} </p>
    </section>
  )
}

export default StarDetails;