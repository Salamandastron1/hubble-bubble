import React from 'react'
import './StarDetails.css'
import { Link } from 'react-router-dom'

const StarDetails = (props) => {
  const { image_files, description, name } = props
  return(
    <section className='individual-card'>
      <Link 
        to='/studytime' 
        className='back-btn'
      >
        ◀ back
      </Link>
      <h2
        className='individual-name'
      >
        {name}
      </h2>
      <img 
        src={image_files} 
        alt ={name}
        height='500'
        width='500'
      />
      <p
        className='individual-description'
      >
        {description} 
      </p>
    </section>
  )
}

export default StarDetails;