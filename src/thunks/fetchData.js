import { starsReceived } from '../action-creators/astronomicalObjectsActions'
import { toggleLoading } from '../action-creators/toggleLoading'
import { errorReceived } from '../action-creators/errorReceived'

export const fetchData = (url, isLoading) => {
  return async (dispatch) => {
  debugger; 
    if(!isLoading) {
      dispatch(toggleLoading())
    }
    try {
      const response = await fetch(url)
      if(!response.ok) {
        dispatch(errorReceived(response.message))
      } else {
        const starData = await response.json()
        dispatch(starsReceived(starData))
        dispatch(toggleLoading())
      }
    } catch (e) {
      dispatch(errorReceived(e.message))
    }
  }
}