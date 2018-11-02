import { starsReceived } from '../action-creators/astronomicalObjectsActions'
import { toggleLoading } from '../action-creators/toggleLoading'

export const fetchData = url => {
  return async (dispatch) => { 
    if(!isLoading) {
      dispatch(toggleLoading())
    }
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.status)
      } else {
        const starData = await response.json()
        dispatch(starsReceived(starData))
      }
    } catch (e) {
      throw Error(e.message)
    }
  }
}