import { astronomicalObjectsReducer } from './astronomicalObjectsReducer'

describe('astronomicalObjectsReducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
  })
  it('should return the default state', () => {
    const desired = []
    const mockAction = {
      type: 'NOT_TYPE'
    }
    const result = astronomicalObjectsReducer(undefined, mockAction)

    expect(result).toEqual(desired)
  })
  it('should change the state to an array of objects when the type, STARS_RECEIVED', () => {
    const desired = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
    const mockAction = {
      type: 'STARS_RECEIVED',
      astronomicalObjects: [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
    }
    const result = astronomicalObjectsReducer(mockState, mockAction)

    expect(result).toEqual(desired)
  })

  it('should toggle selected if the id matches when type TOGGLE_SELECTED is called', () => {
    const desired = [{id: 1, object: 'Crab Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: true}, {id: 2,object: 'Horse Head Nebula', size: '.5 lightyears', distance: '40,000 light years', selected: false}]
    const mockAction = {
      type: 'TOGGLE_SELECTED',
      id: 1,
    }
    const result = astronomicalObjectsReducer(mockState, mockAction)

    expect(result).toEqual(desired)
  })
})