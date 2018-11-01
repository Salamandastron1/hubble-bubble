export const astronomicalObjectsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STARS_RECEIVED':
      return action.astronomicalObjects
    case 'TOGGLE_SELECTED':
      return state.map(star => {
        if(star.id === action.id) {
          return {...star, selected: !star.selected}
        } else {
          return star
        }
      })
    default:
      return state
  }
}