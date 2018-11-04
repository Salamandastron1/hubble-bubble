import { Game } from './Game'
import { shallow } from 'enzyme'
import React from 'react'

describe('Game', () => {
  it('should matcht the snapshot', () => {
    const wrapper = shallow(<Game />)

    expect(wrapper).toMatchSnapshot()
  })
})