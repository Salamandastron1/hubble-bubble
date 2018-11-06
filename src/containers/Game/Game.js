import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as starActions from '../../action-creators/astronomicalObjectsActions'
import { makeQuestions } from '../../util/helper'


class Game extends Component {
  constructor() {
    super()
    this.state = {
      selectedAnswer: '',
      answers: [],
      imageSelection: null,
    }
  }

  buttonSelected = (id, randomIndices, subject) => {
    this.setState({
      selectedAnswer: id,
      answers: randomIndices,
      imageSelection: subject,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      selectedAnswer: '',
      answers: []
    })
  }

  render () {
    const { chooseAnswer, astronomicalObjects, isLoading } = this.props;
    const { selectedAnswer, answers, imageSelection } = this.state;
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
        <div key={astronomicalObjects[number].id}>
            <input 
              type='radio' 
              name='name' 
              value={astronomicalObjects[number].name} 
              checked={astronomicalObjects[number].id === selectedAnswer}
              onChange={() => this.buttonSelected(astronomicalObjects[number].id, randomIndices, subject)}/>
            <label htmlFor={astronomicalObjects[number].name}>{astronomicalObjects[number].name}</label>
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
          <img height='400' width='400'src={astronomicalObjects[randomIndices[subject]].image_files} />
            <form
              onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Which name matches the picture?</legend>
                {randomAnswers}
            </fieldset>
            <input 
              type='submit' 
              value='Submit'/>
          </form>
        </section>
      )
    }
  }
}

export const mapStateToProps = state => ({
  astronomicalObjects: state.astronomicalObjects,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  chooseAnswer: (id) => dispatch(starActions.toggleSelected(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Game)
