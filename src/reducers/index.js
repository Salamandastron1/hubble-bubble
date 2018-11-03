import { combineReducers } from 'redux';
import { astronomicalObjectsReducer } from './astronomicalObjectsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { filterReducer } from './filterReducer'
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers({
  astronomicalObjects: astronomicalObjectsReducer,
  isLoading: isLoadingReducer,
  filter: filterReducer,
  error: errorReducer,
})

export default rootReducer;