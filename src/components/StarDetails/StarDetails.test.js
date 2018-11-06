import React from 'react'
import { shallow } from 'enzyme'
import StarDetails from './StarDetails'

describe('StarDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow (<StarDetails />)

    expect(wrapper).toMatchSnapshot()
  })
})