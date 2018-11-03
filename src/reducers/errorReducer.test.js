import { errorReducer } from './errorReducer'

describe('errorReducer', () => {
  it('should return a default state', () => {
    const desired = ''
    const mockState = undefined
    const mockAction = {
      type: 'NOPE_NOPERS',
      error: 'wut'
    }
    const result = errorReducer(mockState, mockAction)

    expect(result).toEqual(desired)
  })
  it('should return a new value for state when type ERROR_RECEIVED is given as ar', () => {
    const desired = 'Error 500 status'
    const mockState = 'meow'
    const mockAction = {
      type: 'ERROR_RECEIVED',
      error: 'Error 500 status'
    }
    const result = errorReducer(mockState, mockAction)

    expect(result).toEqual(desired)
  })
})