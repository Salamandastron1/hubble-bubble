export const filterReducer = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_GAME':
      return 'SHOW_GAME'
    case 'SHOW_MATCHES':
      return 'SHOW_MATCHES'
    case 'SHOW_ALL':
      return 'SHOW_ALL'
    default:
      return state
  }
}