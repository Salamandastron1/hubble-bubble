export const popUpReducer = (state = false, action) => {
  switch(action.type) {
    case 'POPUP_TOGGLE':
      return state = !state
    default:
      return state
  }
}