import Game from './Game'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps} from './Game'
import React from 'react'
import { toggleSelected } from '../../action-creators/astronomicalObjectsActions'
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
      [{id: 1, image_files:'meow', name: 'name'},{id: 2, image_files:'meow', name: 'name'},{id: 3, image_files:'meow', name: 'name'},{id: 4, image_files:'meow', name: 'name'},{id: 5, image_files:'meow', name: 'name'}
      ]} 
      store={store}/>)
  })
  it('should matcht the snapshot', () => {
    

    expect(wrapper).toMatchSnapshot()
  })
  it('should return a different render if isLoading is True', () => {
    wrapper = shallow(<Game astronomicalObjects={[{id: 1, image_files:'meow', name: 'name'},{id: 2, image_files:'meow', name: 'name'},{id: 3, image_files:'meow', name: 'name'},{id: 4, image_files:'meow', name: 'name'},{id: 5, image_files:'meow', name: 'name'}]} isLoading={true}
      store={store}/>)

    expect(wrapper).toMatchSnapshot()
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
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedDispatch = mapDispatchToProps(mockDispatch)

      mappedDispatch.chooseAnswer(4)

      expect(mockDispatch).toHaveBeenCalledWith(toggleSelected(4))
    })
  })
})