import { combineReducers } from 'redux';
import { astronomicalObjectsReducer } from './astronomicalObjectsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { filterReducer } from './filterReducer'
import { errorReducer } from './errorReducer'
import { popUpReducer } from './popUpReducer'

const rootReducer = combineReducers({
  astronomicalObjects: astronomicalObjectsReducer,
  isLoading: isLoadingReducer,
  filter: filterReducer,
  error: errorReducer,
  popUp: popUpReducer,
})

export default rootReducer;