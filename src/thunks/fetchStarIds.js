import { starsReceived } from '../action-creators/astronomicalObjectsActions'
import { toggleLoading } from '../action-creators/toggleLoading'
import { errorReceived } from '../action-creators/errorReceived'
import { imagesFetch } from './imagesFetch'

export const fetchStarIds = (url, isLoading) => {
  return async (dispatch) => {
    if(!isLoading) {
      dispatch(toggleLoading())
    }
    try {
      const response = await fetch(url)
      if(!response.ok) {
        dispatch(errorReceived(response.message))
      } else {
        const starIds = await response.json()
        const starData = await dispatch(imagesFetch(starIds))
        dispatch(starsReceived(starData))
        dispatch(toggleLoading())
      }
    } catch (e) {
      dispatch(errorReceived(e.message))
    }
  }
}