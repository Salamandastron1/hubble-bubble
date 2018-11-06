import { makeQuestions } from './helper'

describe('makeQuestions', () => {
  it('should return an empty array if props array is less than 5', () => {
    const desired = [];
    const mockArray= [1, 3, 4]
    const result = makeQuestions(mockArray)

    expect(result).toEqual(desired)
  })
  it('should return array of 4 numbers if the array is 5 or more in length', () => {
    const desired = 4
    const mockArray= [1, 3, 4, 4 ,5, 6]
    const result = makeQuestions(mockArray)

    expect(result.length).toBe(desired)
  })
})