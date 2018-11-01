import * as star from './astronomicalObjectsActions'

describe('starsReceived', () => {
  let astronomicalObjects;

  beforeEach(() => {
    astronomicalObjects = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
  })
  it('should return an object with type STARS_RECEIVED', () => {
    const expected = {type: 'STARS_RECEIVED', astronomicalObjects: [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]}
    const result = star.starsReceived(astronomicalObjects)

    expect(result).toEqual(expected)
  })
  it('should return object with a type and and array of objects', () => {
    const expected = {
      type: 'STARS_RECEIVED',
      astronomicalObjects: [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
    }
    const result = star.starsReceived(astronomicalObjects)

    expect(result).toEqual(expected)
  })
})

describe('toggleSelected', () => {
  it('should return an object with type TOGGLE_SELECTED', () => {
    const expected = {
      type: 'TOGGLE_SELECTED',
      id: 4,
    }
    const result = star.toggleSelected(4)

    expect(result).toEqual(expected)
  })
})