import { Study } from './Study'
import { shallow } from 'enzyme'
import React from 'react'
import { mapStateToProps } from './Study'

describe('study', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Study />)

    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with the properties desired from state', () => {
      const desired = {}
      const mockState = {}
      const result = mapStateToProps(mockState)

      expect(result).toEqual(desired)
    })
  })
})

