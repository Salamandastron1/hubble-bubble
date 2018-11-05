import React from 'react'
import { connect } from 'react-redux'
import { toggleSelected } from '../../action-creators/astronomicalObjectsActions'
import { makeQuestions } from '../../util/helper'


export const Game = (props) => {
  const { selectedAnswer, astronomicalObjects, isLoading } = props
  const randomIndices = makeQuestions(astronomicalObjects)
  const randomAnswers = randomIndices.map(indice => {
    return (            
      <div>
          <input type='radio' name='name' value={astronomicalObjects[indice].name} checked='checked'/>
          <label for={astronomicalObjects[indice].name}>{astronomicalObjects[indice].name}</label>
      </div>
    )
  })

  if(isLoading) {
    return (
      <div className='spinner'>
        <div className='star1'></div>
        <div className='star2'></div>
      </div>
    )
  } else {
    return (
      <section>
        <img height='400' width='400'src={astronomicalObjects[randomIndices[0]].image_files} />
          <form>
          <fieldset>
            <legend>Which name matches the picture?</legend>
              {randomAnswers}
          </fieldset>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  astronomicalObjects: state.astronomicalObjects,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  selectedAnswer: (id) => dispatch(toggleSelected(id))
})
export default connect(mapStateToProps)(Game)
