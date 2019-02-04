import { errorReceived } from '../action-creators/errorReceived'

export const imagesFetch = stars => {
  return dispatch => {
    const unresolvedPromises = stars.map(async star => {
      try {
        let description;
        const url = `https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/image/${star.id}`
        const response = await fetch(url)
        if(!response.ok) {
          throw Error(response.message)
        } else {
          const data = await response.json()
          const filteredImage = filterImages(data.image_files);
          if(data.description) {
            description = data.description.replace(/<(\/)?strong([^>]*)>/g, '').replace(/<(\/)?p([^>]*)>/g, '');
          }
          const starObject= {
            name: data.name, 
            description: description, image_files: filteredImage.file_url, 
            id: star.id, 
            selected: false
          }

          return starObject;
        }
      } catch(e) {
        dispatch(errorReceived(e.message))
      }
    })
    return Promise.all(unresolvedPromises)
  }
}

export const filterImages = data => {
  return data.find(image => {
    if (image.file_url.includes('.png') && image.width >= 500) {
      return image
    } else if (image.file_url.includes('.jpg') && image.width >= 500) {
      return image
    } else if (image.file_url.includes('.png') && image.width >= 200) {
      return image
    } else {
      return null
    }
  })
}