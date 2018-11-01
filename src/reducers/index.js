import { combineReducers } from 'redux';
import { astronomicalObjectsReducer } from './astronomicalObjectsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { filterReducer } from './filterReducer'

const rootReducer = combineReducers({
  astronomicalObjects: astronomicalObjectsReducer,
  isLoading: isLoadingReducer,
  filter: filterReducer,
})

export default rootReducer;