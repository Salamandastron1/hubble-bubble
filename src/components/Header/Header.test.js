import Header from './Header'
import React from 'react'
import { shallow } from 'enzyme'


it('should match the snapshot', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot()
})