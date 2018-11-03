import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from '../../thunks/fetchData'

class App extends Component {

  componentDidMount () {
    const { fetchData, isLoading } = this.props
    const url = 'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images'

    fetchData(url, isLoading)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  isLoading: state.isLoading
})
export const mapDispatchToProps = dispatch => ({
  fetchData: (url, isLoading) => dispatch(fetchData(url, isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
