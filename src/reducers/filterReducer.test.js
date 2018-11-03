import { filterReducer } from './filterReducer';
import * as filter from '../action-creators/filterActions'

describe('filterReducer', () => {
  it('should return a default state', () => {
    const expected = 'SHOW_ALL'
    const mockAction = {
      type: 'GOBBLEDY_GOOK'
    }
    const result = filterReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })

  it('the state should match the type that is passed it; SHOW_GAME', () => {
    const expected = 'SHOW_GAME'
    const mockState = 'SHOW_ALL'
    const result = filterReducer(mockState, filter.showGame())

    expect(result).toEqual(expected)
  })
  it('should have the state change to match the type, SHOW_MATCHES', () => {
    const expected = 'SHOW_MATCHES'
    const mockState = 'SHOW_GAME'
    const result = filterReducer(mockState, filter.showMatches())

    expect(result).toEqual(expected)
  })
  it('should have the state change to match type: SHOW_ALL', () => {
    const expected = 'SHOW_ALL';
    const mockState = 'SHOW_GAME'
    const result = filterReducer(mockState, filter.showAll())

    expect(result).toEqual(expected)
  })
})