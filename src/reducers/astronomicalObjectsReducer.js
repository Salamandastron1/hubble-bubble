export const astronomicalObjectsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STARS_RECEIVED':
      return action.astronomicalObjects
    case 'TOGGLE_SELECTED':
      return state.map(star => star.id === action.id ? {...star, selected: !star.selected}: star)
    default:
      return state
  }
}