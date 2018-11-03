export const errorReducer =(state = '', action ) => {
  switch(action.type) {
    case 'ERROR_RECEIVED':
      return action.error
    default:
      return state
  }
}