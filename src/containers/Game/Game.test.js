import { Game } from './Game'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps} from './Game'
import React from 'react'
import { toggleSelected } from '../../action-creators/astronomicalObjectsActions'

describe('Game', () => {
  it('should matcht the snapshot', () => {
    const wrapper = shallow(<Game />)

    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return a an object with state inside of it', () => {
      const desired = {
        astronomicalObjects: [{id: 4, name: 'name',},{id: 5, name: 'meow'}]
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

      mappedDispatch.selectedAnswer(4)

      expect(mockDispatch).toHaveBeenCalledWith(toggleSelected(4))
    })
  })
})