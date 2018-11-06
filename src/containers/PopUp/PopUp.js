import React from 'react'
import { popUpToggle } from '../../action-creators/popUpToggle'
import { connect } from 'react-redux'

export const PopUp = (props) => {
  console.log(props)
  const { star, nextQuestion, closePopUp } = props
  return (
    <section>
    <h1>WOW YOU CLICKED SUBMIT</h1>
      <h2>{star.name}</h2>
      <img 
        src={star.image_files} 
        height='200'
        width='300' />
      <p>{star.description}</p>
      <button
        onClick={() => {
          closePopUp();
          nextQuestion()
        }}
      >
        Next Question
      </button>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  closePopUp: () => dispatch(popUpToggle())
})

export default connect(undefined, mapDispatchToProps)(PopUp)