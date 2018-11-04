import Start from './Start'
import React from 'react'
import { shallow } from 'enzyme'


it('should match the snapshot', () => {
  const wrapper = shallow(<Start />)

  expect(wrapper).toMatchSnapshot()
})