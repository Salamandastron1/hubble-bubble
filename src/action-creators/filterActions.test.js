import * as filter from './filterActions'

describe('showAll', () => {
  it('should return an object with type SHOW_ALL', () => {
    const expected = {
      type: 'SHOW_ALL',
    }
    const result = filter.showAll()

    expect(result).toEqual(expected)
  })
  it('should return an object with type SHOW_GAME', () => {
    const expected = {
      type: 'SHOW_GAME',
    }
    const result = filter.showGame()

    expect(result).toEqual(expected)
  })
  it('should return an object with type SHOW_MATCHES', () => {
    const expected = {
      type: 'SHOW_MATCHES',
    }
    const result = filter.showMatches();

    expect(result).toEqual(expected)
  })
})