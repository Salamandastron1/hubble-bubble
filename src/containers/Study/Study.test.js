import { Study } from './Study'
import { shallow } from 'enzyme'
import React from 'react'
import { mapStateToProps } from './Study'

describe('study', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Study astronomicalObjects={[{id: 4, name: 'name'}]}/>)

    expect(wrapper).toMatchSnapshot()
  })
  it('should render something different if is isLoading is true', () => {
    const wrapper = shallow(<Study astronomicalObjects={[]} isLoading={true}/>)

    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with the properties desired from state', () => {
      const desired = {
        astronomicalObjects: [{meow: 'meow'}],
        filter: 'SHOW_ALL',
        isLoading: false
      }
      const mockState = {
        astronomicalObjects: [{meow: 'meow'}],
        filter: 'SHOW_ALL',
        isLoading: false,
        error: 'meow'
      }
      const result = mapStateToProps(mockState)

      expect(result).toEqual(desired)
    })
  })
})

