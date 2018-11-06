import { popUpToggle } from './popUpToggle'

it('should return an action object with type POPUP_TOGGLE', () => {
  const desired = {
    type: 'POPUP_TOGGLE'
  }
  const result = popUpToggle()

  expect(result).toEqual(desired)
})