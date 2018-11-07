import React from 'react'
import './StarDetails.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const StarDetails = (props) => {
  const { image_files, description, name, isLoading } = props
  if(isLoading) {
    return (
      <div className='spinner'>
        <div className='star1'></div>
        <div className='star2'></div>
      </div>
    )
  } else {
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
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading
})
export default connect(mapStateToProps)(StarDetails);