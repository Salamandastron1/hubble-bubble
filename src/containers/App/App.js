import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchStarIds } from '../../thunks/fetchStarIds';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Game from '../Game/Game'
import Study from '../Study/Study'
import StarDetails from '../../components/StarDetails/StarDetails'

class App extends Component {

  componentDidMount () {
    const { fetchStarIds, isLoading } = this.props
    const url = 'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images/all?page=2'

    fetchStarIds(url, isLoading)
  }
  render() {
    const { history, astronomicalObjects } = this.props
    return (
      <div className="App">
        <header
          className="App-header">
          <h1 
            className='title'>
            <span
            onClick={() => history.push('/')} 
            className='bubble'>
              Bubble
            </span>  
            <span
            onClick={() => history.push('/')} 
            className='shimmer'>Hubble </span>
          </h1>
          <NavLink 
            className='study'
            to='/studytime'>
            Need to Study???
          </NavLink>
        </header>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/gametime' component={Game} />
          <Route path='/studytime/:id' render={({match}) => {
            const star = astronomicalObjects.find(object => {
              return object.id === parseInt(match.params.id)
            })
            return <StarDetails {...star}/>
          }} />
          <Route path='/studytime' component={Study} />
        </Switch>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  astronomicalObjects: state.astronomicalObjects,
})
export const mapDispatchToProps = dispatch => ({
  fetchStarIds: (url, isLoading) => dispatch(fetchStarIds(url, isLoading))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
