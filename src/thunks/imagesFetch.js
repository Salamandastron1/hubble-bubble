import { toggleLoading } from '../action-creators/toggleLoading'
import { errorReceived } from '../action-creators/errorReceived'

export const imagesFetch = stars => {
  return dispatch => {
    dispatch(toggleLoading())
    const unresolvedPromises = stars.map(async star => {
      try {
        const url = `https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/image/${star.id}`
        const response = await fetch(url)
        if(!response.ok) {
          throw Error(response.message)
        } else {
          const data = await response.json()
          return {...data, id: star.id}
        }
      } catch(e) {
        dispatch(errorReceived(e.message))
      }
    })
    return Promise.all(unresolvedPromises)
  }
}