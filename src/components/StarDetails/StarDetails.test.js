import React from 'react'
import { shallow } from 'enzyme'
import {StarDetails, mapStateToProps} from './StarDetails'

describe('StarDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow (<StarDetails />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with the store state', () => {
    const desired = {
      isLoading: true
    }
    const mockState = {
      isLoading: true,
      error: 'meow',
      filter: 'show'
    }
    const result = mapStateToProps(mockState)

    expect(result).toEqual(desired)
  })
})