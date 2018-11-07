import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as starActions from '../../action-creators/astronomicalObjectsActions'
import { makeQuestions } from '../../util/helper'
import PopUp from '../PopUp/PopUp'
import { popUpToggle } from '../../action-creators/popUpToggle'
import './Game.css'

export class Game extends Component {
  constructor() {
    super()
    this.state = {
      selectedAnswer: '',
      answers: [],
      imageSelection: null,
      correct: false,
    }
  }

  buttonSelected = (id, randomIndices, subject) => {
    this.setState({
      selectedAnswer: id,
      answers: randomIndices,
      imageSelection: subject,
    })
  }
  nextQuestion = () => {
    this.setState({
      selectedAnswer: '',
      answers: [],
      imageSelection: null,
      correct: false
    })
  }
  handleSubmit = (imageId, radioId) => {
    if(imageId === radioId) {
      this.props.togglePopUp()
      this.setState({
        ...this.state,
        correct: true
      })
    } 
    if(this.state.imageSelection !== null && imageId !== radioId) {
      this.props.togglePopUp()
      this.setState({
        ...this.state
      })
    }
  }

  render () {
    const { chooseAnswer, astronomicalObjects, isLoading, popUp } = this.props;
    const { selectedAnswer, answers, imageSelection, correct } = this.state;
    let randomIndices;
    let subject;
    if(answers.length > 1) {
      randomIndices = answers
      subject = imageSelection
    } else {
      randomIndices = makeQuestions(astronomicalObjects)
      subject = Math.floor(Math.random() * Math.floor(randomIndices.length - 1))
    }
    const randomAnswers = randomIndices.map(number => {
      return (            
        <div 
          key={astronomicalObjects[number].id}>
            <input
              className={astronomicalObjects[number].name} 
              type='radio' 
              name='name' 
              value={astronomicalObjects[number].name} 
              checked={astronomicalObjects[number].id === selectedAnswer}
              onChange={() => this.buttonSelected(astronomicalObjects[number].id, randomIndices, subject)}/>
            <label 
              htmlFor={astronomicalObjects[number].name}>
              {astronomicalObjects[number].name}
            </label>
        </div>
      )
    })
  const answerSubject = astronomicalObjects[randomIndices[subject]];
    if(isLoading) {
      return (
        <div className='spinner'>
          <div className='star1'></div>
          <div className='star2'></div>
        </div>
      )
    } else {
      return (
        <section className='game'>
          <div 
            className='bubble-image'
            style={{backgroundImage: `url(${answerSubject.image_files})`}}>
          </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                this.handleSubmit(answerSubject.id, selectedAnswer)
              }
            }
              className='game-form'>
            <fieldset>
              <legend>Which name matches the picture?</legend>
                {randomAnswers}
            </fieldset>
            <input
              className='submit' 
              type='submit' 
              value='Submit'/>
          </form>
          {popUp ? 
            <PopUp
              correct={correct} 
              star={answerSubject}
              nextQuestion={this.nextQuestion}
            />
          : null }
        </section>
      )
    }
  }
}

export const mapStateToProps = state => ({
  astronomicalObjects: state.astronomicalObjects,
  isLoading: state.isLoading,
  popUp: state.popUp,
})

export const mapDispatchToProps = dispatch => ({
  togglePopUp: () => dispatch(popUpToggle())
})
export default connect(mapStateToProps, mapDispatchToProps)(Game)
