import { Game } from './Game'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps} from './Game'
import React from 'react'
import { popUpToggle } from '../../action-creators/popUpToggle'
import configureMockStore from 'redux-mock-store'


describe('Game', () => {
  let mockStore;
  let initialState;
  let store;
  let wrapper;
  beforeEach(() => {
    mockStore = configureMockStore()
    initialState = {movies: []}
    store = mockStore(initialState);
    wrapper = shallow(<Game astronomicalObjects={
      [{id: 1, image_files:'meow', name: 'class'},{id: 2, image_files:'meow', name: 'name'},{id: 3, image_files:'meow', name: 'name'},{id: 4, image_files:'meow', name: 'name'},{id: 5, image_files:'meow', name: 'name'}
      ]}
      togglePopUp={() => jest.fn()} 
      isLoading={false}/>)
  })
  describe('mapStateToProps', () => {
    it('should return a an object with state inside of it', () => {
      const desired = {
        astronomicalObjects: [{id: 4, name: 'name',},{id: 5, name: 'meow'}],
        isLoading: true,
      }
      const mockState = {
        error: 'haserrored',
        astronomicalObjects: [{id: 4, name: 'name',},{id: 5, name: 'meow'}],
        filter: 'SHOW_ALL',
        isLoading: true,
      }
      const result = mapStateToProps(mockState)

      expect(result).toEqual(desired)
    })
  })
  it('should call handleSubmit on submision', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }
    const mockState = {
      "answers": [1, 3, 2, 0], 
      "correct": false, 
      "imageSelection": 3, 
      "selectedAnswer": 2
    }

    wrapper.setState({
      selectedAnswer: 2,
      answers: [1, 3 , 2, 0],
      imageSelection: 3,
    })
    wrapper.find('form').simulate('submit', mockEvent)

    expect(wrapper.state()).toEqual(mockState)
  })
  it('should matcht the state when a radio button is pressed', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }
    const mockState = {"answers": [2, 1, 0, 3], "correct": false, "imageSelection": 2, "selectedAnswer": 1}

    wrapper.find('.class').simulate('change', mockEvent)
    expect(wrapper.state().selectedAnswer).toEqual(1)
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedDispatch = mapDispatchToProps(mockDispatch)

      mappedDispatch.togglePopUp()

      expect(mockDispatch).toHaveBeenCalledWith(popUpToggle())
    })
  })
})