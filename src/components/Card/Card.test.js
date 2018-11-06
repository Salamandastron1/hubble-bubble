import Card from './Card'
import React from 'react'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card star={{name: 'name', image_files: 'meow', id: 4, description: 'derp'}}/>)

    expect(wrapper).toMatchSnapshot()
  })
})