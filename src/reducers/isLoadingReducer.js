export const isLoadingReducer = (state = true, action) => {
  switch(action.type) {
    case 'TOGGLE_LOADING':
      return state = !state
    default:
      return state
  }
}