import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

export const Study = props => {
  const { astronomicalObjects } = props
  const cards = ''
  return (
    <section>
      {cards}
    </section>
  )
}

export const mapStateToProps = state => ({
  astronomicalObjects: state.astronomicalObjects,
  filter: state.filter
})

export default connect(mapStateToProps)(Study)