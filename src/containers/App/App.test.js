import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import {BrowserRouter} from 'react-router-dom'
import { fetchData } from '../../thunks/fetchData'
import { mapDispatchToProps } from './App'
jest.mock('../../thunks/fetchData')
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'


describe('app', () => {
  let mockStore;
  let initialState;
  let store;
  beforeEach(() => {
    mockStore = configureMockStore()
    initialState = {movies: []}
    store = mockStore(initialState);
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<App store={store}/>)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps',() => {
    it('should call dispatch withn the correct params', () => {
      const url = 'https://url'
      const mockDispatch = jest.fn()
      const mappedDispatch = mapDispatchToProps(mockDispatch)

      mappedDispatch.fetchData(url)

      expect(mockDispatch).toHaveBeenCalledWith(fetchData(url))
      expect(fetchData).toHaveBeenCalled()
    })
  })
  describe('mapStateToProps', () => {
    it('should return an object with currentState')
  })
})