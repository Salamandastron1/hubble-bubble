import { toggleLoading } from './toggleLoading'

it('should return an action object', () => {
  const expected = {
    type: 'TOGGLE_LOADING'
  }
  const result = toggleLoading()
  
  expect(result).toEqual(expected)
})