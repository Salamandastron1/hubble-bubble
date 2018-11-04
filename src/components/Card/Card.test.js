import Card from './Card'
import React from 'react'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot()
  })
})