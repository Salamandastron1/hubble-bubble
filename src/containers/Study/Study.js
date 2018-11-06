import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import './Study.css'

export const Study = props => {
  const { astronomicalObjects, isLoading } = props
  const cards = astronomicalObjects.map(star => {
    return <Card star={star} key={star.id}/>
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
      <section className='card-container'>
        {cards}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  astronomicalObjects: state.astronomicalObjects,
  filter: state.filter,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(Study)