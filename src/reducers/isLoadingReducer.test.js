import { isLoadingReducer } from './isLoadingReducer'

it('should return a default state', () => {
  const expected = true
  const mockAction = {
    type: 'I_LOVE_BUBBLES'
  }
  const result = isLoadingReducer(undefined, mockAction)

  expect(result).toEqual(expected)
})
it('should toggle the state if the type is LOADING_DONE', () => {
  const expected = false;
  const mockAction = {
    type: 'TOGGLE_LOADING'
  }
  const mockState = true;
  const result = isLoadingReducer(mockState,mockAction) 

  expect(result).toEqual(expected)
})
it('should return a value of false if type TOGGLE_LOADING is received', () => {
  const expected = false
  const mockAction = {
    type: 'TOGGLE_LOADING'
  }
  const mockState = true;
  const result = isLoadingReducer(mockState, mockAction)

  expect(result).toEqual(expected)
})

