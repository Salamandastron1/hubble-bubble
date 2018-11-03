import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchStarIds } from '../../thunks/fetchStarIds';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    const { fetchStarIds, isLoading } = this.props
    const url = 'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images'

    fetchStarIds(url, isLoading)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 
            className='title'>
            <span className='bubble'>
              Bubble
            </span>  
            <span className='shimmer'>Hubble </span>
          </h1>
        </header>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  isLoading: state.isLoading
})
export const mapDispatchToProps = dispatch => ({
  fetchStarIds: (url, isLoading) => dispatch(fetchStarIds(url, isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
