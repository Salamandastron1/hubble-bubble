import React from 'react'
import { shallow } from 'enzyme'
import { NotFound } from './NotFound'

it('should matcht the snapshot', () => {
  const wrapper = shallow(<NotFound />)

  expect(wrapper).toMatchSnapshot()
})