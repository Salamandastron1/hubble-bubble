import { PopUp } from './PopUp'
import React from 'react'
import {shallow} from 'enzyme'

it('should match the snapshot', () => {
  const mockRefresh = jest.fn()
  const wrapper = shallow(<PopUp 
    star={{name: 'name', description: 'blah', image_files: 'url', id: 4}}
    refreshState={mockRefresh}/>)

  expect(wrapper).toMatchSnapshot()
})
it('should call mockRefresh on button click', () => {
  const mockRefresh = jest.fn()
  const mockPop = jest.fn()
  const wrapper = shallow(<PopUp 
    star={{name: 'name', description: 'blah', image_files: 'url', id: 4}}
    nextQuestion={mockRefresh}
    closePopUp={mockPop}/>)
  wrapper.find('button').simulate('click')

  expect(mockRefresh).toHaveBeenCalled()
})
it('should call dispatch on button click', () => {
  const mockDispatch = jest.fn()
  const mockRefresh = jest.fn()
  const wrapper = shallow(<PopUp 
    star={{name: 'name', description: 'blah', image_files: 'url', id: 4}}
    closePopUp={mockDispatch}
    nextQuestion={mockRefresh}/>)
  wrapper.find('button').simulate('click')

  expect(mockDispatch).toHaveBeenCalledWith()
})