import React from 'react'
import { connect } from 'react-redux'
import { toggleSelected } from '../../action-creators/astronomicalObjectsActions'


export const Game = (props) => {
  const { selectedAnswer, astronomicalObjects, isLoading } = props
  const randomIndice = Math.floor(Math.random() * Math.floor(astronomicalObjects.length - 1))
  if(isLoading) {
    return (
      <div className='spinner'>
        <div className='star1'></div>
        <div className='star2'></div>
      </div>
    )
  } else {
    debugger
    return (
      <section>
        <img src={astronomicalObjects[randomIndice].image_files} />
        <button>Submit</button>
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
