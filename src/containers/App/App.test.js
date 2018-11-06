import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import { fetchStarIds } from '../../thunks/fetchStarIds'
import {mapStateToProps, mapDispatchToProps } from './App'
import configureMockStore from 'redux-mock-store'
jest.mock('../../thunks/fetchStarIds')


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

      mappedDispatch.fetchStarIds(url)

      expect(mockDispatch).toHaveBeenCalledWith(fetchStarIds(url))
      expect(fetchStarIds).toHaveBeenCalled()
    })
  })
  describe('mapStateToProps', () => {
    it('should return an object with currentState', () => {
      const desired = {"astronomicalObjects": [{"star": "Sol"}], "isLoading": true}
      const mockState = {
        isLoading: true,
        error: 'no errors here',
        astronomicalObjects: [{star: 'Sol'}]
      }
      const result = mapStateToProps(mockState)

      expect(result).toEqual(desired)
    })
  })
})