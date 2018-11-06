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
        <h1>WOW YOU'RE RIGHT</h1>
        : <h1>Noooooot quite :)</h1>}
        <h2>{star.name}</h2>
        <button
          onClick={() => {
            closePopUp();
            nextQuestion()
          }}
        >
          Next Question
        </button>
        <img 
          src={star.image_files} 
          height='200'
          width='300' />
        <p>{star.description}</p>
      </div>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  closePopUp: () => dispatch(popUpToggle())
})

export default connect(undefined, mapDispatchToProps)(PopUp)