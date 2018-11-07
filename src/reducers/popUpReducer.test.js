import { popUpReducer } from './popUpReducer'
import { popUpToggle } from '../action-creators/popUpToggle'

it('should return a default state', () => {
  const desired = false
  const mockAction = {
    type: 'YO_DAWG'
  }
  const result = popUpReducer(undefined, mockAction)

  expect(result).toEqual(desired)
})

it('should return a new state when receiving type POP_TOGGLE', () => {
  const desired = true
  const mockAction = popUpToggle()
  const result = popUpReducer(false, mockAction)

  expect(result).toEqual(desired)
})
it('should toggle state even if the state is true', () => {
  const desired = false
  const mockAction = popUpToggle()
  const result = popUpReducer(true, mockAction)

  expect(result).toEqual(desired)
})