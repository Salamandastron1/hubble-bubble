import React from 'react'
import { popUpToggle } from '../../action-creators/popUpToggle'
import { connect } from 'react-redux'
import './PopUp.css'

export const PopUp = (props) => {
  const { star, nextQuestion, closePopUp, correct } = props

  return (
    <section className='popup-outer'>
      <div className='popup-inner'>
      {correct ?
        <h2 className='response'>WOW YOU'RE RIGHT</h2>
        : <h2 className='response'>Noooooot quite :)</h2>}
        <h2
          className='name-star'
        >{star.name}</h2>
        <button
          className='next-question'
          onClick={() => {
            closePopUp();
            nextQuestion()
          }}
        >
          X
        </button>
        <div
          className='pop-up-image'
          style={{backgroundImage: `url(${star.image_files})`}}>
        </div>
        <p 
          className='description'
        >
          {star.description}
        </p>
      </div>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  closePopUp: () => dispatch(popUpToggle())
})

export default connect(undefined, mapDispatchToProps)(PopUp)