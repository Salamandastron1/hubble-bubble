import { starsReceived } from '../action-creators/astronomicalObjectsActions'
import { toggleLoading } from '../action-creators/toggleLoading'

export const fetchData = (url, isLoading) => {
  return async (dispatch) => { 
    if(!isLoading) {
      dispatch(toggleLoading())
    }
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw new Error(response.message)
      } else {
        const starData = await response.json()
        dispatch(toggleLoading())
        dispatch(starsReceived(starData))
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}